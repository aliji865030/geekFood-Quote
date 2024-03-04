import "./HeroSection.css";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="mainHero">
      <div className="heroUpper">
        <div className="heroContentUpper">
          <div className="heading">
            <span className="blacked">Let us find your</span>
            <span style={{ color: "#be123c" }}>Forever Food.</span>
          </div>
          <div className="para">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <br />
              Nesciunt illo tenetur fuga ducimus numquam ea!
            </p>
          </div>
          <div className="heroButton">
            <Button
              backgroundColor={"#e11d48"}
              padding={"12px 45px"}
              borderRadius={"5px"}
              color={"#ffffff"}
            >
              Search Now
            </Button>
            <Button
              padding={"12px 45px"}
              borderRadius={"5px"}
              color={"#e11d48"}
            >
              Know More
            </Button>
          </div>
        </div>
      </div>

      <div className="heroLower">
        <div className="imageContent">
          <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="textContent">
          <div>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              debitis.
            </h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              molestiae! Quidem est esse numquam odio deleniti, beatae, magni
              dolores provident quaerat totam eos, aperiam architecto eius quis
              quibusdam fugiat dicta.
            </p>
          </div>
          <div>
            <Button
              backgroundColor={"#4f46e5"}
              padding={"12px 45px"}
              borderRadius={"5px"}
              color={"white"}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
