import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: data,
      });
    } else {
      dispatch({
        type: "ADD_FAVORITE",
        payload: data,
      });
    }
  };
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1}>
        <div>
          {isFavorite ? (
            <HeartFill
              fill="red"
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <Heart onClick={handleClick} style={{ cursor: "pointer" }} />
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Job;
