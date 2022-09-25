import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { PrimengModule } from '@modules/primeng/primeng.module';
import { CharactersService } from '@services/characters.service';
import { LazyLoadEvent } from 'primeng/api';
import { Character } from '@shared/interfaces/characters-response.interface';
import { CharacterModalComponent } from '@components/character-modal/character-modal.component';

@Component({
  selector: 'app-residents-modal',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  templateUrl: './residents-modal.component.html',
  styleUrls: ['./residents-modal.component.scss']
})
export class ResidentsModalComponent implements OnInit {
  virtualResidents!: any[];
  residents: any[] = [];

  constructor(
    public config: DynamicDialogConfig,
    private _charactersService: CharactersService,
    private _dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.residents = this.config.data.residents;
    this.virtualResidents =  Array.from({length: this.residents.length});
  }

  loadResidentsLazy(event: LazyLoadEvent) {
    const isCompleted = this.virtualResidents.every(item => item !== undefined);
    if (isCompleted) return;

    let loadedResidents = this.residents.slice(event.first, (event.first! + event.rows!));
    this._charactersService.getMultipleCharacters(loadedResidents)
      .subscribe(resp => {
        Array.prototype.splice.apply(this.virtualResidents, [event.first!, event.rows!, ...resp]);
        event.forceUpdate!();
      });
  }

  showMore(resident: Character) {
    this._dialogService.open(CharacterModalComponent, {
      header: 'Character Detail',
      styleClass: 'w-11 md:w-8 lg:w-7 xl:w-6',
      contentStyle: { 'max-height': '500px', overflow: 'hidden' },
      dismissableMask: true,
      data: { character: resident },
    });
  }
}
