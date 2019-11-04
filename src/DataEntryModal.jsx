import React from 'react';
import {Button, Table, Select, Form, Modal, Input} from 'react-bootstrap';
import DataService from './DataService'

export default class DataEntryModal extends React.Component{

    constructor(props){
        super(props);
        this.state={
            show:false,
            x_value: 0,
            y_value: 0,
            type: 1,
        }
        this.dataService=new DataService();
    }

    handleModalClose = () => { this.setState({show:false})};
    
    handleModalShow = () => { this.setState({show:true})};

    handleXchange = (e) => {this.setState({x_value:e.target.value })};

    handleYchange = (e) => {this.setState({y_value:e.target.value })};

    handleTypeChange = (e) => {this.setState({type:e.target.value })};


    handleDataInput = (e) => {
        e.preventDefault();
        e.stopPropagation();

        this.dataService.addData({x_value:this.state.x_value, y_value: this.state.y_value, type: this.state.type}).then(()=>{
            this.props.handleRefresh();
        });
        this.setState({show:false});
    }

    render = () => {
        return (
        <div>
            <Button variant="primary" onClick={this.handleModalShow}>
                Enter new data
            </Button>

            <Modal show={this.state.show} onHide={this.handleModalClose}>
                <Form onSubmit={this.handleDataInput}>
                    <Modal.Header closeButton>
                    <Modal.Title>New data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Group controlId="x_value">
                        <Form.Label>Please input X:</Form.Label>
                        <Form.Control type="number" placeholder="Enter X" onChange={this.handleXchange} value={this.state.x_value} required/>
                    </Form.Group>
                    <Form.Group controlId="y_value">
                        <Form.Label>Please input Y:</Form.Label>
                        <Form.Control type="number" placeholder="Enter Y" onChange={this.handleYchange} value={this.state.y_value} required/>
                    </Form.Group>
                    <Form.Group controlId="Type">
                        <Form.Label>Please select a type:</Form.Label>
                        <Form.Control type="number" placeholder="Choose a type" as="select"  onChange={this.handleTypeChange} value={this.state.type} required>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </Form.Control>
                    </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
        );
    }
}