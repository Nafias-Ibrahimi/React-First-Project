// import React from 'react';
// import Welcome from './components/Welcome';
// import Counter from './components/Counter';
// import UserProfile from './components/UserProfile';
// import Form from './components/Form';
// import MiniProject from './components/MiniProject';
// import Users from './components/Users';
// import Timer from './components/Timer';
// import CountRef from './components/CountRef';
// import PreviouseValue from './components/PreviousValue';
// import FruitList from './components/FruitList';
// import Header from './components/Header';
// import UseStateProject from './components/UseStateProject';

// function App() {
//   return (
//     <div>
//       {/* فقط یکی را فعال کن */}
//       {/* <Welcome /> */}
//       {/* <Counter /> */}
//       {/* <UserProfile /> */}
//       {/* <Form /> */}
//       {/* <MiniProject /> */}
//       {/* <Users /> */}
//       {/* <Timer /> */}
//       {/* <CountRef /> */}
//       {/* <PreviouseValue /> */}
//       {/* <FruitList /> */}
//       {/* <Header /> */}

//       <UseStateProject />
//     </div>
//   );
// }

// export default App;


// // import "./App.css";
// // // function Greeting(props) {
// // //   return <h1>Welcome to {props.name}</h1>;
// // // }

// // // function User({ name, age }) {
// // //   return (
// // //     <p>
// // //       {name} is {age} years old
// // //     </p>
// // //   );
// // // }

// // // function Button({onClick}){
// // //   return <button onClick={onClick}>Click Me</button>
// // // }

// // function App() {
// //   const handdleclick=() => alert("button click");
// //   return (
// //     <div>
// //       {/* <Greeting name="Ali" />

// //       <User name="Ali" age={23} />
// //       <Button onClick={ handdleclick}/> */}

// //     </div>
// //   );
// // // const [count, setCount] = useState(0);
// // // const age = 20;
// // // const name = "Nafisa";
// // // const items = ["Apple", "Banana", "Orange"];

// // // return (
// // //   <div>
// // //     <h1>Counter App</h1>
// // //     <p>Clicked:{count} times</p>
// // //     <button onClick={() => setCount(count + 1)}>+Invrease</button>

// // //     <h1>Welcome :{name}</h1>
// // //     <p>Age:{age}</p>

// // //     {age >= 18 ? <p>Adult</p> : <p>Child</p>}

// // //     <h2>Fruits List</h2>
// // //     <ul>
// // //       {items.map((fruit) => (
// // //         <li key={fruit}>{fruit}</li>
// // //       ))}
// // //     </ul>
// // //     <ul>
// // //       {items.map((fruit) => (
// // //         <li>{fruit}</li>
// // //       ))}
// // //     </ul>
// // //   </div>
// // // );
// // // }
// // // import { useState } from "react";
// // // function App() {
// // //   const [count, setCount] = useState(0);

// // //   return (
// // //     <div>
// // //       <p>Clicked: {count}</p>
// // //       <button onClick={() => setCount(count + 1)}>Increase</button>
// // //       <button onClick={() => setCount(count - 1)}>Decrease</button>
// // //     </div>
// // //   );
// // export  default App


// // import { useState } from 'react';
// // import Loginform from './components/loginForm';
 

// // function Child({value , onChange}){
// //   return <input value={value} onChange={e=>onChange(e.target.value)}/>;
// // }
// // function App() {
// //   const [text , setText]=useState("Welcome")


// //   return (
// //     <div>
// //     
// //       <>
// //       <h1>{text}</h1>
// //       <Child value={text} onChange={setText}/>
      
// //       </>
// //     </div>
// //   )
// // }

// // export default App
// // import React from 'react'
// // import Header from './components/Hearder';
// // import Footer from './components/Footer'

// // function  Card({title , children}){
// //   return(
// //     <div className="card">
// //       <h1>{title}</h1>
// //       {children}

// //     </div>
// //   )
// // }


// // function PageLayout({header,content , footer}){
// //   return(
// //     <>
// //     <header>{header}</header>
// //     <main>{content}</main>
// //     <footer>{footer}</footer>
// //     </>
// //   )
// // }
// // function App() {
// //   return (
// //     <>
// //       {/* <Header/>
// //       <Card title={"profile"}/>
// //       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde debitis quis saepe at sequi ea neque, non quisquam dolores corrupti ipsa mollitia sapiente amet explicabo ut deserunt maxime eaque. Asperiores.</p>
      
// //    <Footer/> */}
// //    <PageLayout header={<h1>Dashbord</h1>}
// //     content={<Card title={"profile"}>
// //       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde debitis quis saepe at sequi ea neque, non quisquam dolores corrupti ipsa mollitia sapiente amet explicabo ut deserunt maxime eaque. Asperiores.</p>
// //     </Card>}

// //     footer={<small>&copy :2026</small>}></PageLayout>
// //     </>
 
// //   )
// // }

// // export default App;

import React from 'react';
import UseStateProject from './components/UseStateProject';
import Timer from './components/Timer'
import Memor from './components/Memor'

function App() {
  return (
    <div>
      <h1>My Counter Project</h1>
      <UseStateProject />
      <Timer/>
      <Memor num={10}/>
    </div>
  );
}

export default App;
