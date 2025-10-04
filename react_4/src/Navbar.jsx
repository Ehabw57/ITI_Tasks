import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import FavoriteContext from "./Context/FavoriteContext";

export default function NavBar() {
  const { setActive, setSearch} = useContext(FavoriteContext);
  const navigator = useNavigate();
  function goSearch(e, value) {
    if (e.key === "Enter") {
      setActive(1);
      setSearch(value);
      navigator("/");
    }
  }
  return (
    <nav>
      <Link to="/" onClick={() => setSearch("")}>
        Logo
      </Link>
      <div className="search-box ">
        <input
          onKeyDown={(e) => goSearch(e, e.target.value)}
          placeholder="Search.."
        />
        <Link to="/favorite">Favorite</Link>
      </div>
    </nav>
  );
}
