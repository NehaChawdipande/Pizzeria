import axios from 'axios';
import React,{Component} from 'react';
import './DiyPizza.css';
import { Link } from 'react-router-dom';


export default class DiyPizza extends Component{
  
    constructor(props)
    {
        super(props);
        this.selectedIngredients = [];
        this.ingredList = [];
        this.state = {
            ingreds:[],
            totalprice:0,
            myData:null
         } 
    }
    
    componentDidMount(){
       axios.get('http://localhost:4000/getIngredients') 
       .then((res) =>{
           this.setState({ingreds:res.data})
           const myData =  this.state.ingreds.map((ingred,index)=>{
           return(<tr className="ingredBody" key={index}>
           <td ><h5 className="titles">{ingred.tname}</h5> <h6 className="titles">₹. {ingred.price}</h6></td>
           <td><img  className="titles" id="ingredients" src={ingred.image} alt="ingreds"></img></td>
           <td><input className="form-check-input" id="checkboxes" type="checkbox" onClick={(e) => this.onSelect(ingred)} /></td>
       </tr>)
            });
        this.setState({myData});
          })

      .catch(error => this.setState({
          error
        }));  

    }

    onSelect = (ingred) => {
        if (this.selectedIngredients.includes(ingred)) {
            this.setState({ totalprice: this.state.totalprice - ingred.price });
            this.selectedIngredients = this.selectedIngredients.filter(el => el.id !== ingred.id);
        } else {
            this.selectedIngredients.push(ingred.tname);
            // this.ingredList.push(ingred.name);
            this.setState({ totalprice: this.state.totalprice + ingred.price });
        }
    }

    addToCart=()=>{
        window.alert("Added to cart!");
        localStorage.selectedIngredients = this.selectedIngredients;
        localStorage.totalprice = this.state.totalprice;
    }

    render(){
    
        
        return(
            <div className="ingredMenu">
                <br></br>
                <h3 className="titles">Make your own pizza!</h3>
                <p>Pizzeria now gives you options to build your own pizza by choosing fresh ingredients from the list below :-</p>
                <br></br>
                <table id="ingredCard">
                 <tbody>
                {this.state.myData}
                
                <tr className="ingredBody"> 
                <td>
                    <h3 className="titles"id="total">&nbsp;Your Total amount is: ₹. {this.state.totalprice}</h3>
                </td> 
                <td className="titles"> <button className="btn" id="checkout" onClick={(e)=>this.addToCart()}><Link to="/Cart" className="link-inverse">Build Your Pizza!</Link></button></td>
                 </tr>
                </tbody>
                
                </table>
                <br/>
         </div>
            
        )
    }
    
}
