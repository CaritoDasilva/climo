import React, { Component } from 'react';
import './NavbarClimo.css';
import { Navbar, NavItem } from 'react-materialize'

export default class NavbarClimo extends Component {
    render() {
        const logo = <img className='logo' src="/imgs/logo-climo.jpg" />;
        return (
            <Navbar brand={logo} right className='navbarInit' >
                <NavItem onClick={() => console.log('test click')}>Inicio</NavItem>
                <NavItem href='components.html'>Planes</NavItem>
                <NavItem href='components.html'>Hogar</NavItem>
                <NavItem href='components.html'>Empresas</NavItem>
                <NavItem href='components.html'>Cotiza</NavItem>
                <NavItem href='components.html'>Blog</NavItem>
                <NavItem href='components.html'>Contacto</NavItem>

            </Navbar >
        )
    }
}
