import "../styles/components.css";

function Button({ handleClick, disabled, color, size, text }) {
  function handleClickButton() {
    return handleClick();
  }
  
  return (
    <button onClick={() => handleClickButton()} className="button">
      {text}
    </button>
  );
}

export default Button;
