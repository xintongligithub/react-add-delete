import React, { Component } from 'react';
import './App.css';
import Content from './component/Content';

class App extends Component {
  state = {
    content: [],
  }
  deleteHandler = (c) => {
    this.setState((preState) => {
      return {content: preState.content.filter(a => a !== c)}
  })}
  addHandler = () => {
    const name = "Max";
    this.setState((preState) => {
      return {content: preState.content.concat(name+Math.random())}}
    );
  }
  render () {
    return (
      <div className="App">
        <button onClick={this.addHandler} >Add</button>
        {this.state.content.map( c => (
          <Content clicked={() => this.deleteHandler(c)} key={Math.random()}>{c}</Content>
        ))
        }
      </div>
    );
  }
}

export default App;
