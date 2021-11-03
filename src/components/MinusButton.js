
const MinusButton = ({ counter, setCounter }) => {

  const handleClick = () => {
    setCounter(counter - 1);
  };

  return (
    <button className={`minus-button`} onClick={handleClick}>
      <i
        class="fas fa-minus fa-5x"
      
      ></i>
    </button>
  );
};

export default MinusButton;

