import React from 'react';
import NavLink from './NavLink';
import { navIconsData } from '../../data/navIconsData';
import { useGetOpacity } from '../../hooks/getOpacity';
import styles from './NavBar.css';

const NavBar = () => {
  const opacity = useGetOpacity();

  const navElements = navIconsData.map((element, i) => <NavLink key={i} {...element} />);

  return (
    <nav className={styles.NavBar} style={{ opacity }}>
      {navElements}
    </nav>
  );
};

export default NavBar;
