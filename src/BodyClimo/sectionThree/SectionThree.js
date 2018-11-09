import React, { Component } from 'react';
import { Card, CardTitle, Col, Row } from 'react-materialize';

import './SectionThree.css';

export default class SectionThree extends Component {
    render() {
        const imageOne = <img className='imageOne' src="/imgs/los-8-mejores-aires-acondicionados.jpg" />;
        return (
            <div>
                <Row className='contentCardsInfo'>
                    <Col s={12} m={5}>
                        <Card header={<CardTitle reveal image={"/imgs/card1.jpg"} waves='light' />}
                            title="Card Title"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </Col>
                    <Col s={12} m={5}>
                        <Card header={<CardTitle reveal image={"/imgs/card2.jpg"} waves='light' />}
                            title="Card Title"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </Col>
                    <Col s={12} m={5}>
                        <Card header={<CardTitle reveal image={"/imgs/card3.jpg"} waves='light' />}
                            title="Card Title"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }

};