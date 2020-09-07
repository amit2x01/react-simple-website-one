import React from 'react';

import './styles.css';


const TeamConfig = (props) => {
	return (

		<div>

			<div className="team-img mb-4">
                <img src={props.profile_picture} className="img-fluid" alt="user-image" />
            </div>
            <div className="team-info">
                <h3 className="mt-md-4 mt-3"><span className="sub-tittle-team">Agent</span> {props.profile_name}</h3>
                <p>Lorem Ipsum has been the industry's standard since the 1500s.</p>
                <ul className="list-unstyled team-icons mt-4">
                    <li>
                        <a href="#" className="t-icon">
                            <span className="fa fa-facebook-f"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="t-icon">
                            <span className="fa fa-twitter"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="t-icon">
                            <span className="fa fa-dribbble"></span>
                        </a>
                    </li>

                </ul>
            </div>

		</div>

	)
}

const Teams = props => {
  return (
    <React.Fragment>
    	<section className="banner-bottom py-lg-5 py-4">
	        <div className="container">
	            <div className="row mt-lg-5 mt-4">
	                <div className="col-md-4 team-gd text-center">
	                    <TeamConfig profile_picture="images/team1.jpg" profile_name="Jason Donoghue" />
	                </div>

	                <div className="col-md-4 team-gd second text-center">
	                    <TeamConfig profile_picture="images/team2.jpg" profile_name="Mariana Noe" />
	                </div>

	                <div className="col-md-4 team-gd text-center">
	                    <TeamConfig profile_picture="images/team3.jpg" profile_name="Daniel Doe" />
	                </div>
	            </div>

	        </div>
	    </section>
    </React.Fragment>
  );
};

export default Teams;
