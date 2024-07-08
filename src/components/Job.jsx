import { Row, Col } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favoriteCompanies = useSelector(
    (state) => state.favoriteCompanies.content
  );
  const isFavorite = favoriteCompanies.some(
    (company) => company._id === data._id
  );

  const handleClick = () => {
    if (isFavorite) {
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: data._id,
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
