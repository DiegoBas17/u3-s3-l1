import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FavoriteCompany = () => {
  const favorite = useSelector((state) => state.favoriteCompanies.content);
  console.log(favorite);
  return (
    <>
      {favorite.map((company, index) => {
        return (
          <div key={index}>
            <Link to={`/${company.company_name}`}>{company.company_name}</Link>
          </div>
        );
      })}
    </>
  );
};
export default FavoriteCompany;
