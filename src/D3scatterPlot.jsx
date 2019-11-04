import React from 'react';
import rd3 from 'react-d3-library';
import DataService from './DataService';
import axios from 'axios';

const ScatterPlot = rd3.ScatterPlot;

export class D3scatterPlot extends React.Component {
    intervalHandler;
  
    constructor(props) {
        super(props);
        this.dataService=new DataService();
        //must initialize here, otherwise the plot component will not mount 1st time
        this.state = {d3: { 
                            width : 500, 
                            height : 500,
                            dataSet: [],
                            margin: {top: 20, right: 10, bottom:50, left: 50},
                            x_axis_class:"x",
                            y_axis_class:"y",
                            legend:'legend',
                            dot_class:"dot",
                            label : 'label',
                            x_display_name : 'X VALUE',
                            y_display_name : 'Y VALUE'}
                          };
    }

    componentDidMount = () => 
    {
          this.dataService.getAllData().then((response)=> {
              var fd=this.createScatterPlot(response.data);
              this.setState({d3: fd});
          });

          //refresh the visualization page every 10 s
          this.intervalHandler=setInterval(() => {
            this.dataService.getAllData().then((response)=> {
              var fd=this.createScatterPlot(response.data);
              this.setState({d3: fd});
          });
      }, 10000);
    }

    componentWillUnmount = () => {
        //clear the 10s interval reload when the component was unmount
        clearInterval(this.intervalHandler);
    }
  
    createScatterPlot = (dataList) => {
        var data={};
        data={width : 500, height : 500};
        data.dataSet=dataList;
        data.margin={top: 20, right: 10, bottom:50, left: 50};
        data.x_axis_class="x";
        data.y_axis_class="y";
        data.legend='legend';
        data.dot_class="dot";
        data.label = 'label';
        data.x_display_name = 'X VALUE';
        data.y_display_name = 'Y VALUE';
        console.log(data);
        return data;
    }
  
    render() {
      return (
        <div>
          <ScatterPlot data={this.state.d3} />
        </div>
      )
    }
  };