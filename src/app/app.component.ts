import { Component } from '@angular/core';
import { Customer } from './customer-details.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  status=['Order Received','Preparing','Ready To Serve'];

  customerEntries:Customer[]=[
    {customerId:1,customerName:'Robert Downey Jr', numberOfItems:3,totalAmount:650,status:this.status[0],isDisabled:false},
    {customerId:2,customerName:'Cristiano Ronaldo', numberOfItems:2,totalAmount:700,status:this.status[0],isDisabled:false},
    {customerId:3,customerName:'MS Dhoni', numberOfItems:4,totalAmount:800,status:this.status[0],isDisabled:false},
    {customerId:4,customerName:'Bill Gates', numberOfItems:1,totalAmount:235,status:this.status[0],isDisabled:false},
    {customerId:5,customerName:'Elon Musk', numberOfItems:5,totalAmount:1240,status:this.status[0],isDisabled:false}
  ];

}
