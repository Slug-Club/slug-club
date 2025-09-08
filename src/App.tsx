import "./App.css";
import logo from "./assets/slug-logo.png";
import Window from "./components/Window"


function App() {
  return (
    <div className="container">
      <div className="logo-container">
        <div className="circle" />
        <img className="logo" src={logo} />
      </div>
      <div className="spacer" />
      <Window/>
    </div>
  );
}

export default App;
