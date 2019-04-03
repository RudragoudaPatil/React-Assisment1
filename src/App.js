import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import SearchItem from './component/SearchItem';
import Products from './component/Products';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      searchQuery:'',
      counter:0
    }

    this.handlerSearchText= this.handlerSearchText.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handlerSearchText(data){
    let currentState = this.state;
     currentState.searchQuery =data;
     this.setState(currentState);
   }
 
   handleClick(){
    let currentState = this.state;
    currentState.counter++;
    this.setState(currentState);
}
handleDeleteClick(){
    let currentState = this.state;
    if(currentState.counter==0){
      this.setState(currentState);
    }else{
      currentState.counter--;
      this.setState(currentState);

    }
   
    
}
  render() {
    return (
      <div className="App">
      <div className="card col-md-4">
          <div className="card-body">
       <Header count={this.state.counter}/>
        <SearchItem searchText={this.handlerSearchText}/> 
       <Products search={this.state.searchQuery} add={this.handleClick} delete={this.handleDeleteClick}/>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
