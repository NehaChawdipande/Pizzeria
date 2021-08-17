import React,{Component} from 'react';
import './Cart.css';


export default class Cart extends Component{
    
    placeOrder(){
        localStorage.clear();
        window.alert("Order Placed!");
        
    }
    render(){

        if(localStorage.selectedPizza == null && localStorage.selectedIngredients==null)
        {
            return(<div className="titles"><br/><h3>Your cart is empty!</h3></div>);
        }
        else if(localStorage.selectedPizza != null && localStorage.selectedIngredients == null){
            return(
                <div className="titles">
                    <h5>
                        Pizza:  <ul>{localStorage.selectedPizza}</ul>
                        </h5>
                        <h4> Grand Total: {localStorage.pizzaTotal}</h4>
                        <br/>
                        <button class="btn btn-dark" onClick={(e)=>{this.placeOrder()}}>Place Order!</button>

                </div>
            )
        }
        else if(localStorage.selectedPizza == null && localStorage.selectedIngredients != null)
        {
            return(
                <div className="titles">
                    <h5>Your pizza: 
                        <br/> &nbsp; Selected Ingredients: <ul>{localStorage.selectedIngredients}
                                </ul>
                        
                    </h5>
                    <h4>Grand Total: {localStorage.totalprice}</h4>
                    <br/>
                    <button className="btn btn-dark" onClick={(e)=>{this.placeOrder()}}>Place Order!</button>

                </div>
            )
        }
        else{
            var FinalTotal= parseInt(localStorage.totalprice)+parseInt(localStorage.pizzaTotal);

            return(
                <div >
                    <br></br>
                    <div className="titles">
                    <h5> Selected Pizza: <ul> {localStorage.selectedPizza}</ul> </h5>
                    <h5>Build Your Own Pizza: <br/> Selected Ingredients:- <ul>{localStorage.selectedIngredients}</ul></h5>
                    
                    <h4  >Grand total : Rs. {FinalTotal}</h4>
                    <br/>
                    <button className="btn btn-dark" onClick={(e)=>{this.placeOrder()}}>Place Order!</button>
                    </div>
                   
                </div>
            )
        }
            
    }
}
