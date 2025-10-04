import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, changeActive } from "./Store/FavoriteSlice";

export default function NavBar() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  function goSearch(e, value) {
    if (e.key === "Enter") {
      dispatch(changeActive(1));
      dispatch(setSearch(value));
      navigator("/products");
    }
  }
  return (
    <nav>
      <Link to="/" onClick={() => setSearch("")}>
        Logo
      </Link>
      <input
        onKeyDown={(e) => goSearch(e, e.target.value)}
        placeholder="Search.."
      />
      <div className="search-box ">
        <Link to="/favorite">Favorite</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
}
