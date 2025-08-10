import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-spline-area-chart',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './spline-area-chart.component.html',
  styleUrl: './spline-area-chart.component.css',
})
export class SplineAreaChartComponent {
  public chartOptions: any;
  public series: any[] = [];

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        height: 470,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.2,
          stops: [0, 90, 100],
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yaxis: {
        min: 0,
        max: 500,
        tickAmount: 5,
        labels: {
          formatter: (value: number) => {
            return value.toFixed(0);
          },
        },
      },
      colors: ['#012e3c', '#52c194'],
      title: {
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#263238',
        },
      },
      subtitle: {
        align: 'left',
        margin: 5,
        style: {
          fontSize: '12px',
          color: '#757575',
        },
      },
      grid: {
        show: true,
        borderColor: '#e0e0e0',
        strokeDashArray: 4,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
    };

    this.series = [
      {
        name: '2024 Sales',
        data: [490, 220, 210, 250, 330, 300, 280, 260, 220, 250, 200, 170],
      },
      {
        name: '2025 Sales',
        data: [180, 200, 250, 280, 350, 450, 480, 350, 300, 350, 450, 500],
      },
    ];
  }
}
