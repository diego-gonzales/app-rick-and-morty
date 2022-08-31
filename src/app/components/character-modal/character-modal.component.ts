import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { PrimengModule } from '@modules/primeng/primeng.module';
import { Character } from '@shared/interfaces/characters-response.interface';

@Component({
  selector: 'app-character-modal',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.scss'],
})
export class CharacterModalComponent implements OnInit {
  character!: Character;

  constructor(
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    console.log(this.config);
    this.character = this.config.data.character;
  }
}
