import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokeTypes } from 'src/app/common/enums';
import { ClearState } from 'src/store/actions/mainStore.actions';

@Component({
  selector: 'app-pokemon-card-create',
  templateUrl: './pokemon-card-create.component.html',
  styleUrls: ['./pokemon-card-create.component.css']
})
export class PokemonCardCreateComponent implements OnInit {

  pokeTypeList = PokeTypes;
  cardTypeSelected: number = -1;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(ClearState());
  }

  changeTypeSelected(type: number) {
    this.cardTypeSelected = type;
  }

}
