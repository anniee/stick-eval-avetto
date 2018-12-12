import React, { Component } from 'react';

class NamesList extends Component {

  getContent(e) {
    e.preventDefault();
    let selectedNames = document.querySelectorAll('input[name="name-check"]:checked');
    let selectedNamesArr = [];

    for (let i = 0; i < selectedNames.length;  i++) {
        selectedNamesArr.push(selectedNames[i].value);
    };

    let selectedNamesStr = selectedNamesArr.join(', ');
    console.log(selectedNamesStr);
    this.props.callback(selectedNamesStr);
  }

  render() {
    const data =[{"name":"Yasujiro"},{"name":"F.W."},{"name":"Sergei"},{"name":"Carl"},{"name":"Howard"},{"name":"Luis"},{"name":"Martin"},
    {"name":"Billy"},{"name":"Charles"},{"name":"Kar-Wai"},{"name":"Jean-Luc"},{"name":"Ingmar"},{"name":"Francis"},{"name":"Akira"},
    {"name":"Jean"},{"name":"John"},{"name":"Federico"},{"name":"Stanley"},{"name":"Alfred"},{"name":"Orson"},{"name":"Alexander"},
    {"name":"Frank"},{"name":"Ingrid"},{"name":"Horatio"},{"name":"Akiva"},{"name":"Luciano"},{"name":"George"},{"name":"Stacey"},
    {"name":"Horton"},{"name":"Carrie"},{"name":"Alfonse"},{"name":"Yasmin"}
    ];

    return (
      <div style={{float: 'left', margin: '0 auto', width: '50%'}}>
        <h2>Names</h2>
        <form>
          <ul style={{listStyle: 'none', padding: '0'}}>
            {data.map(function(d, idx){
              return (<li key={idx}><input name="name-check" type="checkbox" value={d.name} id={"dir-"+ (idx + 1)} /><label htmlFor={"dir-"+ (idx + 1)} style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>{d.name}</label></li>)
            })}
          </ul>
          <button type="submit" onClick={this.getContent.bind(this)}>Display Selected Names</button>
        </form>
      </div>
    );
  }
}

export default NamesList;
