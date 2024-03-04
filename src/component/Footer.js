import "./Footer.css";
import logo from "./../assest/logo/footerLogo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="para">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br />
          Incidunt consequuntur amet culpa cum itaque neque.
        </p>
      </div>
      <div className="about">
        <span>
          <a href="#">About</a>
        </span>
        <span>
          <a href="#">Craeers</a>
        </span>
        <span>
          <a href="#">History</a>
        </span>
        <span>
          <a href="#">Services</a>
        </span>
        <span>
          <a href="#">Projects</a>
        </span>
        <span>
          <a href="#">Blog</a>
        </span>
      </div>
      <div className="contect">
        <span>
          <a href="#">
            <i class="fa-brands fa-facebook"></i>
          </a>
        </span>
        <span>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </span>
        <span>
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </span>
        <span>
          <a href="#">
            <i class="fa-brands fa-github"></i>
          </a>
        </span>
        <span>
          <a href="#">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </span>
      </div>
    </div>
  );
}
export default Footer;
