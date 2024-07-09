import { Container } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { REMOVE_FAVORITE } from "../action";

const FavoriteCompany = () => {
  const dispatch = useDispatch();
  const favoriteCompanies = useSelector(
    (state) => state.favoriteCompanies.content
  );

  const handleClick = (companyId) => {
    dispatch({
      type: REMOVE_FAVORITE,
      payload: companyId,
    });
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
          <button
            onClick={() => handleClick(company._id)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <Trash style={{ cursor: "pointer" }} />
          </button>
        </div>
      ))}
    </Container>
  );
};

export default FavoriteCompany;
