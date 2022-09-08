import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { PrimengModule } from '@modules/primeng/primeng.module';
import { Character } from '@interfaces/characters-response.interface';
import { GenderPipe } from '@pipes/gender.pipe';

@Component({
  selector: 'app-character-modal',
  standalone: true,
  imports: [CommonModule, PrimengModule, GenderPipe],
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
