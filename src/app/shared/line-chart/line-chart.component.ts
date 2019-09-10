import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HighchartsService } from 'src/app/core/highcharts.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements AfterViewInit {
  @ViewChild('charts', { static: false }) public chartEl: ElementRef;

  private myOptions = {};

  constructor(
    private readonly highchartsService: HighchartsService
  ) { }

  ngAfterViewInit() {
    this.myOptions = {
      chart: {
        type: 'line',
        width: 800
      },
      title: {
        text: 'Past performance',
        align: 'left'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'N of Users'
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
      series: [{
        name: 'Test Performed',
        data: [
          [1565794000000, 9],
          [1566094000000, 3],
          [1566394000000, 10],
          [1566594000000, 30],
          [1566680400000, 45],
          [1567285200000, 20],
          [1568062800000, 19]
        ]
      },
      {
        name: 'Test Faild',
        data: [
          [1565794000000, 21.5],
          [1566094000000, 25.2],
          [1566394000000, 26.5],
          [1566594000000, 23.3],
          [1566680400000, 18.3],
          [1567285200000, 13.9],
          [1568062800000, 9.6]
        ]
      }]
    };
    this.highchartsService.createChart(this.chartEl.nativeElement, this.myOptions);
  }

}
