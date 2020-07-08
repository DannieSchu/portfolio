import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import styles from './NavLink.css';
import typeStyle from '../../styles/type.css';

const NavLink = ({ to, text, icon, activeIcon }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    duration={800}
    activeClass={styles.active}
    className={styles.NavLink}>
    <img src={icon} alt={to} className={styles.outline} />
    <img src={activeIcon} alt={`${to} active`} className={styles.solid} />
    <p className={typeStyle.allCaps}>{text}</p>
  </Link>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  activeIcon: PropTypes.string.isRequired,
};

export default NavLink;
