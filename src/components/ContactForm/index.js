import React from 'react';

import './styles.css';


const ContactForm = props => {
  return (
    <React.Fragment>
    	 <section className="contact py-5" id="contact">
	        <div className="container py-lg-5">
	            <h3 className="title-w3ls two text-center">Contact Info</h3>
	            <div className="text-center">
	                <p className="main_p4 mt-4 mb-4 pt-2 text-center mx-auto">Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum est. Cras mi ipsum,</p>
	            </div>
	            <div className="row contact-top">
	                <div className="col-lg-6 contact_grid_left">
	                    <ul className="list-unstyled wthreem-items">
	                        <li>
	                            <div className="row">
	                                <div className="col-3">
	                                    <span className="fa fa-home"></span>
	                                </div>
	                                <div className="col-9">
	                                    <h6>Address</h6>
	                                    <p>The company name
	                                        <br />5768 Morris Park,
	                                        <br />New York City. </p>
	                                </div>
	                            </div>
	                        </li>

	                        <li className="mt-3">
	                            <div className="row">
	                                <div className="col-3">
	                                    <span className="fa fa-envelope"></span>
	                                </div>
	                                <div className="col-9">
	                                    <h6>Email</h6>
	                                    <a href="mailto:info@example.com">mail@example.com</a>
	                                </div>
	                            </div>
	                        </li>
	                        <li className="mt-5">
	                            <div className="row">
	                                <div className="col-3">
	                                    <span className="fa fa-phone"></span>
	                                </div>
	                                <div className="col-9">
	                                    <h6>Phone</h6>
	                                    <p>1234567890</p>
	                                </div>
	                            </div>
	                        </li>
	                    </ul>
	                </div>
	                <div className="col-lg-6 contact_grid_right">
	                    <form action="#" method="post" autoComplete="off">
	                        <div className="row contact_top">
	                            <div className="col-sm-6">
	                                <input type="text" className="form-control" name="Name" placeholder="Name" required="" />
	                            </div>
	                            <div className="col-sm-6">
	                                <input type="email" className="form-control" name="Email" placeholder="Email" required="" />
	                            </div>
	                        </div>
	                        <textarea className="form-control" name="Message" placeholder="" required=""></textarea>
	                        <button type="submit" className="btn submit mx-2">Submit</button>
	                        <button type="reset" className="btn reset mx-2">Reset</button>
	                        <div className="clearfix"> </div>
	                    </form>
	                </div>

	            </div>
	        </div>
	    </section>
    </React.Fragment>
  );
};

export default ContactForm;
