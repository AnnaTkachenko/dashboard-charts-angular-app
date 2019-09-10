import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HighchartsService } from '../core/highcharts.service';
import { IPieData } from '../shared/pie/pie.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  doughnuts: IPieData[];
  pieData: IPieData[];

  constructor(private readonly highchartsService: HighchartsService) { }

  ngOnInit() {
    this.highchartsService.getDoughnutData().subscribe(res => this.doughnuts = res);
    this.highchartsService.getPieData().subscribe(res => this.pieData = res);
    // this.highchartsService.getLineChartData().subscribe(res => this.lineChartData = res);
    // this.highchartsService.getLineChartData().subscribe(res => this.pieData = res);
  }

}
