import { Routes } from '@angular/router';
import { RickAndMortyComponent } from './rick-and-morty.component';

export const RickAndMortyRoutes: Routes = [
  {
    path: '',
    component: RickAndMortyComponent,
    children: [
      {
        path: 'characters',
        title: 'Characters',
        loadComponent: () => import('@features/characters/characters.component').then(m => m.CharactersComponent)
      },
      {
        path: 'locations',
        title: 'Locations',
        loadComponent: () => import('@features/locations/locations.component').then(m => m.LocationsComponent)
      },
      {
        path: 'episodes',
        title: 'Episodes',
        loadComponent: () => import('@features/episodes/episodes.component').then(m => m.EpisodesComponent)
      },
      {
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full'
      }
    ]
  }
];