// medal gold, year, city, event, etc....
import React from 'react';

// gold, etc
const typeMap = {
	'G': 'Gold',
	'S': 'Silver',
	'B': 'Bronze',
}

// data { 'year': '1992', 'type': 'B', 'city': 'Barcelona', 'event': 'Olympic Games', 'category': '-57kg' },
// export
// default
// class
// extends
// React, cap
// Component, cap
// why ``, because multi
// typeMap
// symbol, symbol, -, this.props.type
// title
// {}
// typeMap above
// this.props.type
// pass year, city, event, cat
// className matches
export default class Medal extends React.Component {
	// render
	render() {
		return (
		  <li className="medal">
			  <span className={`symbol symbol-${this.props.type}`} title={typeMap[this.props.type]}>{this.props.type}</span>
			  <span className="year">{this.props.year}</span>
        <span className="city"> {this.props.city}</span>
        <span className="event"> ({this.props.event})</span>
        <span className="category"> {this.props.category}</span>
      </li>	
		);
	}
}
