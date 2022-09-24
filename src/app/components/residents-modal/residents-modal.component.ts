import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { PrimengModule } from '@modules/primeng/primeng.module';
import { CharactersService } from '@services/characters.service';
import { LazyLoadEvent } from 'primeng/api';

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
    private _charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.residents = this.config.data.residents;
    this.virtualResidents =  Array.from({length: this.residents.length});
  }

  loadResidentsLazy(event: LazyLoadEvent) {
    let loadedResidents = this.residents.slice(event.first, (event.first! + event.rows!));
    this._charactersService.getMultipleCharacters(loadedResidents)
      .subscribe(resp => {
        Array.prototype.splice.apply(this.virtualResidents, [event.first!, event.rows!, ...resp]);
        event.forceUpdate!();
      });
  }
}
