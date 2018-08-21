import React, { Component } from 'react';
import firebase from 'firebase';


 var config = {
    apiKey: "AIzaSyAUASp8VYHn_AJwkoZMCmr8-Ju2vJBPLg0",
    authDomain: "test-59787.firebaseapp.com",
    databaseURL: "https://test-59787.firebaseio.com",
    projectId: "test-59787",
    storageBucket: "test-59787.appspot.com",
    messagingSenderId: "936872791000"
  }
  firebase.initializeApp(config)


class Header extends Component {

	constructor() {
		super();
		this.state = {
			name : ''
		}
	}


	componentWillMount(){
		const nameRef  = firebase.database().ref().child('object').child('name')
		nameRef.on('value' , (snapshot) => {
			this.setState({
				name : snapshot.val()
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
			      <h3>{this.state.name}</h3>
                    <div className="form-group">
                       <input type="text" className="form-control" />
                    </div>
			       </form>
				</div>
			 </header>
			)
	}
}
export default Header;