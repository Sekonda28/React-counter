const ResetButton = (props) => {
  const handleClick = () => {
    props.setCounter(props.resetValue);
  };

  return (
    <button className="reset-button" onClick={handleClick}>
      Reset
    </button>
  );
};

export default ResetButton;
