import { Container } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../action";

const FavoriteCompany = () => {
  const data = useSelector((state) => state.search.content);
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
        type: REMOVE_FAVORITE,
        payload: data._id,
      });
    } else {
      dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    }
  };
  return (
    <Container className="mt-5">
      {favoriteCompanies.map((company) => (
        <div
          className="bg-secondary my-2 p-3 d-flex justify-content-between"
          key={company._id}
        >
          <Link
            to={`/${company.company_name}`}
            className="text-decoration-none text-dark"
          >
            {company.company_name}
          </Link>
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
      ))}{" "}
    </Container>
  );
};

export default FavoriteCompany;
