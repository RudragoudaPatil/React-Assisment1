import React, { Component } from 'react';

 import './Search.css';

export default class SearchItem extends Component{
    constructor(props){
        super(props);
       
    }
    render(){
        return(
            <div className="search">
     <input type="text" placeholder="Search.."   onChange={(e)=>this.props.searchText(e.target.value)} name="search2"/>
  <button  onClick={()=>this.props.searchClick("hello")} ><i className="fa fa-search"></i></button>
            </div>
       
        )
    }
}

 