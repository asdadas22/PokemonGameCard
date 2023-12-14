import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { PokemonCardCreateComponent } from './pokemon-card-create.component';
import { CardCreateComponent } from './card-create/card-create.component';
import { CardComponent } from './card/card.component';
import { PlayerDeskComponent } from '../player-desk/player-desk.component';
import { PokemonCardCreateRoutingModule } from './pokemon-card-create-routing.module';
import { CommonModule } from '@angular/common';
import { mainStoreReducer } from 'src/store/mainStore.reducer';


@NgModule({
  declarations: [
    PokemonCardCreateComponent,
    CardCreateComponent,
    CardComponent,
    PlayerDeskComponent
  ],
  imports: [
    CommonModule,
    PokemonCardCreateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('desk', mainStoreReducer)
  ],
  providers: []
})
export class PokemonCardCreateModule { }
