import React from 'react';

import './styles.css';


const Testimonials = props => {
  return (
    <React.Fragment>
    	<section className="testimonials-content">
	        <div className="container-fluid">
	            <div className="row">

	                <div className="col-md-6 test-grid text-center p-0">

	                    <div className="testi-info">
	                        <span className="fa fa-quote-left"></span>
	                        <p>Lorem Ipsum has been the industry's standard since the 1500s.Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
	                        <h4 className="mt-md-4 mt-3"> Mariana Noe</h4>
	                        <p>Ipsum dolor</p>

	                    </div>
	                </div>
	                <div className="col-md-6 test-grid test-grid-two text-center p-0">

	                    <div className="testi-info">
	                        <span className="fa fa-quote-left"></span>
	                        <p>Lorem Ipsum has been the industry's standard since the 1500s.Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
	                        <h4 className="mt-md-4 mt-3"> Daniel Doe</h4>
	                        <p>Ipsum dolor</p>

	                    </div>
	                </div>
	            </div>
	        </div>
	    </section>
    </React.Fragment>
  );
};

export default Testimonials;
