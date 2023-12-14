import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerDeskComponent } from '../player-desk/player-desk.component';
import { PokemonCardCreateComponent } from './pokemon-card-create.component';


const routes: Routes = [
  { path: '', component: PokemonCardCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonCardCreateRoutingModule { }
