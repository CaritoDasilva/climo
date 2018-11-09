import React, { Component } from 'react';
import { CardPanel, Col, Row } from 'react-materialize';

import './SectionTwo.css';

export default class SectionTwo extends Component {
    render() {
        const imageOne = <img className='imageOne' src="/imgs/los-8-mejores-aires-acondicionados.jpg" />;
        return (
            <Row className='contentCards'>
                <Col s={12} m={5}>
                    <CardPanel className="white black-text">
                        <img className='imgCard' src='https://miclimo.com/wp-content/uploads/2018/11/xMesa-de-trabajo-2-8.png.pagespeed.ic.wOYkGVjYf0.webp' />
                        <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
                    </CardPanel>
                </Col>
                <Col s={12} m={5}>
                    <CardPanel className="white black-text">
                        <img className='imgCard' src='https://miclimo.com/wp-content/uploads/2018/11/xMesa-de-trabajo-2-8.png.pagespeed.ic.wOYkGVjYf0.webp' />
                        <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
                    </CardPanel>
                </Col>
                <Col s={12} m={5}>
                    <CardPanel className="white black-text">
                        <img className='imgCard' src='https://miclimo.com/wp-content/uploads/2018/11/xMesa-de-trabajo-2-8.png.pagespeed.ic.wOYkGVjYf0.webp' />
                        <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
                    </CardPanel>
                </Col>
                <Col s={12} m={5}>
                    <CardPanel className="white black-text">
                        <img className='imgCard' src='https://miclimo.com/wp-content/uploads/2018/11/xMesa-de-trabajo-2-8.png.pagespeed.ic.wOYkGVjYf0.webp' />
                        <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
                    </CardPanel>
                </Col>
            </Row>


        );
    }

};