import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const buildControls = props => {
  const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
  ];

  return (
  <div className={styles.BuildControls}>
    {
      controls.map((control) => {
        return <BuildControl
          label={control.label}
          key={control.label}
          addIngredientHandler={() => props.addIngredientHandler(control.type)}
          removeIngredientHandler={() => props.removeIngredientHandler(control.type)}
          disableControl={props.disableControl[control.type]}
        />
      })
    }
    <button
      className={styles.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.showOrderSummaryHandler}
    >ORDER NOW</button>
  </div>
  );
}

export default buildControls;