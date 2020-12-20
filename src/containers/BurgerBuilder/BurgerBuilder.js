import React, {Component} from 'react';

import Aux from '../../hoc/Hoc';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
  }

  addIngredientHandler = type => {
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedIngredients[type] + 1;
    this.setState({ ingredients: updatedIngredients });
    this.setState({ totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type] });
  }

  removeIngredientHandler = type => {
    let amount = this.state.ingredients[type];
    if (amount) {
      const updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = amount - 1;
      console.log(this.state.ingredients);
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type],
      })
    }
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls addIngredientHandler={this.addIngredientHandler} removeIngredientHandler={this.removeIngredientHandler}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;