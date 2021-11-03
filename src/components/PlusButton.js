const PlusButton = ({ counter, setCounter, }) => {
  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <button className="plus-button" onClick={handleClick}>
      <i
        class="fas fa-plus fa-5x"
      ></i>
    </button>
  );
};

export default PlusButton;
