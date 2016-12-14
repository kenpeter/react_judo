// this file used by the default route
// it has the <Athelete preview>
// react
import React from 'react';

// preview
import AthletePreview from './AthletePreview';

// data
import athletes from '../data/athletes';

// export
// default
// class
// index page
// extends
// <div home>
// <div athelete selector >
// ath.map
// ath_data => <components>
// <athpreview key={} {...} />
export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          <div className="row">
            {
              athletes.map(athleteData => 
                <AthletePreview key={athleteData.id} {...athleteData} /> 
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
