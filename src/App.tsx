import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const age = 20;
  const name = "Nafisa";
  const items=["Apple" ,"Banana" ,"Orange"];

  return (
    <div>
      <h1>Counter App</h1>
      <p>Clicked:{count} times</p>
      <button onClick={() => setCount(count + 1)}>+Invrease</button>

      <h1>Welcome :{name}</h1>
      <p>Age:{age}</p>
   
      {age >= 18 ? <p>Adult</p> : <p>Child</p>}

      <h2>Fruits List</h2>
      <ul>{items.map(fruit =><li key={fruit}></li>)}</ul>
      <ul>
        {items.map( fruit =><li>{fruit}</li>)}
      </ul>


    </div>
  );
}

export default App;
