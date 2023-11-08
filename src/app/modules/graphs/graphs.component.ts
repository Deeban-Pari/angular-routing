import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css'],
})
export class GraphsComponent {
  lineChart = new Chart({
    chart: {
      type: 'line',
    },
    title: {
      text: 'Patients',
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Patients admitted',
        data: [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16],
      } as any,
    ],
  });

  pieChart = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Diseases',
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'COVID 19', y: 1, color: '#eeeeee' },
          { name: 'HIV/AIDS', y: 2, color: '#393e46' },
          { name: 'EBOLA', y: 3, color: '#00adb5' },
          { name: 'DISPORA', y: 4, color: '#eeeeee' },
          { name: 'DIABETES', y: 5, color: '#506ef9' },
        ],
      },
    ],
  });
}
