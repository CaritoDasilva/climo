import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import SectionOne from '../BodyClimo/sectionOne/SectionOne';
import SectionTwo from '../BodyClimo/sectionTwo/SectionTwo';
import './BodyClimo.css';


export const BodyClimo = () => (
    <ReactFullpage
        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <SectionOne></SectionOne>
                    </div>
                    <div className="section">
                        <SectionTwo></SectionTwo>
                    </div>
                    <div className="section">
                        <p>Section 3</p>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);


