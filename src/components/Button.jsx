import "../styles/components.css";

function Button({ handleClick, disabled, color, size, type, text }) {
  let colorType = color ? color : "#FFFFFF";
  let useSize = size ? size : "small";
  let useText = text ? text : "primary";

  function handleClickButton() {
    return handleClick();
  }

  if (type === "secondary") {
    return (
      <button onClick={() => handleClickButton()} className="secondary-button">
        <span>{useText}</span>
      </button>
    );
  } else {
    return (
      <button onClick={() => handleClickButton()} className="primary-button">
        {useText}
      </button>
    );
  }
}

export default Button;
