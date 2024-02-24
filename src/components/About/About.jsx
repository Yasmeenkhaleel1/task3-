import { useState } from "react";


function About() {

  useState();
  let[count,setCount]=useState(0);
  const changeCounter=()=>{
   setCount(count+1);
  }

  return (
  <>

<button onClick={changeCounter}> count: {count}</button>

</>

  );
}

export default About
