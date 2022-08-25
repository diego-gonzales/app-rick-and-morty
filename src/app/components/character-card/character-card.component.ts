import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '@modules/primeng/primeng.module';
import { Character } from '@shared/interfaces/characters-response.interface';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() character!: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
