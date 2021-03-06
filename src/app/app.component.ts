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
    {customerId:1,customerName:'Robert Downey Jr', numberOfItems:3,totalAmount:715,status:this.status[0],isDisabled:false,clickCount:0},
    {customerId:2,customerName:'Cristiano Ronaldo', numberOfItems:2,totalAmount:770,status:this.status[0],isDisabled:false,clickCount:0},
    {customerId:3,customerName:'MS Dhoni', numberOfItems:4,totalAmount:880,status:this.status[0],isDisabled:false,clickCount:0},
    {customerId:4,customerName:'Bill Gates', numberOfItems:1,totalAmount:258.5,status:this.status[0],isDisabled:false,clickCount:0},
    {customerId:5,customerName:'Elon Musk', numberOfItems:5,totalAmount:1364,status:this.status[0],isDisabled:false,clickCount:0}
  ];

}
