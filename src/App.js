import React, { Component } from 'react';
import FoodItem from './componets/FoodItem'
import './App.css';


class App extends Component {
  state = {
    totalCalories: 0
  }

  handleChange(test)  {
    console.log(test);
  }

  render() {
    const foodList =  [{"food": "Chicken brest", "calories": 250  }, {"food": "Bacon Thick Cut", "calories": 56  } ,{"food": "Lettus Heart", "calories": 5  }];
    return (
      <div className="App">
        {foodList.map(food => <FoodItem food={food.food} calories={food.calories} testProp={() => this.handleChange}/> )}
        <div> TEST VALUE = {this.state.totalCalories} </div>
      </div>
    );
  }
}

export default App;
