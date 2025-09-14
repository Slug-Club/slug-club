import "./App.css";
import logo from "./assets/slug-logo.png";
import Window from "./components/Window";
import caret from "./assets/caret.png";

function App() {
  return (
    <div className="container">
      <div className="logo-container">
        <div className="circle" />
        <img className="logo" src={logo} />
        <img aria-hidden src={caret} alt="caret icon" className="caret-icon" />
      </div>
      <div className="spacer" />
      <Window />
    </div>
  );
}

export default App;
