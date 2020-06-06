import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import styles from './NavLink.css';
import typeStyle from '../../styles/type.css';

const NavLink = ({ to, icon }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    duration={400}
    className={styles.NavLink}>
    <img src={icon} alt={to} />
    <p className={typeStyle.allCaps}>{to}</p>
  </Link>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavLink;
