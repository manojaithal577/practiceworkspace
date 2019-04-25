import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class GraphPlotService {
  chart = [];

  constructor() { }

  public getGraph(month: any[], price: any[]) {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: month,
        datasets: [
          {
            data: price,
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    })
    return this.chart;
  }

}
