import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '@modules/primeng/primeng.module';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() rows: number = 20;
  @Input() totalRecords!: number;
  @Output() goToPage: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  paginate(event: any) {
    this.goToPage.emit(event.page + 1)
  }
}
