
import "./Navbar.scss";
import { IoSearchSharp } from "react-icons/io5";


const Navbar = ({onSearch}) => {
  const handleSearchChange =(e)=>{
    onSearch(e.target.value)
    
  }
  
  return (
    <nav className="navbar">
      <img src="/logo.png" alt="logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            Tours
          </a>
        </li>
      </ul>
      <div className="navbar-right">
       
        <div className="search">
          <IoSearchSharp />
          <input type="text" placeholder="Search Tour" onChange={handleSearchChange} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
