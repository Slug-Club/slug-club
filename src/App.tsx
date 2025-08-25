import "./App.css";
import logo from "./assets/slug-logo.png";
import flyer from "./assets/flyer.png";
import largeWindow from "./assets/large-window.svg";
import smallWindow from "./assets/small-window.svg";

function App() {
  return (
    <div className="container">
      <div className="logo-container">
        <div className="circle" />
        <img className="logo" src={logo} />
      </div>
      <div className="spacer" />
      <div className="window-container">
      <div className="mission-statement-container">
        <img className="small-window" src={smallWindow} />
        <p className="mission-title">mission_statement.txt</p>
        <p className="mission-statement">
          Slug Club RVA was founded by five dykes on a mission to create the
          39th lesbian bar in the country. We believe the Richmond Queer
          community deserves a space dedicated to joy, dancing, and tasty
          libations. We will not tolerate any phobias, isms, or the like. We
          prioritize dykes, queers, and good times. What does your dream lesbian
          bar look like? Let us know at{" "}
          <a href="tel:+18043964934">(804) 396-4934</a> or email us at
          <a href="mailto:slugrva@gmail.com">slugrva@gmail.com</a>
        </p>
      </div>
      <div className="flyer-container">

        <img className="large-window" src={largeWindow} />
        <p className="flyer-title">flyer.pdf</p>
        <img className="flyer" src={flyer} />
      </div>
      </div>
      <div className="bottom-spacer" />
    </div>
  );
}

export default App;
