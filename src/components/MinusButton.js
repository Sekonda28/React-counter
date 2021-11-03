const MinusButton = (props) => {
  const handleClick = () => {
    props.setCounter(props.counter - 1);
  };

  return (
    <button
      className={`minus-button`}
      onClick={handleClick}
      style={{ visibility: props.counter < 1 ? "hidden" : "visible" }}
    >
      <i class="fas fa-minus fa-5x"></i>
    </button>
  );
};

export default MinusButton;
