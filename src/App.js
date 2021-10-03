import "./App.css";
import Home from "./components/Home";
import CookiesList from "./components/CookiesList";
// import cookiesData from "./Cookies";

function App() {
  return (
    <div className="body">
      <Home />
      <CookiesList />
    </div>
  );
}

export default App;
// books={cookiesData}
