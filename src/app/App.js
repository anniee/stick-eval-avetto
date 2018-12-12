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

    const names = [{"name":"Yasujiro"},{"name":"F.W."},{"name":"Sergei"},{"name":"Carl"},{"name":"Howard"},{"name":"Luis"},{"name":"Martin"},
    {"name":"Billy"},{"name":"Charles"},{"name":"Kar-Wai"},{"name":"Jean-Luc"},{"name":"Ingmar"},{"name":"Francis"},{"name":"Akira"},
    {"name":"Jean"},{"name":"John"},{"name":"Federico"},{"name":"Stanley"},{"name":"Alfred"},{"name":"Orson"},{"name":"Alexander"},
    {"name":"Frank"},{"name":"Ingrid"},{"name":"Horatio"},{"name":"Akiva"},{"name":"Luciano"},{"name":"George"},{"name":"Stacey"},
    {"name":"Horton"},{"name":"Carrie"},{"name":"Alfonse"},{"name":"Yasmin"}
    ];

    return (
      <div style={{fontFamily: 'Roboto', textAlign: 'center'}}>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet"></link>
        <NamesList names={names} callback={this.handleNamesSelection.bind(this)} />
        <NamesDisplay names={this.state.names} />
      </div>
    );
  }
}

export default App;
