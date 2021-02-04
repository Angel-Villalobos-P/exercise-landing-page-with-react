import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import Footer from './components/Footer'

//Este menu permite modificar el contenido del Navbar sin tener que modificar el codigo del mismo Navbar
let menu = [
  { brand: "Start Booststrap", url: "/#" },
  { label: "Home", url: "/#" },
  { label: "About", url: "/#" },
  { label: "Services", url: "/#" },
  { label: "Contact", url: "/#" }
];

ReactDOM.render(
    <React.StrictMode>
        <NavBar
            items={menu}
            brand={menu[0].brand}
        />
        <Jumbotron />
        <Card />
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
