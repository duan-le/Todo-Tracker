const Button = ({ color, text }) => {
  return (
    <div>
      <button style={{ backgroundColor: color }} className="btn">
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "black",
  text: "Button",
};

export default Button;
