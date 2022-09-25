import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '@modules/primeng/primeng.module';
import { Episode } from '@shared/interfaces/episodes-response.interface';
import { EpisodesService } from '@services/episodes.service';
import { DialogService } from 'primeng/dynamicdialog';
import { LazyLoadEvent } from 'primeng/api';
import { ResidentsModalComponent } from '@components/residents-modal/residents-modal.component';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
  providers: [DialogService]
})
export class EpisodesComponent implements OnInit {
  episodes!: Episode[];
  totalRecords!: number;

  constructor(
    private _episodesService: EpisodesService,
    private _dialogService: DialogService
  ) {}

  ngOnInit(): void {}

  loadEpisodes(event: LazyLoadEvent) {
    let page = event.first! / 20 + 1;
    let episode = event.filters?.['episode']?.value ?? '';
    let name = event.filters?.['name']?.value ?? '';

    this._episodesService.getEpisodes(page, episode, name).subscribe((resp) => {
      this.episodes = resp.results;
      this.totalRecords = resp.info.count;
    });
  }

  showCharacters(episode: Episode) {
    this._dialogService.open(ResidentsModalComponent, {
      header: `Characters in the episode '${episode.name}'`,
      styleClass: 'w-11 md:w-8 lg:w-7 xl:w-6',
      contentStyle: { 'max-height': '500px', overflow: 'hidden' },
      dismissableMask: true,
      data: { residents: episode.characters },
    });
  }

}
