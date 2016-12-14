// react
import React from 'react';

// need the link
import { Link } from 'react-router';

// 404 page
import NotFoundPage from "./NotFoundPage.js";

// menu on top
import AthletesMenu from "./AthleteMenu.js";

// athelete medal
import Medal from "./Medal.js";

// flag of courntry
import Flag from "./Flag.js";

// data for the athelete
import athletes from "../data/athletes.js";


// export
// default
// class
// athelete page
// extends
// react.component
export default class AthletePage extends React.Component {

  // render() {}
  render() {
    // path="athlete/:id"
    // this.props.params.id
    const id = this.props.params.id;
    
    // single athelete
    // atheletes data
    // .filter
    // (athelete) => athelete.id === id, return true or false
    // [0]
    const athlete = athletes.filter((athlete) => athlete.id === id)[0];
    
    // no athelete, 404 page
    if (!athlete) {
      return <NotFoundPage/>;
    }
    
    // const
    // header style
    // {}, json
    // background image
    // ``
    // url()
    // /img/${athelete.cover}
    const headerStyle = { backgroundImage: `url(/img/${athlete.cover})` };
    
    // return
    // div className
    // athlete full
    // athelete menu
    // header
    // header style
    // pass backgeround image
    // it is called backgroundImage
    // div, pic container
    // img src,
    // {}
    // ``
    // /img
    // $(athlete.image)
    // h2, className, name, athlete.name
    // section, className, description
    // Flag component
    // code props, athlete country
    // Flag has its internal data
    // showName, condi
    // athlete birth
    // link
    // count medal
    // medal map
    // callback func
    // (medal, i) => another component
    // Medal component
    // key
    // pass ...medal
    // medal looks like: { 'year': '1992', 'type': 'B', 'city': 'Barcelona', 'event': 'Olympic Games', 'category': '-57kg' }
    // nav back
    // <Link, to="/"
    
    return (
      <div className="athlete-full">
      
        {/* athlete menu, moving around */}
        <AthletesMenu/>
        
        {/* div class name */}
        <div className="athlete">
        
          {/* header style, header style */}
          <header style={headerStyle}/>
          
          {/* div class name, pic container */}
          <div className="picture-container">
            
            {/* ${athelete.image} */}
            <img src={`/img/${athlete.image}`}/>
            
            {/* person name */}
            <h2 className="name">{athlete.name}</h2>
          </div>
          
          {/* section class name desc */}
          <section className="description">
          
            {/* {athelete.country} */}
            {/* showName = true */}
            {/* athlete.birth */}
            {/* athlete.link */}
          
            Olympic medalist from <strong><Flag code={athlete.country} showName="true"/></strong>,
            born in {athlete.birth} (Find out more on <a href={athlete.link} target="_blank">Wikipedia</a>).
          </section>
          
          {/* medal */}
          {/* {athlete.medals.length} */}
          <section className="medals">
            <p>Winner of <strong>{athlete.medals.length}</strong> medals:</p>
            
            {/* athelete medals map */}
            {/* medal, index */}
            {/* <Medal key */}
            {/* key={i} */}
            {/* {...medal} */}
            <ul>
            {
              athlete.medals.map((medal, i) => <Medal key={i} {...medal}/>)
            }
            </ul>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">-- Back to the index</Link>
        </div>
      </div>
    );
  }
}
