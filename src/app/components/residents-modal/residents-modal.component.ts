import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { PrimengModule } from '@modules/primeng/primeng.module';
import { CharactersService } from '@services/characters.service';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-residents-modal',
  standalone: true,
  imports: [CommonModule, PrimengModule, ScrollingModule],
  templateUrl: './residents-modal.component.html',
  styleUrls: ['./residents-modal.component.scss']
})
export class ResidentsModalComponent implements OnInit {

  constructor(
    public config: DynamicDialogConfig,
    private _charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    console.log(this.config);
  }


}
