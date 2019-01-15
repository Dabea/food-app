import React from "react";
import './foodItemStyle.css';

class FoodItem extends React.Component{
   
        state = {
            quanity: 2,
            peopleShareing: 2,
            totalCalories: 0,
            active: false
        }
        handleChange = (event) => {
            this.setState({ [event.target.name]: event.target.value }, () => this.updateTotalCalories() );
          }

         componentDidMount(){
            this.updateTotalCalories();
         }

         updateTotalCalories(){
            this.setState((state) => ({ totalCalories: Math.round((this.props.calories * this.state.quanity)/ this.state.peopleShareing)}));
         }

         increaseValue = (value) => {
            this.setState({ [value]: this.state[value] + 1}, () =>  this.updateTotalCalories() )
         }

         decreaseValue = (value) => {
            this.setState({ [value]: this.state[value] - 1}, () => this.updateTotalCalories() )
         }

         sendTotalCalories = () => {
            this.setState({active: !this.state.active})
            this.props.testProp(this.state.totalCalories, this.state.active)
            console.log(this.state.active)
            this.props.activatefood(this.props.food1)

         }
    
    

    render(){
        return(
            <div class="food-item-row ">
                <input class="checkbox" checked={this.state.active} onClick={() => this.sendTotalCalories() } type="checkbox" />
                <label> { this.props.food.food } </label>
                <label> {this.props.calories} </label>
                <span class="food-item-spacer" > Quanity 
                    <button class="subBtn food-item-button" onClick={() =>  this.state.quanity > 0 ? this.decreaseValue("quanity") :false } > - </button>
                     <input size="2" name="quanity" onChange={ this.handleChange}  value={this.state.quanity} />   
                     <button class="addBtn food-item-button " onClick={() => this.increaseValue("quanity")} > + </button>  
                </span>
                <span class="food-item-spacer" > People  
                    <button class="subBtn food-item-button" onClick={() => this.state.peopleShareing > 1 ?  this.decreaseValue("peopleShareing"): false } > - </button> 
                    <input size="2" name="peopleShareing"  onChange={ this.handleChange} value={this.state.peopleShareing} />  
                    <button class="addBtn food-item-button" onClick={() => this.increaseValue("peopleShareing")}  > + </button>  
                </span>
                <label> Total: {this.state.totalCalories} </label>
               
            </div>
        );
    }
}

export default FoodItem;