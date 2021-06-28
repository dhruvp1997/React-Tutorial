import React, {useState} from "react";
import './App.css';

function App() {
  const [checked, setChecked] = useState(false);
  return(
      <>
        <input type="checkbox" value={checked} onChange={() => setChecked((checked)=> !checked)}/>
        <p>{checked ? "checked": "not checked"}</p>
      </>
    )
}

export default App;
