import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'lobby',
        component: LobbyComponent
      },
      {
        path: '**',
        redirectTo: 'welcome'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetStartedRoutingModule { }
