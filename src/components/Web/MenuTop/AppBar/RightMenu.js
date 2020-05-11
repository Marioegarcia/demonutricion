import React, { Component } from 'react';
import SocialLinks from "../../SocialLinks";
import logoWhite from "../../../../assets/img/png/logo.jpg";
import "./AppBar.scss"


export default class Sider extends Component {
  state = {
    
    isOpen : false
    
  };

  handleClick = () => {
  
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };


  render() {
    return (
      <>
      <div class="navbar-fixed">
      <nav class=" orange darken-2 " name="inicio">
        <div class="container ">
          <a href="/" class="brand-logo"><img src={logoWhite} className="menu-top__left-logo" alt="description" /></a>
          <a href="/" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down  " >
            <li><a href="sass.html" >Inicio</a></li>
            <li><a href="badges.html">Recetas</a></li>
            <li><a href="collapsible.html">Consejos</a></li>
            <li><a href="mobile.html">Registrarse</a></li>
            <li class="sociales">
            <SocialLinks/>
            </li>
          </ul>
          
        </div>
        
      </nav>

        <ul class="sidenav" id="mobile-demo">
          <li><a href="sass.html">Inicio</a></li>
          <li><a href="badges.html">Recetas</a></li>
          <li><a href="collapsible.html">Consejos</a></li>
          <li><a href="mobile.html">Registrarse</a></li>
        </ul>

      </div>
     </>
         
         
        
      
    );
  }
}

