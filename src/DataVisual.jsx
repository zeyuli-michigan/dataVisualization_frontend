import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import {D3scatterPlot} from './D3scatterPlot';
import DataService from './DataService';

export class DataVisual extends React.Component{

    constructor(props) {
        super(props);
        this.dataService=new DataService();
        this.state={
            dataList:[]
        }
    }

    render = () => {
        return (
            <div className='container'>
                <h1>Data Visualization</h1>   
                <D3scatterPlot></D3scatterPlot>
            </div>         
        )
    }

}