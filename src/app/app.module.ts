import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardCreateComponent } from './components/pokemon-card-create/pokemon-card-create.component';
import { CardCreateComponent } from './components/pokemon-card-create/card-create/card-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/pokemon-card-create/card/card.component';
import { PlayerDeskComponent } from './components/player-desk/player-desk.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardCreateComponent,
    CardCreateComponent,
    CardComponent,
    PlayerDeskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
