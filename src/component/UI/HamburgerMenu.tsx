import { useState } from "react";
import style from "./HamburgerMenu.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChecklistIcon from "@mui/icons-material/Checklist";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { motion } from "framer-motion"

const HamburgerMenu = () => {
  const [showBar, setShowBar] = useState(false);
  let x = 0

  const showNavBar = () => {
    setShowBar(!showBar);
    if(showBar){
      x = 0
    }
  };

  return (
    <>
      <button
        className={`${style.bar} ${showBar ? style.close : ""}`}
        onClick={showNavBar}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {showBar && (
        <motion.ul className={style.main} animate={{x: -50}}>
          <div className={style.menu__item__main}>
            <AccountCircleIcon
              style={{
                height: 80,
                width: 80,
                padding: "2rem",
                gridArea: "logo",
              }}
            />
            <div className={style.select_lang}>
              <section style={{ cursor: "pointer" }}>UA</section>
              <section className={style.line}></section>
              <section style={{ cursor: "pointer" }}>ENG</section>
            </div>
            <div className={style.logMenu}>
              <section style={{ cursor: "pointer" }}>Login</section>
              <section className={style.line}></section>
              <section style={{ cursor: "pointer" }}>Registration</section>
            </div>
          </div>
          <li className={style.options}>
            <ChecklistIcon></ChecklistIcon>
            <span>Favorite</span>
          </li>
          <hr></hr>
          <li className={style.options} style={{ color: "black" }}>
            <HelpOutlineIcon></HelpOutlineIcon>
            <span>Support</span>
          </li>
          <li className={style.options} style={{ fontSize: 24 }}>
            <span></span>
            Delivery and return of goods
          </li>
          <li className={style.options} style={{ fontSize: 24 }}>
            <span></span>Guarantees of obligations
          </li>
          <li className={style.options} style={{ fontSize: 24 }}>
            <span></span>Offer
          </li>
          <hr></hr>
          <li className={style.options} style={{ color: "black" }}>
            <NotificationsActiveIcon></NotificationsActiveIcon>
            About Kids
          </li>
          <li className={style.options} style={{ fontSize: 24 }}>
            <span></span>About us
          </li>
          <li className={style.options} style={{ fontSize: 24 }}>
            <span></span>Contact us
          </li>
        </motion.ul>
      )}
    </>
  );
};

export default HamburgerMenu;
