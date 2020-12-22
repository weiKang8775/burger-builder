import React, {Component} from 'react';

import Aux from '../../hoc/Hoc';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import styles from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  toggleSideDrawerHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer
          show={this.state.showSideDrawer}
          toggleSideDrawerHandler={this.toggleSideDrawerHandler}
        />
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;