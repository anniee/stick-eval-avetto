import React, { Component } from 'react';

class NamesDisplay extends Component {

  render() {
    return (
      <div style={{float: 'left', width: '50%'}}>
        <h2>Selected Names:</h2>
          <p>{this.props.names}</p>
        <div>
        </div>
      </div>
    );
  }
}

export default NamesDisplay;
