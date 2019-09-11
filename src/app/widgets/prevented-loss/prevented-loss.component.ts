import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core/services/core.service';

export interface IPreventedLoss {
  title: string;
  value: string;
}

@Component({
  selector: 'app-prevented-loss',
  templateUrl: './prevented-loss.component.html',
  styleUrls: ['./prevented-loss.component.scss']
})
export class PreventedLossComponent implements OnInit {
  title: string;
  value: string;

  constructor(private readonly coreService: CoreService) { }

  ngOnInit() {
    this.coreService.getPreventedLoss().subscribe(res => {
      this.title = res.title;
      this.value = res.value;
    });
  }

}
