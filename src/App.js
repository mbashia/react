import "./App.css";
import Nav from "./components/Nav";
import Tweets from "./components/Tweets";
function App() {
const name = "John Doe";
const age ="15"

  return (
    <div className="App">
      <h1>My React App</h1>
      <div className="home">
      <Nav />
      <Tweets me={name} age={age} />
      </div>
      
    </div>
  );
}

export default App;
