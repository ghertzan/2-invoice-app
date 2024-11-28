import { routes } from './../app.routes';
import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  
  private invoice: Invoice = invoiceData;
 

  constructor() { }


  getInvoice(): Invoice {
    const total = this.getTotalInvoice();
    return {... this.invoice, total}; // {... } clona la clase y la instancia de nuevo con el parametro adicional
                                      // total en este caso
  }


  getTotalInvoice(): number {
    return this.invoice.items.reduce((accum, item)=> accum + (item.price * item.qty),0);
  }

  removeItem(id: number): Invoice{
    this.invoice.items = this.invoice.items.filter(item => item.id != id);

    return this.getInvoice(); 
  }

  addItem(item: Item): Invoice {
    this.invoice.items.push(item);
    return this.getInvoice();
  }

}
