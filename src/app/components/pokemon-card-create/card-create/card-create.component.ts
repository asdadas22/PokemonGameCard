import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PokeData, PokemonLists } from 'src/app/common/enums';
import *  as actions from 'src/app/store/actions/ui.actions';

interface AppState {
  playerDesk: PokeData[];
};

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})

export class CardCreateComponent implements OnInit {
  formData: FormGroup;
  @Input() pokeTypeList: any;
  @Output() typeSelected = new EventEmitter<number>();
  pokeListSelected: PokeData[] = [];
  playerDeckSelected: PokeData[] = [];

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private store: Store<AppState>) { 
    this.formData = this._fb.group({
      selectElemntType: [null],
      selectPokeList: [null]
    });
  }

  ngOnInit(): void { }


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
    console.log('Lista de cartas agregados:', this.playerDeckSelected);
  }

  goToDesk() {
    this.store.dispatch(actions.addCard({ playerDesk: this.playerDeckSelected[0] }));
    this.router.navigate(['player-desk'], { queryParams: { desk: JSON.stringify(this.playerDeckSelected) } });
  }
}
