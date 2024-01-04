import { NavLink } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  return (
    <main className={style.main}>
      <div className={style.mainLeft}>
        <h1 className="logoLary">WithLary</h1>
        <p className="underLogo">Help Ma & Pa</p>
      </div>
      <ul className={style.mainRight}>
        <li>Child development from 0-36</li>
        <li>Everything for feeding</li>
        <li>Care, hygiene</li>
        <li>Toys and creativity</li>
        <li>
          <NavLink to={"sleep"}>Peaceful sleep</NavLink>
        </li>
        <li>Children's room and security</li>
      </ul>
    </main>
  );
};

export default Home;
