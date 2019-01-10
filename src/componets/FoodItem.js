import React from "react";

class FoodItem extends React.Component{
   
        state = {
            quanity: 2,
            peopleShareing: 2,
            totalCalories: 0,
            active: false
        }
        handleChange(event) {
            this.setState({ [event.target.name]: event.target.value });
          }

         componentDidMount(){
            this.updateTotalCalories();
         }

         updateTotalCalories(){
            this.setState((state) => ({ totalCalories: (this.props.calories * this.state.quanity)/ this.state.peopleShareing}));
         }

         sendTotalCalories = () => {
            this.setState({active: !this.state.active})
            this.props.testProp(this.state.totalCalories, this.state.active)
         }
    
    

    render(){
        return(
            <div>
                <input onClick={() => this.sendTotalCalories() } type="checkbox" />
                <label> { this.props.food } </label>
                <label> {this.props.calories} </label>
                <label> Quanity <input name="quanity"  value={this.state.quanity} />  </label>
                <label> People <input name="peopleShareing"  value={this.state.peopleShareing} />  </label>
                <label> Total: {this.state.totalCalories} </label>
            </div>
        );
    }
}

export default FoodItem;