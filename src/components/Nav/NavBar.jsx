import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';
import { navIconsData } from '../../data/navIconsData';
import styles from './NavBar.css';

const NavBar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const opacity = isMounted ? 1 : 0;

  const navElements = navIconsData.map((element, i) => <NavLink key={i} {...element} />);

  return (
    <nav className={styles.NavBar} style={{ opacity }}>
      {navElements}
    </nav>
  );
};

export default NavBar;
