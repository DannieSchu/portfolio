import React from 'react';
import NavLink from './NavLink';
import { navIconsArr } from './navIconsArr';
import styles from './NavBar.css';

const NavBar = () => {
  const navElements = navIconsArr.map((element, i) => <NavLink key={i} {...element} />);

  return (
    <nav className={styles.NavBar}>
      {navElements}
    </nav>
  );
};

export default NavBar;
