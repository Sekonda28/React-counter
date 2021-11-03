const PlusButton = (props) => {
  const handleClick = () => {
    props.setCounter(props.counter + 1);
  };

  return (
    <button
      className="plus-button"
      onClick={handleClick}
      style={{ visibility: props.counter > 9 ? "hidden" : "visible" }}
    >
      <i class="fas fa-plus fa-5x"></i>
    </button>
  );
};

export default PlusButton;
