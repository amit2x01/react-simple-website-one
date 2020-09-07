import React from 'react';

import './styles.css';


const ShortAbout = props => {
  return (
    <React.Fragment>
    	<section className="about py-5" id="about">
	        <div className="container py-md-5">
	            <div className="row about-w3pvt-top mt-2">
	                <div className="col-lg-6 about-info">
	                    <h4 className="title-w3ls mb-5">Lorem ipsum dolor sit magna feugiat etiam sed dolor</h4>
	                    <p>Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium nulla malesuada sedint. Suspendisse venenatis,Lorem ipsum dolor sit magna dolor.</p>
	                </div>
	                <div className="col-lg-6 about-img">
	                    <img src="images/img2.jpg" className="img-fluid" alt="" />
	                </div>

	            </div>
	        </div>
	    </section>
    </React.Fragment>
  );
};

export default ShortAbout;
