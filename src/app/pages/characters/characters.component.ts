import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from '@services/characters.service';
import {
  Character,
  InfoCharacters,
} from '@shared/interfaces/characters-response.interface';
import { CharacterCardComponent } from '@components/character-card/character-card.component';
import { PaginatorComponent } from '@components/paginator/paginator.component';
import { DialogService } from 'primeng/dynamicdialog';
import { CharacterModalComponent } from '@components/character-modal/character-modal.component';
import { PrimengModule } from '@modules/primeng/primeng.module';
import { SharingService } from '@services/sharing.service';
import { filter, Subscription } from 'rxjs';

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
export class CharactersComponent implements OnInit, OnDestroy {
  characters: Character[] = [];
  info!: InfoCharacters;
  keywordToSearch$!: Subscription;
  keywordToSearch: string = '';

  constructor(
    private _charactersService: CharactersService,
    private _dialogService: DialogService,
    private _sharingService: SharingService
  ) {
    _sharingService.showSearchInput.next(true);
  }

  ngOnInit(): void {
    this.getCharacters();
    this.searchCharacter();
  }

  searchCharacter() {
    this.keywordToSearch$ = this._sharingService.keywordToSearch$
      .pipe(filter(item => item !== null))
      .subscribe(keyword => {
        this.keywordToSearch = keyword!;
        this.getCharacters()
      });
  }

  getCharacters(page: number = 1) {
    this._charactersService.getCharacters(page, this.keywordToSearch)
      .subscribe((resp) => {
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

  ngOnDestroy(): void {
    this.keywordToSearch$.unsubscribe();
    this._sharingService.keywordToSearch.next(null);
    this._sharingService.showSearchInput.next(false);
  }
}
