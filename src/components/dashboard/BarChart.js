import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

export class BarChartDemo extends Component {
    render() {
        const { barChartData } = this.props;

        const axisOptions = {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: true
            },
            scales: {
                xAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'x-axis-1',
                    ticks: {
                        min: 30,
                        max: 100
                    }
                }
                
            ]
            }
        }

        return (
            <Chart type="horizontalBar" data={barChartData} options={axisOptions} />
        );
    }
}