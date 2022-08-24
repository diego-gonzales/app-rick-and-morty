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
        loadComponent: () => import('@modules/characters/characters.component').then(m => m.CharactersComponent)
      },
      {
        path: 'locations',
        title: 'Locations',
        loadComponent: () => import('@modules/locations/locations.component').then(m => m.LocationsComponent)
      },
      {
        path: 'episodes',
        title: 'Episodes',
        loadComponent: () => import('@modules/episodes/episodes.component').then(m => m.EpisodesComponent)
      },
      {
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full'
      }
    ]
  }
];