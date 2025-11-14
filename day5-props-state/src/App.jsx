import { useState } from "react";
import Display from "./componenets/Display";

const App=function (){
  const[count,setCount] =useState(0);
 const[domain,setDomain] =useState("Node");
  const handleCount=()=>{
    setCount(count+1);

  }
  const handleDomain=()=>{
    setDomain("React");

  }
  return(
    <>
      <Display count={count}/>
      <button onClick={handleCount}>Increment</button>
      <h2>{domain}Js Developer</h2>
       <button onClick={handleDomain}>Increment</button>
    </>
  )
}
export default App;