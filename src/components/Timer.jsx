// import { useEffect, useState } from "react";

// import { forwardRef } from "react"

// function Timer() {
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(prev => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return <p>Time: {time}</p>;
// }

// export default Timer;


// import React, { useRef } from 'react'

// function Timer() {
//     const intervalRef=useRef(null);
//     const start = () =>{
//         intervalRef.current=setInterval(() =>{
//             console.log("Running...");

//         },1000);

//     };

//     const stop= () =>{

//         clearInterval(intervalRef.current);
//     }

//   return (
//     <div>
//         <button onClick={start}>Start</button>
//         <button onClick={stop}>Stop</button>


//     </div>
//   )
// }
// import { forwardRef, useRef } from "react"

// const Input = forwardRef((props, ref) => {
//   return <input ref={ref} {...props} />
// });

// function Timer() {
//   const inputRef = useRef(null);

//   return (
//     <div>
//       <Input ref={inputRef} placeholder="Write something..." />
//       <button onClick={() => inputRef.current.focus()}>
//         Focus Child Input
//       </button>
//     </div>
//   )
// }

// export default Timer
import React, { useEffect, useState  ,useRef} from 'react';

function FocusInput(){
  const inputRef=useRef(null);
  useEffect (() =>{
    inputRef.current.focus();
  },[]);
  return <input ref={inputRef} placeholder='Focuse me on mount'/>
}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <h2>Seconds: {seconds}</h2>
    <FocusInput/>
    
    </>

  )
}

export default Timer


