import React,{Component} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            <div className="d-flex justify-content-start" id="navFlex">
            <h2 id="logotext">Pizzeria |</h2>
            <Link to="/Home" ><img src="../PizzeriaLogo.png" id="logo" alt="logo"></img></Link>
            <Link to="/OrderPizza" className="link">Order a Pizza!</Link>
            <Link to="/DiyPizza" className="link">Build your own!</Link>
            <button className="btn" id="cart"><img alt="cartImage" src="./cartwhite.png"></img><Link to="/Cart" className="link">Shopping Cart</Link></button>
            </div> 
        )
    }
}
