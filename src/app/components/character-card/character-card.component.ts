import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '@modules/primeng/primeng.module';
import { Character } from '@interfaces/characters-response.interface';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() character!: Character;
  @Output() showMoreEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  showMore() {
    this.showMoreEvent.emit(this.character.id);
  }
}
