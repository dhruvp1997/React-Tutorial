import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"

const checklist=["boots","tent","headlamp"];
const [first]=["boots","tent","headlamp"];
const [important,second]=["boots","tent","headlamp"];
const [,,light]=["boots","tent","headlamp"];
console.log(checklist);
console.log(checklist[1]);
console.log(first);
console.log(important,second);
console.log(light);


ReactDOM.render(
  <App authorized={false} />,
  document.getElementById('root')
);


