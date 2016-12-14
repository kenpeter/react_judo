// this used in athelete page.js
import React from 'react'

// const data
// country
// name of country
// picture of country
const data = {
	'cu': {
		'name': 'Cuba',
		'icon': 'flag-cu.png',
	},

	'fr': {
		'name': 'France',
		'icon': 'flag-fr.png',
	},

	'jp': {
    'name': 'Japan',
    'icon': 'flag-jp.png',
  },

  'nl': {
    'name': 'Netherlands',
    'icon': 'flag-nl.png',
  },

  'uz': {
    'name': 'Uzbekistan',
    'icon': 'flag-uz.png',
  },	
}

// export default class
// flag from react
export default class Flag extends React.Component {
	// render
	render() {
    // this.props.code
    // name of country
		const name = data[this.props.code].name;
		
		// icon is picture of country
		const icon = data[this.props.code].icon;
		
    // <span>, class: flag
    // img, class: icon
    // title == name of country
    // src = img of country
    // if show name, then show name
		return (
			<span className="flag">
				<img className="icon" title={name} src={`/img/${icon}`} />
				{this.props.showName && <span className="name"> {name}</span>}
			</span>	
		);
	}

}
