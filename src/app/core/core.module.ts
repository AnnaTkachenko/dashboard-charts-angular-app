import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsService } from './services/highcharts.service';
import { CoreService } from './services/core.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    HighchartsService,
    CoreService
  ]
})
export class CoreModule { }
