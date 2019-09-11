import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPieData } from '../../widgets/pie/pie.component';
import { map } from 'rxjs/operators';
import { ILineChart } from '../../widgets/line-chart/line-chart.component';
import { IBubbleChart } from '../../widgets/bubble-chart/bubble-chart.component';
import { User } from 'src/app/widgets/leaderboard/leaderboard.component';
import { IPreventedLoss } from 'src/app/widgets/prevented-loss/prevented-loss.component';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private baseUrl = 'http://localhost:3000';
  constructor(private readonly http: HttpClient) { }

  getDoughnutData() {
    return this.http.get(this.baseUrl + '/doughnutData').pipe(map((response: IPieData[]) => {
      return response;
    }));
  }

  getPieData() {
    return this.http.get(this.baseUrl + '/pieData').pipe(map((response: IPieData[]) => {
      return response;
    }));
  }

  getLineChartData() {
    return this.http.get(this.baseUrl + '/lineChartData').pipe(map((response: ILineChart) => {
      return response;
    }));
  }

  getBubbleChartData() {
    return this.http.get(this.baseUrl + '/bubbleChartData').pipe(map((response: IBubbleChart) => {
      return response;
    }));
  }

  getUsers() {
    return this.http.get(this.baseUrl + '/users').pipe(map((response: User[]) => {
      return response;
    }));
  }

  getPreventedLoss() {
    return this.http.get(this.baseUrl + '/preventedLoss').pipe(map((response: IPreventedLoss) => {
      return response;
    }));
  }
}
