import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import "./Navbar.css";

const Navbar = ({ setSearchTerm }) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
