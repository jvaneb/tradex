import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent{
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;
  @Output() pageChanged = new EventEmitter<number>();
  totalPagesArray: number[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['totalPages']) {
      this.totalPagesArray = Array.from({ length: this.totalPages }, (v, k) => k + 1);
    }
  }

  changePage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.pageChanged.emit(page);
    }
  }
}
