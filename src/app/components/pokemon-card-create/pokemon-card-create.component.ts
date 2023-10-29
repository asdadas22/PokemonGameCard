import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokeData, PokeTypes } from 'src/app/common/enums';

interface AppState {
  playerDesk: PokeData[];
}

@Component({
  selector: 'app-pokemon-card-create',
  templateUrl: './pokemon-card-create.component.html',
  styleUrls: ['./pokemon-card-create.component.css']
})
export class PokemonCardCreateComponent implements OnInit {

  pokeTypeList = PokeTypes;
  cardTypeSelected: number = -1;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.subscribe( state => {
      console.log(state);
    });
  }

  changeTypeSelected(type: number) {
    this.cardTypeSelected = type;
    console.log('TYPO SELECCIONADO: ', this.cardTypeSelected);
  }

}
