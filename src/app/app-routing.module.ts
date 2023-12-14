import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerDeskComponent } from './components/player-desk/player-desk.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';


const routes: Routes = [
  { path: '', component: LoginComponentComponent },
  // Lazy loading para componentes - En este caso no es posible ya 
  // que se comparte un componente con la pagina principal
  {
    path: 'create-desk',
    loadChildren: () => import('./components/pokemon-card-create/pokemon-card-create.module').then(m => m.PokemonCardCreateModule)
  },
  { path: 'player-desk', component: PlayerDeskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
