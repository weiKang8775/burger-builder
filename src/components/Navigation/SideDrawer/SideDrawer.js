import React from 'react';

import Logo from '../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Hoc';
import styles from './SideDrawer.module.css';

const sideDrawer = props => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.toggleSideDrawerHandler} />
      <div className={styles.ToggleBtn} onClick={props.toggleSideDrawerHandler}>
        <div className={styles.ToggleIcon}>
          &nbsp;
        </div>
      </div>
      <div className={[styles.SideDrawer, props.show ? styles.Open : styles.Close].join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;