import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PokeData, PokemonLists } from 'src/app/common/enums';

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
    private router: Router) { 
    this.formData = this._fb.group({
      selectElemntType: [null],
      selectPokeList: [null]
    });
  }

  ngOnInit(): void {
    console.log('A:', this.pokeTypeList);
    this.playerDeckSelected.length
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
    console.log('Lista de cartas agregados:', this.playerDeckSelected);
  }

  goToDesk() {
    this.router.navigate(['player-desk'], { queryParams: { desk: JSON.stringify(this.playerDeckSelected) } });
  }
}
