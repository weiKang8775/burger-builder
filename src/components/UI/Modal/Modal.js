import React from 'react';

import Aux from '../../../hoc/Hoc';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

const modal = props => (
  <Aux>
    <Backdrop show={props.show} clicked={props.closeModal}/>
    <div className={styles.Modal} style={{
      transform: props.show ? 'none' : 'scale(0)',
      opacity: props.show ? '1' : '0',
    }}>
      {props.children}
    </div>
  </Aux>

);

export default modal;