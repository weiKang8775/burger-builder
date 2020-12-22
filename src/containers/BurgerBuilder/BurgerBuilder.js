import React, {Component} from 'react';

import Aux from '../../hoc/Hoc';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import styles from './BurgerBuilder.module.css';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
  }

  addIngredientHandler = type => {
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedIngredients[type] + 1;
    this.setState(prevState => {
      return {
        ingredients: updatedIngredients,
        totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
      };
    });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = type => {
    let amount = this.state.ingredients[type];
    if (amount) {
      const updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = amount - 1;
      this.setState(prevState => {
        return {
          ingredients: updatedIngredients,
          totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type],
        }
      })
      this.updatePurchaseState(updatedIngredients);
    }
  }

  updatePurchaseState = (ingredients) => {
    const totalIngredients = Object.values(ingredients).reduce((acc, cur) => {
      return acc + cur;
    });
    this.setState({purchaseable: totalIngredients > 0});
  }

  showOrderSummaryHandler = () => {
    this.setState({purchasing: true});
  }

  cancelOrderHandler = () => {
    this.setState({purchasing: false});
  }

  continueOrderHandler = () => {
    console.log("continue order");
  }

  render() {
    const disableControl = { ...this.state.ingredients };
    for (let key in disableControl) {
      disableControl[key] = disableControl[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          closeModal={this.cancelOrderHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice.toFixed(2)}
            closeModal={this.cancelOrderHandler}
            continueOrder={this.continueOrderHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <div className={styles.Price}>
          Current Price: ${this.state.totalPrice.toFixed(2)}
        </div>
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disableControl={disableControl}
          purchaseable={this.state.purchaseable}
          showOrderSummaryHandler={this.showOrderSummaryHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;