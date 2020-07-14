import React from 'react';
import NavLink from './NavLink';
import { useOpacity } from '../../hooks/LoadingProvider';
import { navIconsData } from '../../data/navIconsData';
import styles from './NavBar.css';

const NavBar = () => {
  const opacity = useOpacity();

  const navElements = navIconsData.map((element, i) => <NavLink key={i} {...element} />);

  return (
    <nav className={styles.NavBar} style={{ opacity }}>
      {navElements}
    </nav>
  );
};

export default NavBar;
