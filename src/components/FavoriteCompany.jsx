import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FavoriteCompany = () => {
  const favoriteCompanies = useSelector(
    (state) => state.favoriteCompanies.content
  );

  return (
    <>
      {favoriteCompanies.map((company) => (
        <div key={company._id}>
          <Link to={`/${company.company_name}`}>{company.company_name}</Link>
        </div>
      ))}
    </>
  );
};

export default FavoriteCompany;
