import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from '@services/characters.service';
import {
  Character,
  Info,
} from '@shared/interfaces/characters-response.interface';
import { CharacterCardComponent } from '@components/character-card/character-card.component';
import { PaginatorComponent } from '@components/paginator/paginator.component';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent, PaginatorComponent],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  info!: Info;

  constructor(
    private _charactersService: CharactersService
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

  goToPage(page: number) {
    this.getCharacters(page);
  }
}
