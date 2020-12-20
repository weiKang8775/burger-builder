import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type='bread-top' />
      {
        Object.entries(props.ingredients).map(([key, value]) => {
          return [...Array(value)].map((_, i) => {
            return <BurgerIngredient type={key} key={key + i} />
          })
        })
      }
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;