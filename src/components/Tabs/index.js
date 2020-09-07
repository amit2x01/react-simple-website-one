import React from 'react';

import './styles.css';


const Tabs = props => {
  return (
    <React.Fragment>
    	<section className="middile-sec py-5" id="tabs">
	        <div className="container py-md-5">
	            <div className="middile-inner-con">
	                <div className="tab-main mx-auto">

	                    <input id="tab1" type="radio" name="tabs" defaultChecked />
	                    <label htmlFor="tab1">Tab 1</label>

	                    <input id="tab2" type="radio" name="tabs" />
	                    <label htmlFor="tab2">Tab 2</label>

	                    <input id="tab3" type="radio" name="tabs" />
	                    <label htmlFor="tab3">Tab 3</label>

	                    <section id="content1">
	                        <div className="row">
	                            <div className="col-lg-6">
	                                <img src="images/img5.jpg" className="img-fluid" alt="mobile-image" />
	                            </div>
	                            <div className="col-lg-6  p-3">
	                                <p>Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum est. Cras mi ipsum,Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium nulla malesuada sedint.</p>
	                            </div>
	                        </div>
	                    </section>

	                    <section id="content2">
	                        <div className="row">
	                            <div className="col-lg-6  p-3">
	                                <p>Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum est. Cras mi ipsum,Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium nulla malesuada sedint.</p>
	                            </div>
	                            <div className="col-lg-6">
	                                <img src="images/img2.jpg" className="img-fluid" alt="mobile-image" />
	                            </div>

	                        </div>
	                    </section>

	                    <section id="content3">
	                        <div className="row">
	                            <div className="col-lg-6">
	                                <img src="images/img5.jpg" className="img-fluid" alt="mobile-image" />
	                            </div>
	                            <div className="col-lg-6 p-3">
	                                <p>Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum est. Cras mi ipsum,Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium nulla malesuada sedint.</p>
	                            </div>
	                        </div>
	                    </section>
	                </div>
	            </div>
	        </div>
	    </section>
    </React.Fragment>
  );
};

export default Tabs;
