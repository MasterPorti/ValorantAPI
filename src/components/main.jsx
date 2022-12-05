import "../scss/main.scss";
import Fade from "../assets/fade.png";
import Fadebackground from "../assets/background.png";
import { Link } from "react-router-dom";
export default function Main() {
  return (
    <main>
      <div className="info">
        <span>LEARN ALL ABOUT VALORANT AGENTS WITH THIS API</span>
        <Link to="/agents">
          <button>TRY IT HERE!!</button>
        </Link>
      </div>
      <div className="mainImg">
        <img className="Fadebackground" src={Fadebackground} alt="" />
        <img className="FadefullPortrait" src={Fade}></img>
      </div>
    </main>
  );
}
