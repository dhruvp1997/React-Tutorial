import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"

// function AppTwo(){
//   return <h1>This is second app</h1>
// }

ReactDOM.render(
  /*<>
  <React.Fragment>
  <div>
  <App />
  <AppTwo />
  </div>
  </React.Fragment>
  </>, Wrapping two component into one 3 different ways using div, react.fragment,empty tag*/
  <App />,
  document.getElementById('root')
);


