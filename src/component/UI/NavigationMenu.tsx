import { useState } from "react";
import style from "./NavigationMenu.module.css";
import {
  Favorite,
  Home,
  Login,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import Cart from "./Cart";
import HamburgerMenu from "./HamburgerMenu";

const NavigationMenu = () => {
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  };
  return (
    <nav className={style.nav_menu}>
      <Cart showCart={showCart} setCart={setShowCart} />

      <HamburgerMenu />
      <ul className={style.nav_list}>
        <li>
          <a href={"/"}>
            <Home style={{ fontSize: 50 }} />
          </a>
        </li>
        <li>
          <Search style={{ fontSize: 50 }} />
        </li>
        <li>
          <Favorite style={{ fontSize: 50 }} />
        </li>
        <li onClick={openCart}>
          <ShoppingCart style={{ fontSize: 50 }} />
          <p>0</p>
        </li>

        <li>
          <a href="login">
            Login
            <Login style={{ fontSize: 50 }} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
