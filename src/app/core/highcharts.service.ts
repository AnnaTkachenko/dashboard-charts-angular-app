import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { IPieData } from '../shared/pie/pie.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HighchartsService {
  private baseUrl = 'http://localhost:3000';
  constructor(private readonly http: HttpClient) { }

  createChart(el, cfg) {
    Highcharts.chart(el, cfg);
  }

  getDoughnutData() {
    return this.http.get(this.baseUrl + '/doughnutData').pipe(map((response: any) => {
      return response;
    }));
  }

  getPieData() {
    return this.http.get(this.baseUrl + '/pieData').pipe(map((response: any) => {
      return response;
    }));
  }
}
