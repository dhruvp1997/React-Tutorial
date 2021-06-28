import './App.css';

function SecretComponent(){
  return <h1>Secret information for authorized users only</h1>
}

function RegularComponent(){
  return <h1>Everyone can see this component</h1>
}

function App(props) {
    /* if(props.authorized){
      return <SecretComponent />
    }
    else{
      return <RegularComponent />
    }   Basic conditional rendering*/
    return(
      <>
      {props.authorized ? <SecretComponent /> : <RegularComponent />} {/*JSX conditional rendering */}
      </>
    )
}

export default App;
