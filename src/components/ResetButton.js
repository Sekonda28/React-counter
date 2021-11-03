const ResetButton = ({ setCounter, resetValue }) => {
    const handleClick = () => {
      setCounter(resetValue);
    };
  
    return <button className = "reset-button" onClick={handleClick}>Reset</button>;
  };
  
  export default ResetButton;