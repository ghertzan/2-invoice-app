import { Invoice } from "../models/invoice";

export const invoiceData: any = {
    id: 1,
    name: 'Componentes',
    client: {
        name: 'Jonh',
        lastName: 'Doe',
        address: {
            country: 'Argentina',
            city: 'Rosario',
            street: '9 de Julio',
            gate: 3732,
        }  
    },
    company: {
        name: 'Air Computer',
        fiscalNumber: 20303265210,
    },
    items: [
        {
            id: 1,
            description: 'Intel Core i9',
            price: 899,
            qty: 1
        },
        {
            id: 2,
            description: 'Teclado',
            price: 199,
            qty: 5
        },
        {
            id: 3,
            description: "Memoria RAM 32GB",
            price: 699,
            qty: 2
        }
    ]
}