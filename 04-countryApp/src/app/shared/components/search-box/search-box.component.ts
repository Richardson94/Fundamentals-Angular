import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent {
  @ViewChild('txtSearchInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string = '';

  @Output() search = new EventEmitter();

  onValue(): void {
    const text = this.tagInput.nativeElement.value;
    this.search.emit(text);
  }
}
