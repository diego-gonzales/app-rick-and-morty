import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '@modules/primeng/primeng.module';
import { RouterModule } from '@angular/router';
import { HomeService } from '@core/services/home.service';
import { Resource } from '@shared/interfaces/resource.interface';
import { ResourceCardComponent } from './components/resource-card/resource-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PrimengModule, RouterModule, ResourceCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  resources: Resource[] = [];

  constructor(
    private _homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getResources();
  }

  getResources() {
    this._homeService.getRickAndMortyResources()
      .subscribe(resp => {
        this.resources = resp;
      })
  }
}
