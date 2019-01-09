import React from "react";

class FoodItem extends React.Component{
   
        state = {
            quanity: 2,
            peopleShareing: 2,
            totalCalories: 0
            
        }
         componentDidMount(){
            this.setState((state) => ({ totalCalories: (this.props.calories * this.state.quanity)/ this.state.peopleShareing}));
         }
    
    

    render(){
        return(
            <div>
                <input onClick={this.props.testProp("123")} type="checkbox" />
                <label> { this.props.food } </label>
                <label> {this.props.calories} </label>
                <label> Quanity <input  value={this.state.quanity} />  </label>
                <label> People <input  value={this.state.peopleShareing} />  </label>
                <label> Total: {this.state.totalCalories} </label>
            </div>
        );
    }
}

export default FoodItem;