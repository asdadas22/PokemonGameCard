import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PokeData } from 'src/app/common/enums';
import { MainStore } from 'src/store';

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

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.subs.add(this.playerDesk$.subscribe((state) => {
      console.log('EL STATE ES: ', state.desk.playerDesk)
      this.playerDeskList = state.desk.playerDesk;
    }));
  }

}
