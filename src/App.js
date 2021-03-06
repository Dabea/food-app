import React, { Component } from 'react';
import FoodItem from './componets/FoodItem'
import './App.css';


class App extends Component {
  state = {
    totalCalories: 0,
    activeFoodList: []
  }

  

  handleChange =  (test, active) =>   {
    if(active){
      this.setState({ totalCalories: this.state.totalCalories - test });
    }else{
      this.setState({ totalCalories: this.state.totalCalories + test });
    }
  }

  changeActiveFoodItem = (item, change ) => {
    const result = this.state.activeFoodList.filter( (obj) => obj.food === item.food )
    console.log(result);

    if(result.length === 0){
      this.setState({activeFoodList: [...this.state.activeFoodList, item] })
    }else{
      const result = this.state.activeFoodList.filter( (obj) => obj.food !== item.food )
      this.setState({activeFoodList: result})
    }
  
  }

   getToalCalories = () => {
    let total = 0;
    this.state.activeFoodList.forEach(element => {
      let addNewCalories = (element.calories * element.quanity / element.peopleShareing)
      total =  total + addNewCalories
    });
   

    this.setState({totalCalories: total}) 
  }

  

  render() {
    const foodList =  [{"food": "Chicken brest", "calories": 250  }, {"food": "Bacon Thick Cut", "calories": 56  } ,{"food": "Lettus Heart", "calories": 5  }];
    const activeFoodList = [{"food": "Chicken brest", "calories": 250  }, {"food": "Bacon Thick Cut", "calories": 56  } ];

   

    return (
      <div className="App">
        {foodList.map(food => <FoodItem food={food.food} food1={food}  calories={food.calories} testProp={this.handleChange} activatefood={this.changeActiveFoodItem} /> )}
        <div> TEST VALUE = {this.state.totalCalories} </div>
        <button onClick={() => this.getToalCalories()}> BLarg  </button>

          {this.state.activeFoodList.length}
      </div>
    );
  }
}

export default App;
