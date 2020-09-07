import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.css';


const HeaderBanner = props => {
  return (
    <React.Fragment>

            <div className="banner-w3pvt-info ">
	            <div className="overlay-w3ls">
	                <div className="banner-content text-center">
	                    <h3>Ipsum dolor sit amet feugiat et veroeros adipiscing</h3>
	                    <NavLink to="/about" className="btn text-light">Read More</NavLink>
	                </div>
	            </div>
	        </div>
	        
    </React.Fragment>
  );
};

export default HeaderBanner;
