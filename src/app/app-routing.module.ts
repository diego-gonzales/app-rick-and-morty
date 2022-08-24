import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Welcome',
    loadComponent: () => import('./standaloneComponents/welcome/welcome.component').then(m => m.WelcomeComponent)
  },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./standaloneComponents/home/home.component').then(m => m.HomeComponent)
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
