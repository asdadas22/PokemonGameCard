import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PokeData, PokemonLists } from 'src/app/common/enums';
import { SetPlayerDesk } from 'src/store/actions/mainStore.actions';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent {
  formData: FormGroup;
  @Input() pokeTypeList: any;
  @Output() typeSelected = new EventEmitter<number>();
  pokeListSelected: PokeData[] = [];
  playerDeckSelected: PokeData[] = [];

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private store: Store) { 
    this.formData = this._fb.group({
      selectElemntType: [null],
      selectPokeList: [null]
    });
  }


  changeType() {
    const pokeList = PokemonLists;
    const selectedValue = this.formData.get('selectElemntType')?.value;
    this.pokeListSelected = pokeList.filter((pokemon) => pokemon.type === selectedValue );
    this.typeSelected.emit(selectedValue);
  }

  addToDeck() {
    const selectedPokemon = this.formData.get('selectPokeList')?.value;
    const pokemonObject = this.pokeListSelected.find((pokemon) => pokemon.id === selectedPokemon);
    if (pokemonObject) {
      this.playerDeckSelected.push(pokemonObject);
    }
  }

  goToDesk() {
    this.store.dispatch(SetPlayerDesk({ playerDesk: this.playerDeckSelected }));
    this.router.navigate(['player-desk']);
  }
}
