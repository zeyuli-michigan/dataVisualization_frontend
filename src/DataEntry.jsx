import React from 'react';
import {Button, Table, Select, Form, Modal, Input} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import DataService from './DataService';
import DataEntryModal from './DataEntryModal';


export class DataEntry extends React.Component{


    constructor(props) {
        super(props);

        this.dataService=new DataService();
        this.state={
            dataList:[]
        }
    }

    componentDidMount=()=> {
        this.dataService.getAllData().then((response)=> {
            console.log(response.data);
            this.setState({dataList: response.data});
        });
    }

    handleDelete = (id) => {
        console.log(id);
        this.dataService.deleteData(id).then((response) => {
            window.alert("Delete success!");
            
            this.dataService.getAllData().then((response)=> {
                this.setState({dataList: response.data});
            });
        });
    }
    
    handleRefresh = () => {
        this.dataService.getAllData().then((response)=> {
            this.setState({dataList: response.data});
        });
    }

    render = () => {
        var tableList = this.state.dataList.map((data) => {
            return <tr key={data._id}><td>{data._id}</td><td>{data.x_value}</td><td>{data.y_value}</td><td>{data.type}</td><td><FontAwesomeIcon style={{cursor:'pointer'}} icon={faTrash} 
            onClick={() => this.handleDelete(data._id)}/></td></tr>;
          });

        return (
            <div className='container'>
                <h1>Data table</h1>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th width='5'>#</th>
                    <th>X</th>
                    <th>Y</th>
                    <th>Type</th>
                    <th width='5'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {tableList}
                </tbody>
                </Table>
                <DataEntryModal handleRefresh={this.handleRefresh}></DataEntryModal>

            </div>
        )
    }







    
}