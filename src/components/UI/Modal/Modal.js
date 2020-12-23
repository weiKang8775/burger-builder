import React, {Component} from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

class Modal extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.show !== nextProps.show;
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.closeModal}/>
        <div className={styles.Modal} style={{
          transform: this.props.show ? 'none' : 'scale(0)',
          opacity: this.props.show ? '1' : '0',
        }}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;