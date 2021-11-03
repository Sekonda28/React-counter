import "./App.css";
import MinusButton from "./components/MinusButton";
import PlusButton from "./components/PlusButton";
import ResetButton from "./components/ResetButton";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [counter, setCounter] = useState(0);

  const resetValue = 0;
  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="row-1">
          <MinusButton counter={counter} setCounter={setCounter} />

          <div className="counter">
            <span>{counter}</span>
          </div>

          <PlusButton counter={counter} setCounter={setCounter} />
        </div>
        <ResetButton setCounter={setCounter} resetValue={resetValue} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
