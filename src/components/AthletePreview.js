import React from 'react';
import { Link } from 'react-router';

// export
// default
// class
// ath preview
// extends
// react component
export default class AthletePreview extends React.Component {
  // render return
  // <Link>
  // to this.props.id
  // this.props, because {...athleteData}
  // <div preview>
  // img
  // this.props.medals.length
	render() {
		return (
		  <div className="col-lg-4 col-md-6 col-sm-12">
			  <Link to={`/athlete/${this.props.id}`}>
				  <div className="athlete-preview">
					  <img src={`img/${this.props.image}`} />
					  <h2 className="name">{this.props.name}</h2>
					  <span className="medals-count">
						  <img src="/img/medal.png"/> {this.props.medals.length}
					  </span>
				  </div>
			  </Link>
			</div>  
		);
	}
}
