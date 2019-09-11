import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core/services/core.service';

export interface User {
  name: string;
  score: number;
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  users: User[];
  descSort: boolean;
  constructor(private readonly coreService: CoreService) { }

  ngOnInit() {
    this.coreService.getUsers().subscribe(res => {
      res.sort((a, b) => b.score - a.score);
      this.users = res;
      this.descSort = true;
    });
  }

  onButtonGroupClick($event) {
    const clickedBtnId = $event.target.id;

    if (clickedBtnId === 'showBottom' && this.descSort) {
      this.descSort = false;
      return this.users.sort((a, b) => a.score - b.score);
    } else if (clickedBtnId === 'showTop' && !this.descSort) {
      this.descSort = true;
      return this.users.sort((a, b) => b.score - a.score);
    }
  }
}
