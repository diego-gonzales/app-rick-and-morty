import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { PrimengModule } from '@modules/primeng/primeng.module';
import { Character } from '@shared/interfaces/characters-response.interface';
import { GenderPipe } from '@shared/pipes/gender.pipe';
import { StatusPipe } from '@shared/pipes/status.pipe';
import { SpeciesPipe } from '@shared/pipes/species.pipe';

@Component({
  selector: 'app-character-modal',
  standalone: true,
  imports: [CommonModule, PrimengModule, GenderPipe, StatusPipe, SpeciesPipe],
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

  get article(): string {
    const firstLetter = this.character.species.charAt(0).toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(firstLetter) ? 'an' : 'a';
  }
}
