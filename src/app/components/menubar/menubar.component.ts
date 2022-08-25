import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '@modules/primeng/primeng.module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu() {
    this.items = [
      {
        label: 'Characters',
        icon: 'pi pi-fw pi-users',
        routerLink: '/rick-and-morty/characters'
      },
      {
        label: 'Locations',
        icon: 'pi pi-fw pi-home',
        routerLink: '/rick-and-morty/locations'
      },
      {
        label: 'Episodes',
        icon: 'pi pi-fw pi-video',
        routerLink: '/rick-and-morty/episodes'
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
        routerLink: '/'
      },
    ];
  }
}
