import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoice',
  imports: [],
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
}
