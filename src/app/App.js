import React, { Component } from 'react';
import NamesList from './NamesList';
import NamesDisplay from './NamesDisplay';

class App extends Component {

  constructor(){
    super();
    this.state= {
      names : ""
    }
  }

  handleNamesSelection(params) {
    this.setState({
      names: params
    })
  }
  render() {
    return (
      <div style={{fontFamily: 'Roboto', textAlign: 'center'}}>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet"></link>
        <NamesList callback={this.handleNamesSelection.bind(this)} />
        <NamesDisplay names={this.state.names} />
      </div>
    );
  }
}

export default App;
