import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="cardPara">
        <p
          style={{
            fontSize: "16px",
            lineHeight: "26px",
            fontWeight: "400",
            color: "rgb(55, 65, 81)",
          }}
        >
          {props.children}
        </p>
      </div>
      <div className="cardImage">
        <img src={props.src} />
        <div className="post">
          <span
            style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "500" }}
          >
            {props.name}
          </span>
          <span
            style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "400" }}
          >
            {props.position}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
