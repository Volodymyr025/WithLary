import HamburgerMenu from "./HamburgerMenu";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";

import style from "./NavMenu.module.css";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";

const NavMenu = () => {
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  };

  return (
    <nav className={style.nav_menu}>
      <Cart showCart={showCart} setCart={setShowCart}/>
      <HamburgerMenu />
      <ul className={style.nav_list}>
        <li>
          <NavLink to={"/"}>
            <HomeIcon style={{ fontSize: 50 }} />
          </NavLink>
        </li>

        <li>
          <SearchIcon style={{ fontSize: 50 }} />
        </li>
        <li>
          <FavoriteIcon style={{ fontSize: 50 }} />
        </li>
        <li onClick={openCart}>
          <ShoppingCartIcon style={{ fontSize: 50 }} />
          <p>0</p>
        </li>

        <li>
          <NavLink to="login">
            Login
            <LoginIcon style={{ fontSize: 50 }} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
