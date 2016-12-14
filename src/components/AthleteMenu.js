// import react
import React from 'react';

// Link
import { Link } from 'react-router';

// data
import athletes from '../data/athletes.js';

// menu
export default class AthletesMenu extends React.Component {
  // render
	render() {
	  {/* nav class name ath menu*/}
		return (
		
			<nav className="athletes-menu">
				{
					athletes.map(atMenu => {
					  
					  {/* Link, key, to, /athlete/$... active class name active */}
					  {/* atMenu.name */}
						return <Link key={atMenu.id} to={`/athlete/${atMenu.id}`}  activeClassName="active">
							{atMenu.name}
						</Link>;
					})	
				}
			</nav>
		);
	}

}
