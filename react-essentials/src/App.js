import './App.css';

function Header(props){
  return(
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}
function Main(props){
  return(
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <ul style={{textAlign:"left"}}>
        {
          // props.dishes.map((dish,i) => <li key={i}>{dish}</li>)  When we use it as string
          props.dishes.map((dish) => <li key={dish.id}>{dish.title}</li>) //When we pass as object
        }
      </ul>
    </section>
  );
}
function Footer(props){
  return(
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Dosa",
  "Panipuri",
  "Idli",
  "Burger",
]

const dishObjects = dishes.map((dish,i)=> ({id: i, title:dish})); //Object of dishes

function App() {
  return (
    <div className="App">
      <Header name="Dimpal" />
      {/* <Main adjective="amazing" dishes={dishes} /> Using String property */}
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
