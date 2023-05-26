import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList: Character[] = [];

  onDeleteCharacter(index: number): void {
    this.onDelete.emit(index);
  }
}
