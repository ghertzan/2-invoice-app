import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { ClientViewComponent } from '../client-view/client-view.component';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsViewComponent } from '../list-items-view/list-items-view.component';
import { RowItemViewComponent } from '../row-item-view/row-item-view.component';
import { TotalComponent } from '../total/total.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { Item } from '../../models/item';

@Component({
  selector: 'app-invoice',
  imports: [ClientViewComponent, 
    InvoiceViewComponent, 
    CompanyViewComponent, 
    ListItemsViewComponent,
    TotalComponent,
    FormItemComponent],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit{


  //Para poder inyectar el servicio en el componenete hay que crear un constructor en la clase.
  //El modificador "private" en la signatura del constructor DEBE ir asi en la inyección de dependencias
  // la variable service queda declarada para toda la clase.

  public invoice!: Invoice;
  constructor (private service: InvoiceService) {

  }
  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }


  removeItem(id: number){

    this.invoice = this.service.removeItem(id);
  }

  addItem(item: Item){
    this.invoice = this.service.addItem(item);
  }
}
