import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MainStore } from 'src/store';

@Component({
  selector: 'app-player-desk',
  templateUrl: './player-desk.component.html',
  styleUrls: ['./player-desk.component.css']
})
export class PlayerDeskComponent implements OnInit {
  playerDeskList: any;
  titleAlign: string = 'center';
  subs = new Subscription();

  playerDesk$ = this.store.select(MainStore.mainSelector.playerDesk);

  constructor(private _Activatedroute:ActivatedRoute,
    private store: Store) {
    this.playerDeskList = _Activatedroute.snapshot.queryParams['desk'];
  }

  ngOnInit() {
    this.subs.add(this.playerDesk$.subscribe((playerDesk) => {
      console.log('EL PLAYER DESK ES: ', playerDesk);
    }));
    this.playerDeskList = JSON.parse(this.playerDeskList);
    console.log('LAS CARTAS SON: ', this.playerDeskList);
  }

}
