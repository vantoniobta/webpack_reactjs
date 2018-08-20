import React from 'react';
import { render } from 'react-dom';

import './style/nav.css';
import Header from './components/Header';


const App = () => {
	return(
		<div>
		  <Header/>
		</div>
		)

}

render(
<App/>,
document.getElementById('app')
);