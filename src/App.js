
import React, { useState } from "react";

function App() {
  const [Counter, setCounter] = useState(1)
  const Onclick = () => {
    setCounter(prevCounter => prevCounter + 1)
    alert(`You clicked this button ${Counter} times`);
    }
  return (
      <div>
        <header>
          <img src="https://gazettereview.com/wp-content/uploads/2016/07/currency.jpg" alt="Currencies"></img>
          <button type="button" onClick={Onclick}>&#128512;</button>
        </header>
      </div>
    );
  }


export default App;

