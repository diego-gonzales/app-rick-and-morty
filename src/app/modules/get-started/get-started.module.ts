import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetStartedRoutingModule } from './get-started-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { PrimengModule } from '@modules/primeng/primeng.module';


@NgModule({
  declarations: [
    WelcomeComponent,
    LobbyComponent
  ],
  imports: [
    CommonModule,
    GetStartedRoutingModule,
    PrimengModule
  ]
})
export class GetStartedModule { }
