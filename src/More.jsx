import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';

export class More extends React.Component{

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className="container">
                <h2>Author: Zeyu Li</h2><br/>
                <strong>Email: lizhaojing.hehe@gmail.com</strong><br/>
                <strong>Telephone: 7345463771</strong>
            </div>
        );
    }
}