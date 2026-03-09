import React from 'react'
const fruits=['Apple' ,'Banana' ,'Mango'];

function FruitList() {


  return (
    <ul>
        {fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
        ))}


    </ul>
  )
}

export default FruitList