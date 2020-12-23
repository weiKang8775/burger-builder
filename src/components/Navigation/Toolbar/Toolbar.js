import React from 'react';

import Logo from '../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import styles from './Toolbar.module.css';

const toolbar = props => (
  <header className={[styles.Toolbar, styles.DesktopOnly].join(' ')}>
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav>
      <NavItems />
    </nav>
  </header>
);

export default toolbar;