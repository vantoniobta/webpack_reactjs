import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './style/nav.css';
import './style/head.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

const App = () => {
	return(
	 <Router>
		<div className="App">
		    <nav>
			   <div className="menu-icon">
	             <i className="fa fa-bars fa-2x"></i>
			   </div>
	 	       <div className="logo">
			         vantonio
			    </div>
			    <div className="menu">
			       <ul>
			          <li><Link to="/">Inicio</Link></li>
			          <li><Link to="/about">About</Link></li>
			       </ul>
			     </div>
		    </nav>
		    <Header/>
            <Route exact path='/' component={Home} />
            <Route path="/about" component={About} />
        </div>
     </Router>
		)
}

render(
<App/>,
document.getElementById('app')
);