import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.css'
})
export class FormItemComponent {


  @Output() addItemEventEmitter = new EventEmitter();

  private counterId = 4;

  item: any = {
    description: '',
    price: '',
    qty: ''
  }

  onSubmit(): void{
    this.addItemEventEmitter.emit({id: this.counterId, ...this.item});
    this.counterId ++;

    this.item = {
      description: '',
      price: '',
      qty: ''
    }; 
  }

}
