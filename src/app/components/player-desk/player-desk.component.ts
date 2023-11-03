import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { UIStore } from 'src/app/store/reducers';

@Component({
  selector: 'app-player-desk',
  templateUrl: './player-desk.component.html',
  styleUrls: ['./player-desk.component.css']
})
export class PlayerDeskComponent implements OnInit {
  playerDeskList: any;
  storedDeskList: any
  titleAlign: string = 'center';
  sucursales$ = this.store.select(UIStore.selectors.playerDesk);
  
  constructor(
    private _Activatedroute:ActivatedRoute,
    private store: Store) 
  {
    this.playerDeskList = _Activatedroute.snapshot.queryParams['desk'];
  }

  ngOnInit(): void {
    this.store.subscribe( playerDeskRecived => {
      console.log('LO QUE TIENE EL STORE ES: ', playerDeskRecived);
    });
    this.playerDeskList = JSON.parse(this.playerDeskList);
    console.log('LAS CARTAS SON: ', this.storedDeskList);
  }

}
