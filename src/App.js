import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import cookiesData from "./Cookies";
import Cookie from "./Components/Cookie";

function App() {
  let cookiesArray = cookiesData.map((cookie) => <Cookie info={cookie} />);

  return (
    <div className="body">
      <Home />
      <h3> Please browse our selection here:</h3>
      <br />
      <div>{cookiesArray}</div>
    </div>
  );
}

export default App;
