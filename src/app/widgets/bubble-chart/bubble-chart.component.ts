import { Component, ElementRef, AfterViewInit, ViewChild, Input } from '@angular/core';
import { HighchartsService } from 'src/app/core/services/highcharts.service';

export interface IBubbleChart {
  title: string;
  series: Array<{
    data: Array<{
      x: number;
      y: number;
      z: number;
      name: string;
      country: string;
    }>
  }>;
}

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent implements AfterViewInit {
  @ViewChild('charts', { static: false }) public chartEl: ElementRef;
  @Input() chartValues: IBubbleChart;

  private myOptions = {};

  constructor(
    private readonly highchartsService: HighchartsService
  ) { }

  ngAfterViewInit() {
    this.myOptions = {
      chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
      },
      legend: {
        enabled: false
      },
      title: {
        text: this.chartValues.title
      },
      series: this.chartValues.series,
      credits: {
        enabled: false
      },
    };
    this.highchartsService.createChart(this.chartEl.nativeElement, this.myOptions);
  }
}
