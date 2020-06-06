import React from 'react';
import NavLink from './NavLink';
import { elements } from './elements';
import styles from './NavBar.css';

const NavBar = () => {
  const navElements = elements.map((element, i) => <NavLink key={i} {...element} />);

  return (
    <nav className={styles.NavBar}>
      {navElements}
    </nav>
  );
};

export default NavBar;
