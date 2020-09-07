import React from 'react';

import './styles.css';


const Services = props => {
  return (
    <React.Fragment>
    	 <section className="services py-5" id="service">
	        <div className="container py-md-5">
	            <div className="row service_lavitop mt-2">
	                <div className="col-lg-4 ser-img mt-3">
	                    <img src="images/img3.jpg" className="img-fluid" alt="" />
	                </div>
	                <div className="col-lg-8 ser-lt pl-lg-5">
	                    <h4 className="title-w3ls mb-5">Lorem ipsum dolor sit magna feugiat etiam sed dolor</h4>
	                    <div className="row ser-sec-1 mt-1">
	                        <div className="col-lg-6 ser-w3ls-gd p-lg-0">
	                            <div className="d-flex services-box one">
	                                <div className="icon">
	                                    <span className="fa fa-lightbulb-o"></span>
	                                </div>
	                                
	                                <div className="service-content">
	                                    <h5>Inagittis Lacg</h5>
	                                    <p className="serp">
	                                        Quisque sagittis lacus eu lorem sodalesd enean adipiscing.
	                                    </p>
	                                </div>
	                            </div>
	                        </div>
	                        <div className="col-lg-6 ser-w3ls-gd p-lg-0">
	                            <div className="d-flex services-box two">
	                                <div className="icon">
	                                    <span className="fa fa-laptop"></span>
	                                </div>
	                                <div className="service-content">
	                                    <h5>Inagittis Lacg</h5>
	                                    <p className="serp">
	                                        Quisque sagittis lacus eu lorem sodalesd enean adipiscing.
	                                    </p>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="row ser-sec-2">
	                        <div className="col-lg-6 ser-w3ls-gd p-lg-0">
	                            <div className="d-flex services-box three">
	                                <div className="icon">
	                                    <span className="fa fa-diamond"></span>
	                                </div>
	                                <div className="service-content">
	                                    <h5>Inagittis Lacg</h5>
	                                    <p className="serp">
	                                        Quisque sagittis lacus eu lorem sodalesd enean adipiscing.
	                                    </p>
	                                </div>
	                            </div>
	                        </div>
	                        <div className="col-lg-6 ser-w3ls-gd p-lg-0">
	                            <div className="d-flex services-box four">
	                                <div className="icon">
	                                    <span className="fa fa-shield"></span>
	                                </div>
	                                <div className="service-content">
	                                    <h5>Inagittis Lacg</h5>
	                                    <p className="serp">
	                                        Quisque sagittis lacus eu lorem sodalesd enean adipiscing.
	                                    </p>
	                                </div>
	                            </div>
	                        </div>
	                    </div>

	                </div>

	            </div>
	        </div>
	    </section>
    </React.Fragment>
  );
};

export default Services;
