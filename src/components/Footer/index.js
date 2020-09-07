import React from 'react';

import './styles.css';


const Footer = props => {
  return (
    <React.Fragment>
    	   <footer className="copy-right">
		        <div className="container">
		            <div className="row">
		                <p className="copy-right-grids text-md-left text-center my-sm-4 my-4 col-md-6">© 2020 Norm. All Rights Reserved | Design by
		                    <a href="http://w3layouts.com/"> W3layouts </a>
		                </p>
		                <div className="w3pvt-footer text-md-right text-center mt-4 col-md-5">
		                    <ul className="list-unstyled w3pvt-icons">
		                        <li>
		                            <a href="#">
		                                <span className="fa fa-facebook-f"></span>
		                            </a>
		                        </li>
		                        <li>
		                            <a href="#">
		                                <span className="fa fa-twitter"></span>
		                            </a>
		                        </li>
		                        <li>
		                            <a href="#">
		                                <span className="fa fa-dribbble"></span>
		                            </a>
		                        </li>
		                        <li>
		                            <a href="#">
		                                <span className="fa fa-vk"></span>
		                            </a>
		                        </li>
		                    </ul>
		                </div>
		                <div className="move-top text-right col-md-1"><a href="#home" className="move-top"> <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span></a></div>

		            </div>
		        </div>
		    </footer>
    </React.Fragment>
  );
};

export default Footer;
