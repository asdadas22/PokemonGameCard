import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { ElementType } from 'src/app/common/enums';
import { RemoveCardFromDesk } from 'src/store/actions/mainStore.actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardTypeSelected: any;
  @Input() cardID: string = '';
  @Input() canDelete: boolean = false;

  cardUrl: string = '';

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cardTypeSelected'].currentValue === -1) {
      return;
    }
    const typeCard = changes['cardTypeSelected'].currentValue;
    this.cardUrl = "./assets/img/cards/"
    console.log('El valor de la carta seleccionada es', typeCard);
    switch(typeCard) {
      case ElementType.AGUA:
        this.cardUrl += 'agua.png';
        break;
      case ElementType.FUEGO:
        this.cardUrl += 'fuego.png';
        break;
      case ElementType.ELECTRICO:
        this.cardUrl += 'electrico.png';
        break;
      case ElementType.DRAGON:
        this.cardUrl += 'dragon.png';
        break;
      case ElementType.PLANTA:
        this.cardUrl += 'planta.png';
        break;
    } 
  }

  deleteCard() {
    console.log('EL ID DE LA CARTA ES: ', this.cardID);
    this.store.dispatch(RemoveCardFromDesk({ id: this.cardID }));
  }

}
