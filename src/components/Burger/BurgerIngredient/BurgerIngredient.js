import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type.toUpperCase()) {
      case ('BREAD-BOTTOM'):
        ingredient = <div className={styles.BreadBottom}></div>;
        break;
      case ('BREAD-TOP'):
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1}></div>
            <div className={styles.Seeds2}></div>
          </div>
        );
        break;
        case ('MEAT'):
          ingredient = <div className={styles.Meat}></div>;
          break;
        case ('CHEESE'):
          ingredient = <div className={styles.Cheese}></div>;
          break;
        case ('SALAD'):
          ingredient = <div className={styles.Salad}></div>;
          break;
        case ('BACON'):
          ingredient = <div className={styles.Bacon}></div>;
          break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;