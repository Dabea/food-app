import React from "react";

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
         }
    
    

    render(){
        return(
            <div>
                <input onClick={() => this.sendTotalCalories() } type="checkbox" />
                <label> { this.props.food } </label>
                <label> {this.props.calories} </label>
                <span> Quanity 
                    <button class="subBtn" onClick={() =>  this.state.quanity > 0 ? this.decreaseValue("quanity") :false } > - </button>
                     <input size="2" name="quanity" onChange={ this.handleChange}  value={this.state.quanity} />   
                     <button class="addBtn" onClick={() => this.increaseValue("quanity")} > + </button>  
                </span>
                <span> People  
                    <button class="subBtn" onClick={() => this.state.peopleShareing > 1 ?  this.decreaseValue("peopleShareing"): false } > - </button> 
                    <input size="2" name="peopleShareing"  onChange={ this.handleChange} value={this.state.peopleShareing} />  
                    <button class="addbtn" onClick={() => this.increaseValue("peopleShareing")}  > + </button>  
                </span>
                <label> Total: {this.state.totalCalories} </label>
            </div>
        );
    }
}

export default FoodItem;