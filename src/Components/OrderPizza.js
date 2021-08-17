import React,{Component} from 'react';
import'./OrderPizza.css';
import axios from 'axios';

export default class OrderPizza extends Component{
constructor(props)
{
    super(props);
    this.pizzaTotal = 0;
    this.selectedPizza=[];
    this.state = {
        pizzas: [] ,
        myPizza:null
    };
}
componentDidMount(){
    axios.get('http://localhost:4000/getPizza')
    .then((res) =>{
          this.setState({pizzas: res.data});
          const myPizza = this.state.pizzas.map((pizza,index)=>{
           return(
           <table className="menucards" key={index}>
           <tbody >
               <tr>
                   <td className="titles"><h5>{pizza.name}</h5></td>
                   <td><h6 className="titles">Description:</h6><ul>&nbsp;{pizza.description}</ul></td>
                   <td><img className="pizza" src={pizza.image} alt="pizza"></img></td>
               </tr>
   
               <tr>
                   <td className="titles">{( ()=> {if(pizza.type==="veg"){return(<img className="vegNonveg" alt="veg"src="./veg.png"></img>)} else{ return(<img className="vegNonveg" alt="nonveg"src="./nonveg.png"></img>)}})()}</td>
                   <td ><h6 className="titles">Ingredients:</h6><ul>{pizza.ingredients+` `}</ul></td>
                   <td className="titles" ><button id="addtocart" className="btn" onClick={(e) => this.showAlert(pizza.name, pizza.price)}>Add to cart</button></td>
                   
               </tr>
               <tr>
                   <td className="titles"><h5> ₹. {pizza.price}</h5></td>
                   <td><h6  className="titles">Toppings: </h6><ul>{pizza.topping+` `}</ul></td>
               </tr>          
           </tbody>
       </table>)    
          })
        this.setState({myPizza:myPizza})    
        })
        .catch(error => this.setState({
            error
          }));
}
showAlert = (name,price) =>{
    this.pizzaTotal= this.pizzaTotal+parseInt(price);
    this.selectedPizza.push(name);
    localStorage.pizzaTotal = this.pizzaTotal;
    localStorage.selectedPizza = this.selectedPizza;
    window.alert(name+" is added to cart!");
    
}
    render(){
    
        return(
            <div className="PizzaMenu">
                <br/>
                <h2 id="Title">Menu</h2>       
                <br/>

                {this.state.myPizza}

                <br/>
                <br/>

         </div>

            
        )
    }
}
