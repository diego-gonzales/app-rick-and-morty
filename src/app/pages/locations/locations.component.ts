import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '@modules/primeng/primeng.module';
import { LocationsService } from '@services/locations.service';
import { LazyLoadEvent } from 'primeng/api';
import { Location } from '@interfaces/locations-response.interface';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  locations!: Location[];
  totalRecords!: number;
  cols!: any[];

  constructor(
    private _locationService: LocationsService
  ) {}

  ngOnInit(): void {}

  loadLocations(event: LazyLoadEvent) {
    console.log(event);
    let page = event.first! / 20 + 1;
    let name = event.filters?.['name']?.value ?? '';
    let type = event.filters?.['type']?.value ?? '';
    let dimension = event.filters?.['dimension']?.value ?? '';

    console.log({ name, type, dimension });

    this._locationService.getLocations(page, name, type, dimension).subscribe((resp) => {
      this.locations = resp.results;
      this.totalRecords = resp.info.count;
    });
  }

  onPage(event: any) {
    console.log(event);
  }
}
