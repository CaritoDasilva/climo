import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';


import NavbarClimo from './navbar/NavbarClimo';
import { BodyClimo } from './BodyClimo/BodyClimo';

class App extends Component {


  render() {
    const names = ["carito", "mayra", "paula", "mitzuro", "lu", "Bautista"];
    return (

      <div>
        <NavbarClimo></NavbarClimo>
        <BodyClimo></BodyClimo>
        <h1>HOLA MUNDO</h1>
        <ul>
          {names.map(name =>
            <li>{name}</li>
          )}

        </ul>
      </div >
    );

  }
}

export default App;
