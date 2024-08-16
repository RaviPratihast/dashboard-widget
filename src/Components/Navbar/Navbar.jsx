import "./Navbar.css";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-home">
          Home
        </a>
      </div>
      <div className="navbar-right">
        <div className="navbar-search-container">
          <HiOutlineMagnifyingGlass className="navbar-search-icon" />
          <input
            type="text"
            placeholder="Search anything..."
            className="navbar-search"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
