import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    title: 'Welcome',
    loadComponent: () => import('@pages/welcome/welcome.component').then(m => m.WelcomeComponent)
  },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('@pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'rick-and-morty',
    loadChildren: () => import('@layouts/rick-and-morty/rick-and-morty.routes').then(m => m.RickAndMortyRoutes)
  },
  {
    path: '**',
    redirectTo: ''
  }
];