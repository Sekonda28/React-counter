const ResetButton = ({ setCounter, resetValue }) => {
    const handleClick = () => {
      setCounter(resetValue);
    };
  
    return <button onClick={handleClick}>Reset</button>;
  };
  
  export default ResetButton;