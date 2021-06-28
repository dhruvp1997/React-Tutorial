import React, {useReducer} from "react";
import './App.css';

function App() {
  //const [checked, setChecked] = useState(false); //useState will take one argument
  const [checked,toggle] = useReducer((checked)=> !checked,false); //useReduser will take two argument
  //it takes old state and update with new state

  return(
      <>
        <input type="checkbox" value={checked} onChange={toggle}/>
        <p>{checked ? "checked": "not checked"}</p>
      </>
    )
}

export default App;
