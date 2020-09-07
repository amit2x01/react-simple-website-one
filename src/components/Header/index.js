import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.css';


const Header = props => {
  return (
    <React.Fragment>
    	<header className="header">
            <div className="container">
            
                <nav className="py-2">
                    <div id="logo">
                        <h1> <a className="navbar-brand" href="index.html">No<span>rm</span> </a>
                        </h1>
                    </div>

                    <label htmlFor="drop" className="toggle">Menu</label>
                    <input type="checkbox" id="drop" />
                    <ul className="menu">
                        <li className="active">
                             <NavLink to="/" exact activeClassName="active" >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" exact activeClassName="active" >About Us</NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="/contact" exact activeClassName="active" >Contact Us</NavLink>
                        </li>


                        <li className="header-right">
                            <ul className="list-unstyled team-icons mt-4">
                                <li>
                                    <a href="/" className="t-icon">
                                        <span className="fa fa-facebook-f"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="t-icon">
                                        <span className="fa fa-twitter"></span>
                                    </a>
                                </li>


                            </ul>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    </React.Fragment>
  );
};

export default Header;
