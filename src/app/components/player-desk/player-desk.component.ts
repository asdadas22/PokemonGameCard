import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-desk',
  templateUrl: './player-desk.component.html',
  styleUrls: ['./player-desk.component.css']
})
export class PlayerDeskComponent implements OnInit {
  playerDeskList: any;
  titleAlign: string = 'center';
  constructor(private _Activatedroute:ActivatedRoute) {
    this.playerDeskList = _Activatedroute.snapshot.queryParams['desk'];
  }

  ngOnInit() {
    this.playerDeskList = JSON.parse(this.playerDeskList);
    console.log('LAS CARTAS SON: ', this.playerDeskList);
  }

}
