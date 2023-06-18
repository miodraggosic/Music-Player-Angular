import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  map,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() searchTerm = new EventEmitter<string>();

  search: FormControl = new FormControl('');

  private unsubscribe$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.onSearchTerm();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private onSearchTerm() {
    this.search.valueChanges
      .pipe(
        debounceTime(2000),
        map((value: string) => value.trim()),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((term) => {
        if (term) {
          this.searchTerm.emit(term);
        }
      });
  }
}
