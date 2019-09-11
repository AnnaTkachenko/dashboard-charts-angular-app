import { Component, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';
import { HighchartsService } from 'src/app/core/services/highcharts.service';

export interface ILineChart {
  title: string;
  titleYAxis: string;
  titleXAxis: string;
  series: Array<{
    name: string;
    data: Array<[number, number]>;
  }>;
}

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements AfterViewInit {
  @Input() chartValues: ILineChart;

  @ViewChild('charts', { static: false }) public chartEl: ElementRef;

  private myOptions = {};

  constructor(
    private readonly highchartsService: HighchartsService
  ) { }

  ngAfterViewInit() {
    this.myOptions = {
      chart: {
        type: 'line',
        width: 800,
        zoomType: 'xy'
      },
      title: {
        text: this.chartValues.title,
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: this.chartValues.titleXAxis
        }
      },
      yAxis: {
        title: {
          text: this.chartValues.titleYAxis
        }
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 900,
            minWidth: 550
          },
          chartOptions: {
            legend: {
              enabled: false
            }
          }
        }]
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: true
        }
      },
      credits: {
        enabled: false
      },
      series: this.chartValues.series
    };
    this.highchartsService.createChart(this.chartEl.nativeElement, this.myOptions);
  }

}
