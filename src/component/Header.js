import React, { Component } from 'react';
import ProductDetails from './ProductDetails';




export default class Header extends Component{
    constructor(props){
        super(props);
       
    }
    render(){
        return(
            <div>
<nav className="navbar navbar-expand-sm bg-primary navbar-dark">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link" href="#">Shopping Cart</a>
    </li>
    <ul className="nav navbar-nav navbar-right">
    <li className="nav-item  navbar-right">
      <a className="nav-link">  <label className="badge">{this.props.count}</label>Cart</a>
    </li>
    </ul>
  </ul>
</nav>

            </div>
       
        )
    }
}

 