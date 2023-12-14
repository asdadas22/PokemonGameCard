// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PokeData } from 'src/app/common/enums';
import { MainStore } from 'src/store';
import { AppState } from 'src/store/mainStore.store';

@Component({
  selector: 'app-player-desk',
  templateUrl: './player-desk.component.html',
  styleUrls: ['./player-desk.component.css']
})
export class PlayerDeskComponent implements OnInit {
  playerDeskList: PokeData[] = [];
  titleAlign: string = 'center';
  subs = new Subscription();

  playerDesk$ = this.store.select(MainStore.mainSelector.desk);

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.subs.add(this.playerDesk$.subscribe((state) => {
      this.playerDeskList = state.desk.playerDesk;
    }));
  }

}
