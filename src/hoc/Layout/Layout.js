import React, {Component} from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
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