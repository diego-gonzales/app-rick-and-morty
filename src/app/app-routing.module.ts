import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/get-started/get-started.module').then(m => m.GetStartedModule)
  },
  {
    path: 'rick-and-morty',
    loadChildren: () => import('./modules/rick-and-morty/rick-and-morty.module').then(m => m.RickAndMortyModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
