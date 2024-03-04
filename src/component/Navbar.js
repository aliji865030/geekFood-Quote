import "./Navbar.css";
import Button from "./Button";
import logo from "./../assest/logo/geekster-logo.png";

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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Quote</a>
            </li>
            <li>
              <a href="#">Resturants</a>
            </li>
            <li>
              <a href="#">Foods</a>
            </li>
            <li>
              <a href="#">Contact</a>
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
