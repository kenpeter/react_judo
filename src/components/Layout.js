// react
import React from 'react';

// Link fro react router
import { Link } from 'react-router';

// export default
// class
// layout
// extends
// react.component
export default class Layout extends React.Component {
  // render
  // div
  // app-container
  // <header>
  // <Link>
  // to="/"
  // header has image
  // div
  // app-content
  // {this.props.children}
  // footer
	render() {
		return (
			<div className="app-container">
				<header>	
					<Link to="/">
						<img className="logo" src="/img/logo-judo-heroes.png" />
					</Link>
				</header>

				<div className="app-content">{this.props.children}</div>

				<footer>
					<p>
						Footer!
					</p>
				</footer>
			</div>	
		);
	}
}
