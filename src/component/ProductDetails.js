import React, { Component } from 'react';

import './ProductImage.css';




export default class ProductDetails extends Component{
    constructor(props){
        super(props);
       
    }
    render(){
        return(
            <div>
          <div className="card-body">
            <img className="card-img-top" src={this.props.details.mediumImage} alt="Card image cap"/>
              <h5 className="card-title">Product Name: {this.props.details.name}</h5>
              <p className="card-text">Description : {this.props.details.shortDescription}</p>
              <h5 className="card-title">Price : {this.props.details.salePrice} Rs</h5>
              <a className="btn btn-primary" onClick={()=>this.props.add()}>Add Cart</a>
              <a className="btn btn-primary" onClick={()=>this.props.delete()}>Delete Cart</a>
            </div>
            </div>
            
       
        )
    }
}

 