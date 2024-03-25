import "./Navbar.css";
import Button from "./Button";
import logo from "./../assest/logo/geekster-logo.png";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar">
        <div className="navLogo">
          <img src={logo} />
          <h1>GeekFoods</h1>
        </div>
        <div className="navItem">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/quote">Quote</NavLink>
            </li>
            <li>
              <NavLink to="/resturant">Resturants</NavLink>
            </li>
            <li>
              <NavLink to="/foods">Foods</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Button
            backgroundColor={"#1d4ed8"}
            color={"#ffffff"}
            padding={"7px 15px"}
            borderRadius={"5px"}
          >
            Get started
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
