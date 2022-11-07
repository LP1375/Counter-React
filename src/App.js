import React from "react";
import './App.css';

function App() {
    const[count, setCount] = React.useState(0)

    const onClickPlus = () => {
        setCount(count + 1)
    }

    const  onClickMinus = () => {
        setCount(count - 1);
    }

    const onClickZero = () => {
        setCount(0)
    }

  return (
      <div className='wrapper'>
        <div className='container'>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <div className='btn'>
                <button onClick={onClickMinus} className='Minus'>Minus -</button>
                <button onClick={onClickZero} className='Zero'>Counter 0</button>
                <button onClick={onClickPlus} className='Plus'>Plus +</button>
            </div>
        </div>
      </div>
  );
}

export default App;
