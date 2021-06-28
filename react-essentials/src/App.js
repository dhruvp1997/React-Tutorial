import React, {useState,useEffect} from "react";
import './App.css';

function App() {
  const [emotion, setEmotion] = useState("happy"); // we can pass anything in useState
  const [secondary, setSecondary] = useState("tired");

  //function(()=>{ }); this is called callback function

useEffect(()=>{ 
    console.log(`It's ${emotion} around here!`);
}, [emotion]);

useEffect(()=>{ 
  console.log(`It's ${secondary} around here!`);
},[secondary]);

  return(
      <>
      <h1>Current emotion is {emotion} and {secondary}.</h1>
      <button onClick={()=> setEmotion("happy")}>Make Happy</button>
      <button onClick={()=> setSecondary("crabby")}>Make Crabby</button>
      <button onClick={()=> setSecondary("tired")}>Make Tired</button>
      <button onClick={()=> setEmotion("frustrated")}>Frustrate</button>
      <button onClick={()=> setEmotion("enthusiastic")}>Enthusiastic</button>
      </>
    )
}

export default App;
