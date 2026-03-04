import React, { useState } from 'react'

function Counter() {

    const [count , setCount]=useState(0);

  return (
    <>
 <h3>Count:{count}</h3>
 <button onClick={() =>setCount(count + 1)}>Increase</button>
 <button onClick={() =>setCount(count - 1)}>Derease</button>
    </>
  )
}

export default Counter