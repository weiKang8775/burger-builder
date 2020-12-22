import React from 'react';

import styles from './BuildControl.module.css';

const buildControl = props => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button className={styles.Less} onClick={props.removeIngredientHandler} disabled={props.disableControl}>Less</button>
    <button className={styles.More} onClick={props.addIngredientHandler}>More</button>
  </div>
);

export default buildControl;