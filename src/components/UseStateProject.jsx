import React, { useState } from 'react'


function UseStateProject() {
  const [count , setCount]=useState(() =>{
    console.log("Initialiaing state ");
    return 0;
  })
  const increment= ()=> setCount(item =>item + 1);
  const decrement= ()=> setCount(item =>item - 1);
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
  

    </div>
  )
}

export default UseStateProject