import "./Button.css";

function Button(props) {
  console.log(props);
  return (
    <>
      <button
        style={{
          backgroundColor: props.backgroundColor,
          color: props.color,
          padding: props.padding,
          borderRadius: props.borderRadius,
        }}
      >
        {props.children}
      </button>
    </>
  );
}

export default Button;
