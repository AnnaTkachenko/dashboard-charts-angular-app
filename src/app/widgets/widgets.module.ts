import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieComponent } from './pie/pie.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PreventedLossComponent } from './prevented-loss/prevented-loss.component';

@NgModule({
  declarations: [
    DoughnutComponent,
    LineChartComponent,
    PieComponent,
    BubbleChartComponent,
    LeaderboardComponent,
    PreventedLossComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DoughnutComponent,
    LineChartComponent,
    PieComponent,
    BubbleChartComponent,
    LeaderboardComponent,
    PreventedLossComponent
  ]
})
export class WidgetsModule { }
