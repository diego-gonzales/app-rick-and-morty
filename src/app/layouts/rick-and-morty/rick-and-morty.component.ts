import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenubarComponent } from '@components/menubar/menubar.component';

@Component({
  selector: 'app-rick-and-morty',
  standalone: true,
  imports: [CommonModule, RouterModule, MenubarComponent],
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss']
})
export class RickAndMortyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
