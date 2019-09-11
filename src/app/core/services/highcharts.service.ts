import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts);
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HighchartsService {
  constructor(private readonly http: HttpClient) { }

  createChart(el, cfg) {
    Highcharts.chart(el, cfg);
  }
}
