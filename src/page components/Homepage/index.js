import React from 'react';

import './styles.css';


import HeaderBanner from './../../components/HeaderBanner';
import ShortAbout from './../../components/ShortAbout';
import Services from './../../components/Services';
import Tabs from './../../components/Tabs';
import Skills from './../../components/Skills';
import Teams from './../../components/Teams';
import Testimonials from './../../components/Testimonials';
import HomepageBannerButton from './../../components/HomepageBannerButton';
import ContactForm from './../../components/ContactForm';


const Homepage = props => {
  return (
    <React.Fragment>
  		<HeaderBanner />
  		<ShortAbout />
  		<Services />
      <Tabs />
  		<Skills />
  		<Teams />
  		<Testimonials />
  		<HomepageBannerButton />
  		<ContactForm />
    </React.Fragment>
  );
};

export default Homepage;
