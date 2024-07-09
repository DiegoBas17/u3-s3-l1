import { useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchReduceAction } from "../action";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.fetchJobs.content);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const loading = useSelector((state) => state.fetchJobs.loading);
  const error = useSelector((state) => state.fetchJobs.error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchReduceAction(query));
  };

  return (
    <>
      {error ? (
        <Alert variant="warning">errore nel reperimento dei dati</Alert>
      ) : loading ? (
        <Spinner animation="border" className="mt-3" variant="primary" />
      ) : (
        <Container>
          <Row>
            <Col xs={10} className="mx-auto my-3">
              <h1 className="display-1">Remote Jobs Search</h1>
              <Link to="/favorite-company">Favorite</Link>
            </Col>
            <Col xs={10} className="mx-auto">
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="search"
                  value={query}
                  onChange={handleChange}
                  placeholder="type and press Enter"
                />
              </Form>
            </Col>
            <Col xs={10} className="mx-auto mb-5">
              {jobs.map((jobData) => (
                <Job key={jobData._id} data={jobData} />
              ))}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default MainSearch;
