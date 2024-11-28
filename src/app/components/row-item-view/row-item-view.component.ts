import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[app-row-item-view]',
  imports: [],
  templateUrl: './row-item-view.component.html',
  styleUrl: './row-item-view.component.css'
})
export class RowItemViewComponent {

  @Input() item: Item = new Item();

  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();

  onRemove(id: number){
    return this.removeEventEmitter.emit(id);
  }
}
