import React from 'react';
import NavLink from './NavLink';
import { navIconsData } from '../../data/navIconsData';
import styles from './NavBar.css';

const NavBar = () => {
  const navElements = navIconsData.map((element, i) => <NavLink key={i} {...element} />);

  return (
    <nav className={styles.NavBar}>
      {navElements}
    </nav>
  );
};

export default NavBar;
