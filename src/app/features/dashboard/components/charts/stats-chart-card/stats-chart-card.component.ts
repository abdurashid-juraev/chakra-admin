import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  NgApexchartsModule,
  ChartComponent,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  colors: string[];
};

@Component({
  selector: 'app-stats-chart-card',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './stats-chart-card.component.html',
  styleUrls: ['./stats-chart-card.component.css'],
})
export class StatsChartCardComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;

  public chartOptions!: Partial<ChartOptions>;

  ngOnInit(): void {
    this.initChart();
  }
  public initChart(): void {
    const dynamicColors = ['#fff'];
    this.chartOptions = {
      series: [
        {
          name: 'Sales',
          data: [300, 220, 130, 280, 480, 410, 500, 300, 150],
        },
      ],
      chart: {
        type: 'bar',
        height: 222,
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 6,
          columnWidth: '18%',
        },
      },
      colors: dynamicColors, // Column ranglarini qo‘shdik
      dataLabels: { enabled: false },
      xaxis: {
        categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
        labels: { show: false },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        tickAmount: 6,
        labels: { style: { colors: '#fff' } },
      },
      grid: {
        yaxis: { lines: { show: false } },
        xaxis: { lines: { show: false } },
      },
    };
  }
}
