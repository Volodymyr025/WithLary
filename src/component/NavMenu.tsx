import React from 'react'
import HamburgerMenu from './UI/HamburgerMenu'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';

import style from './NavMenu.module.css'

const NavMenu = () => {
  return (
      <nav className={style.nav_menu}>
      <HamburgerMenu />
      <ul className={style.nav_list}>
        <li><HomeIcon style={{fontSize: 50}}/></li>
        <li><SearchIcon style={{fontSize: 50}}/></li>
        <li><FavoriteIcon style={{fontSize: 50}}/></li>
        <li><ShoppingCartIcon style={{fontSize: 50}}/></li>
        <li>Login<LoginIcon style={{fontSize: 50}}/></li>

      </ul>
    </nav>
  )
}

export default NavMenu
