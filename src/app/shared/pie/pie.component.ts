import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Input } from '@angular/core';
import { HighchartsService } from 'src/app/core/highcharts.service';

export interface IPieData {
  title: string;
  name: string;
  data: Array<[string, number]>;
}

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements AfterViewInit {
  @Input() chartValues: IPieData;

  @ViewChild('charts', { static: false }) public chartEl: ElementRef;

  private myOptions = {};

  constructor(
    private readonly highchartsService: HighchartsService
  ) { }

  ngAfterViewInit() {
    this.myOptions = {
      chart: {
        renderTo: 'container',
        type: 'pie',
        width: 250,
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
        align: 'left'
      },
      tooltip: {
        formatter() {
          return '<b>' + this.point.name + '</b>: ' + this.y;
        }
      },
      series: [{
        name: this.chartValues.name,
        data: this.chartValues.data,
        dataLabels: {
          enabled: false
        }
      }]
    };
    this.highchartsService.createChart(this.chartEl.nativeElement, this.myOptions);
  }
}
