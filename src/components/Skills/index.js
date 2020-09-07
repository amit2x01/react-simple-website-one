import React from 'react';

import './styles.css';


const SkillsConfig = (props) => {
	return (
		 <div className="progress-one">
            <h4 className="progress-wthree">{props.tabName}</h4>

            <div className="progress">
                <div className={`progress-bar ${props.tabBGClass}`} role="progressbar" style={{width:`${props.percentage}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
	)
}


const Skills = props => {
  return (
    <React.Fragment>
    	<section className="skills-w3pvt py-5" id="skills">
	        <div className="container py-md-5">
	            <div className="row">
	                <div className="col-lg-6 progress-content text-left">
	                    <div className="py-lg-3 px-lg-5 p-md-5 p-3">
	                        <div className="progress-w3ls mt-5">
	                           
	                        	<SkillsConfig tabName="Simple Websites" tabBGClass="bg-success" percentage="25" />
	                        	<SkillsConfig tabName="Online Marketing" tabBGClass="progress-bar-stripe" percentage="50" />
	                        	<SkillsConfig tabName="Social Media" tabBGClass="bg-warning" percentage="75" />
	                        	<SkillsConfig tabName="24/7 support" tabBGClass="bg-danger" percentage="90" />

	                        	
	                        </div>
	                    </div>
	                </div>
	                <div className="col-lg-6 progress-content-img">
	                    <h3 className="title-w3ls mb-3">Lorem ipsum dolor sit magna feugiat etiam sed dolor</h3>
	                    <img src="images/img4.jpg" alt="" className="img-fluid image1" />
	                    <p className="mt-3"> Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum est. Cras mi ipsum,Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus.</p>
	                </div>


	            </div>
	        </div>
	    </section>
    </React.Fragment>
  );
};

export default Skills;
