import React from 'react';

import './styles.css';


const HomepageBannerButton = props => {
  return (
    <React.Fragment>
    	<section className="banner-bottom py-5 ">
	        <div className="container py-md-5">
	            <h3 className="title-w3ls mb-5 text-center">Lorem ipsum dolor sit magna feugiat etiam sed dolor</h3>
	            <div className="d-flex mt-5 justify-content-center">
	                <a href="layout1.html" className="btn button-style  mr-3">Layouts</a>
	                <a href="contact.html" className="btn button-style">Contact Us</a>
	            </div>
	        </div>
	    </section>
    </React.Fragment>
  );
};

export default HomepageBannerButton;
