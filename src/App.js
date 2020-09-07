import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';


import Header from './components/Header';
import Footer from './components/Footer';

// page components
import Homepage from './page components/Homepage';
import AboutUs from './page components/AboutUs';
import ContactUs from './page components/ContactUs';

function App() {
  return (
  	<div className="main-content" id="home">
  		<Header />

  		<Switch>
  			<Route exact path="/" component={Homepage} />
  			<Route exact path="/about" component={AboutUs} />
  			<Route exact path="/contact" component={ContactUs} />

  			<Route>
  				<div className="text-center py-5">
  					<h1 style={{fontSize:"70px",margin:"0"}}>404</h1>
  					<p style={{margin:"0"}}>Page Not Found</p>
  				</div>
  			</Route>
  		</Switch>

  		<Footer />
  	</div>
  );
}

export default App;
