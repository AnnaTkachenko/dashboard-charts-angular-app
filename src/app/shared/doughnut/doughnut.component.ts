import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { HighchartsService } from 'src/app/core/highcharts.service';
import { IPieData } from '../pie/pie.component';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements AfterViewInit {
  /**
   * Possibility to load custom chart that was created on backend;
   * With custom/specific configuration
   */
  @Input() customChartOptions?: IPieData;
  @Input() chartValues: IPieData;

  @ViewChild('charts', { static: false }) public chartEl: ElementRef;

  private myOptions = {};

  constructor(
    private readonly highchartsService: HighchartsService
  ) { }

  ngAfterViewInit() {
    this.myOptions = this.customChartOptions ? this.customChartOptions : {
      chart: {
        renderTo: 'container',
        type: 'pie',
        width: 200,
        height: 250
      },
      responsive: {
        rules: [{
          condition: {
            maxHeight: 300
          }
        }]
      },
      credits: {
        enabled: false
      },
      title: {
        text: this.chartValues.title,
        verticalAlign: 'middle',
        y: 10,
        floating: true,
        style: { 'font-size': '14px' }
      },
      tooltip: {
        formatter() {
          return '<b>' + this.point.name + '</b>: ' + this.y;
        }
      },
      series: [{
        name: this.chartValues.name,
        data: this.chartValues.data,
        innerSize: '70%',
        dataLabels: {
          enabled: false
        }
      }]
    };

    this.highchartsService.createChart(this.chartEl.nativeElement, this.myOptions);
  }

}
