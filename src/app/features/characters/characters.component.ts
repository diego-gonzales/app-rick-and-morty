import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from '@services/characters.service';
import { Character } from '@shared/interfaces/characters-response.interface';
import { CharacterCardComponent } from '@components/character-card/character-card.component';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];

  constructor(
    private _charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this._charactersService.getCharacters()
      .subscribe(resp => {
        this.characters = resp.results;
      })
  }
}
