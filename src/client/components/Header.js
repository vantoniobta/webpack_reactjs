import React, { Component } from 'react';


class Header extends Component {
	render(){
		return (
		      <header>
		      <div className="example">
		      <img src="https://fmtu.mx/wp-content/uploads/2018/05/FM-TU-Logo-letras-blancas-02.png"/>
		      <form>
		      <input type="text" placeholder="Ingresa el codigo" />
		      </form>
			   </div>
			</header>
			)
	}
}
export default Header;