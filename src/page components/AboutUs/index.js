import React from 'react';

import './styles.css';

import ShortAbout from './../../components/ShortAbout';
import Tabs from './../../components/Tabs';
import Services from './../../components/Services';
import Skills from './../../components/Skills';
import Teams from './../../components/Teams';
import Testimonials from './../../components/Testimonials';


const AboutUs = props => {
  return (
    <React.Fragment>
    	
    	<div className="banner-w3pvt-info second">
            <div className="overlay-w3ls second">
            </div>
        </div>

    	<ShortAbout />
        <Tabs />
    	<Services />
    	<Skills />
    	<Teams />
    	<Testimonials />

    </React.Fragment>
  );
};

export default AboutUs;
