import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCardCreateComponent } from './components/pokemon-card-create/pokemon-card-create.component';
import { PlayerDeskComponent } from './components/player-desk/player-desk.component';


const routes: Routes = [
  { path: '', component: PokemonCardCreateComponent },
  { path: 'player-desk', component: PlayerDeskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
