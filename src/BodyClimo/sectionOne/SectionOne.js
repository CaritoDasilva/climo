import React, { Component } from 'react';
import { Carousel } from 'react-materialize';

import './SectionOne.css';

export default class SectionOne extends Component {
    render() {
        const imageOne = <img className='imageOne' src="/imgs/los-8-mejores-aires-acondicionados.jpg" />;
        return (
            <Carousel options={{ fullWidth: true, indicators: true }}>
                <div brand={imageOne} className="carousel-item red white-text" href="#one!">
                    <h2>First Panel</h2>
                    <p className="white-text">This is your first panel</p>
                </div>
                <div className="carousel-item amber white-text" href="#two!">
                    <h2>Second Panel</h2>
                    <p className="white-text">This is your second panel</p>
                </div>
                <div className="carousel-item green white-text" href="#three!">
                    <h2>Third Panel</h2>
                    <p className="white-text">This is your third panel</p>
                </div>
                <div className="carousel-item blue white-text" href="#four!">
                    <h2>Fourth Panel</h2>
                    <p className="white-text">This is your fourth panel</p>
                </div>
            </Carousel>

        );
    }

};