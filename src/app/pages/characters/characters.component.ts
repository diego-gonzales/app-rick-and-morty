import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from '@services/characters.service';
import {
  Character,
  Info,
} from 'src/app/interfaces/characters-response.interface';
import { CharacterCardComponent } from '@components/character-card/character-card.component';
import { PaginatorComponent } from '@components/paginator/paginator.component';
import { DialogService } from 'primeng/dynamicdialog';
import { CharacterModalComponent } from '@components/character-modal/character-modal.component';
import { PrimengModule } from '@modules/primeng/primeng.module';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CommonModule,
    CharacterCardComponent,
    PaginatorComponent,
    PrimengModule,
  ],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  providers: [DialogService],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  info!: Info;

  constructor(
    private _charactersService: CharactersService,
    private _dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(page: number = 1) {
    this._charactersService.getCharacters(page).subscribe((resp) => {
      this.info = resp.info;
      this.characters = resp.results;
    });
  }

  getCharacter(characterID: number) {
    this._charactersService.getCharacter(characterID).subscribe((resp) => {
      this.handleCharacterModal(resp);
    });
  }

  handleCharacterModal(character: Character) {
    this._dialogService.open(CharacterModalComponent, {
      header: 'Character Detail',
      styleClass: 'w-11 md:w-8 lg:w-7 xl:w-6',
      contentStyle: { 'max-height': '500px', overflow: 'hidden' },
      dismissableMask: true,
      data: { character },
    });
  }

  goToPage(page: number) {
    this.getCharacters(page);
  }
}
