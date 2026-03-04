import React, { useState } from 'react'

function UserProfile() {

    const [name , setName]=useState("");
    const [age , setAge]=useState(0);
  return (
    <div>
        <input type="text" onChange={e => setName(e.target.value)} placeholder="Name"/>
        <input type="text" onChange={e => setAge(e.target.value)} placeholder='Age'/>
        <p>{name} is {age} years old</p>
    </div>
  )
}

export default UserProfile