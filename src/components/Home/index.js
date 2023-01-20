import { Link } from "react-router-dom";
import "./index.scss";
import LogoTitle from "../../assets/images/logo-s.png";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="developoer" />
          lobodan
          <br />
          web developer
        </h1>
        <h2>Frontend developer / Javascript Expert / Musician</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
