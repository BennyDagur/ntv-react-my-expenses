import { useState, useRef } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
	const [displayValue, setDisplayValue] = useState([]);
  
  const remove = useRef([0])
  console.log(remove);

	const inputItem = useRef("");
  const inputValue = useRef(0);

  return (
    <div className="App">
      <header className="App-header">
          <h2 className="Main-text">Current Items: [{displayValue.toString()}]</h2>
          <h2 className="Main-text">{count}</h2>

          <label className="Label-values">Items</label>
          <input className="Input-values" onChange={(itemEvent) => {
            inputItem.current = itemEvent.target.value
          }}/>

          <label className="Label-values">Values</label>
          <input className="Input-values" onChange={(countEvent) => {
            inputValue.current = countEvent.target.value
          }}/>

          <button className="Submit-button" type="button" onClick={() => {
            if(inputValue.current != 0 && inputItem.current.length > 0){
            setDisplayValue(displayValue.concat(inputItem.current))
            setCount(parseInt(inputValue.current) + count)
            remove.current.push(inputValue.current)
          } else {}
          }}>Add Items</button>
          
          <button className="Submit-button" type="button" onClick={() => {
            if(count != 0){
            setDisplayValue(displayValue.slice(0,-1))
            setCount(count - remove.current.pop())
          } else {}
          }}>Remove Items</button>
      </header>
    </div>
  );
}

export default App;
