import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '@modules/primeng/primeng.module';
import { Resource } from '@interfaces/resource.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resource-card',
  standalone: true,
  imports: [CommonModule, PrimengModule, RouterModule],
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss']
})
export class ResourceCardComponent implements OnInit {

  @Input() resource!: Resource;

  constructor() { }

  ngOnInit(): void {
  }

}
