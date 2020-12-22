import React from 'react';

import Aux from '../../../hoc/Hoc';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A declicious burger with the following ingredients:</p>
      <ul>
        {
          Object.entries(props.ingredients).map(([key, value]) => {
            return <li key={key}><span>{key}</span>: {value}</li>
          })
        }
      </ul>
      <p><strong>Total Price: {props.price}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType='Danger' clicked={props.closeModal}>Cancel</Button>
      <Button btnType='Success' clicked={props.continueOrder}>Continue</Button>
    </Aux>
  );
};

export default orderSummary;