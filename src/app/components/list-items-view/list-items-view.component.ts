import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemViewComponent } from '../row-item-view/row-item-view.component';

@Component({
  selector: 'app-list-items-view',
  imports: [RowItemViewComponent],
  templateUrl: './list-items-view.component.html',
  styleUrl: './list-items-view.component.css'
})
export class ListItemsViewComponent {

  @Input() items: Item[] =[];

  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();
  
  onRemove(id: number){

    return this.removeEventEmitter.emit(id);
  }
}
