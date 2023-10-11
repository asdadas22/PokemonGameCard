import { Component, OnInit } from '@angular/core';
import { PokeTypes } from 'src/app/common/enums';

@Component({
  selector: 'app-pokemon-card-create',
  templateUrl: './pokemon-card-create.component.html',
  styleUrls: ['./pokemon-card-create.component.css']
})
export class PokemonCardCreateComponent implements OnInit {

  pokeTypeList = PokeTypes;
  cardTypeSelected: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  changeTypeSelected(type: number) {
    this.cardTypeSelected = type;
    console.log('TYPO SELECCIONADO: ', this.cardTypeSelected);
  }

}
