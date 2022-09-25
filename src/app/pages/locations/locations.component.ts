import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '@modules/primeng/primeng.module';
import { LocationsService } from '@services/locations.service';
import { LazyLoadEvent } from 'primeng/api';
import { Location } from '@shared/interfaces/locations-response.interface';
import { DialogService } from 'primeng/dynamicdialog';
import { ResidentsModalComponent } from '@components/residents-modal/residents-modal.component';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  providers: [DialogService]
})
export class LocationsComponent implements OnInit {
  locations!: Location[];
  totalRecords!: number;
  cols!: any[];

  constructor(
    private _locationService: LocationsService,
    private _dialogService: DialogService
  ) {}

  ngOnInit(): void {}

  loadLocations(event: LazyLoadEvent) {
    let page = event.first! / 20 + 1;
    let name = event.filters?.['name']?.value ?? '';
    let type = event.filters?.['type']?.value ?? '';
    let dimension = event.filters?.['dimension']?.value ?? '';

    this._locationService.getLocations(page, name, type, dimension).subscribe((resp) => {
      this.locations = resp.results;
      this.totalRecords = resp.info.count;
    });
  }

  showResidents(location: Location) {
    this._dialogService.open(ResidentsModalComponent, {
      header: `Resident of ${location.name}`,
      styleClass: 'w-11 md:w-8 lg:w-7 xl:w-6',
      contentStyle: { 'max-height': '500px', overflow: 'hidden' },
      dismissableMask: true,
      data: { residents: location.residents },
    });
  }
}
