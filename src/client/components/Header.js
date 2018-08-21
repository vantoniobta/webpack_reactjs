import React, { Component } from 'react';


import firebase from 'firebase';
import { DB_CONFIG } from '../../config/config';
import 'firebase/database';



class Header extends Component {

	constructor() {
		super();

		this.app = firebase.initializeApp(DB_CONFIG);
		this.database  = this.app.database().ref().child('example');		
	}

	componentDidMount(){
		this.database.on('value', snap => {
			this.setState({
				speed : snap.val()
			})
		})
	}


	render(){
		return (
		      <header>
			    <div className="example">
			      <img src="https://fmtu.mx/wp-content/uploads/2018/05/FM-TU-Logo-letras-blancas-02.png"/>
			      <br/><br/>
			      <form>
			      <p>{this.state.speed}</p>
                    <div className="form-group">
                       <input type="text" className="form-control" placeholder="Ingresa el codigo" />
                    </div>
			       </form>
				</div>
			 </header>
			)
	}
}
export default Header;