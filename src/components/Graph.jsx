import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Graph extends Component {
    constructor(props) {
        super(props)

        this.state = {
            options: {
                chart: {
                    background: '#f4f4f4',
                    foreColor: '#333'
                },
                yaxis: this.props.data,
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                fill: {
                    colors: ['#f44336']
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: `${this.props.type} Sort`,
                    align: 'center',
                    margin: 20,
                    offsetY: 20
                }
            },
            series: [
                {
                    name: `${this.props.type} Sort`,
                    data: this.props.data
                }
            ]
        }
    }

    componentDidMount() {
        this.setState(
            { 
                options: {
                    ...this.state.options,
                    yaxis: this.props.data
                },
                series: [
                    ...this.state.series,
                    {
                        data: this.props.data
                    }
                ]
            });
    }

    componentDidUpdate() {
        // this.setState(
        //     { 
        //         options: {
        //             ...this.state.options,
        //             yaxis: this.props.data
        //         },
        //         series: [
        //             ...this.state.series,
        //             {
        //                 data: this.props.data
        //             }
        //         ]
        // });
    }

    render() {
        return(
            <React.Fragment>
                <Chart 
                    options={this.state.options}
                    series={this.state.series}
                    type='bar'
                    height= '450'
                    width='100%'
                />
            </React.Fragment>
        );
    }
}

export default Graph