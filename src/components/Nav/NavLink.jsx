import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import styles from './NavLink.css';
import typeStyle from '../../styles/type.css';

const NavLink = ({ to, icon, activeIcon }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    duration={400}
    activeClass={styles.active}
    className={styles.NavLink}>
    <img src={icon} alt={to} className={styles.outline} />
    <img src={activeIcon} alt={`${to} active`} className={styles.solid} />
    <p className={typeStyle.allCaps}>{to}</p>
  </Link>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  activeIcon: PropTypes.string.isRequired,
};

export default NavLink;
