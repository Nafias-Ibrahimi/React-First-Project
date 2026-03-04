// import React, { useState } from 'react'

// function Toggle(){
//     const [isOn , setIsOn]=useState(false);
//     return (
//         <>
//         <button onClick={() => setIsOn(!isOn)}> {isOn ? "ON" :"OFF"}</button>
//         </>
//     )
// }
import { useEffect } from "react"
function MiniProject() {
    useEffect(() =>{
    console.log("Component Mount");
},[])
  return (
    <>
    <h1>Welcome to React</h1>

{/* <Toggle/> */}


    </>
  )
}

export default MiniProject