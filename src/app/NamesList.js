import React, { Component } from 'react';

class NamesList extends Component {

  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(e) {
    this.setState({search: e.target.value.substr(0,20)});
  }

  getNames(e) {
    e.preventDefault();
    let selectedNames = document.querySelectorAll('input[name="name-check"]:checked');
    let selectedNamesArr = [];

    for (let i = 0; i < selectedNames.length;  i++) {
        selectedNamesArr.push(selectedNames[i].value);
    };

    let selectedNamesStr = selectedNamesArr.join(', ');
    this.props.callback(selectedNamesStr);
  }

  render() {
    let filteredNames = this.props.names.filter(
        (name) => {
          return name.name.indexOf(this.state.search) !== -1;
        }
      );

    return (
      <div style={{float: 'left', margin: '0 auto', width: '50%'}}>
        <h2>Names</h2>
        <input type="text" placeholder="Search for Name" value={this.state.search} onChange={this.updateSearch.bind(this)} style={{padding: '8px'}} />
        <form>
          <ul style={{listStyle: 'none', padding: '0'}}>
            {filteredNames.map(function(d, i){
              return (<li key={i}><input name="name-check" type="checkbox" value={d.name} id={"dir-"+ (i + 1)} /><label htmlFor={"dir-"+ (i + 1)} style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>{d.name}</label></li>)
            })}
          </ul>
          <button type="submit" onClick={this.getNames.bind(this)} style={{fontSize: '14px', borderRadius: '4px', padding: '14px', cursor: 'pointer'}} >Display Selected Names</button>
        </form>
      </div>
    );
  }
}

export default NamesList;
