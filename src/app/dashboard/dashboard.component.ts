import { Component, OnInit } from '@angular/core';
import { IPieData } from '../widgets/pie/pie.component';
import { ILineChart } from '../widgets/line-chart/line-chart.component';
import { IBubbleChart } from '../widgets/bubble-chart/bubble-chart.component';
import { CoreService } from '../core/services/core.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  doughnuts: IPieData[];
  pieData: IPieData[];
  lineChartData: ILineChart;
  bubbleChartData: IBubbleChart;
  preventedLoss: string;
  loader: boolean;

  constructor(private readonly coreService: CoreService) { }

  ngOnInit() {
    this.loader = true;
    this.coreService.getDoughnutData().subscribe(res => this.doughnuts = res);
    this.coreService.getPieData().subscribe(res => this.pieData = res);
    this.coreService.getLineChartData().subscribe(res => this.lineChartData = res);
    this.coreService.getBubbleChartData().subscribe(res => this.bubbleChartData = res);
  }
}
