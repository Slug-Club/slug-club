import envelopeFlyer from "../assets/EnvelopeFlyer.png";
import smallWindow from "../assets/small-window.png";
import slugWindow from "../assets/slug-window.png";

export default function Window() {
  return (
    <div>
      <div className="window-container">
        <div className="mission-statement-container">
          <img
            className="mission-statement-window"
            alt="Mission Statement Window"
            src={smallWindow}
          />
          <p className="mission-title">mission_statement.txt</p>
          <p className="mission-statement">
            Slug Club RVA was founded by five dykes on a mission to create the
            39th lesbian bar in the country. We believe the Richmond Queer
            community deserves a space dedicated to joy, dancing, and tasty
            libations. We will not tolerate any phobias, isms, or the like. We
            prioritize dykes, trans folks, and good times. What does your dream
            lesbian bar look like? Let us know at{" "}
            <a href="tel:+18043964934">(804) 396-4934</a> or email us at{" "}
            <a href="mailto:slugrva@gmail.com">slugrva@gmail.com</a>
          </p>
        </div>
        <div className="slug-window-container">
          <p className="slug-window-title">slug.jpeg</p>
          <img className="slug-window" alt="Spotted Slug" src={slugWindow} />
        </div>
        <div className="flyer-container">
          <img className="flyer-window" alt="Flyer Window" src={smallWindow} />
          <p className="flyer-title">flyer.pdf</p>
          <img
            className="flyer"
            alt="Flyer with a message that says 'More Events Coming Soon'"
            src={envelopeFlyer}
          />
        </div>
      </div>
      <div className="bottom-spacer" />
    </div>
  );
}
