import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import './BodyClimo.css';

export const BodyClimo = () => (
    <ReactFullpage
        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <p>Section 1 (welcome to fullpage.js)</p>
                    </div>
                    <div className="section">
                        <p>Section 2</p>
                    </div>
                    <div className="section">
                        <p>Section 3</p>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);


