import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  status=['Order Received','Preparing','Ready To Serve'];

  customerEntries=[
    {customerId:1,customerName:'Robert Downey Jr', numberOfItems:3,totalAmount:600,status:this.status[0]},
    {customerId:2,customerName:'Cristiano Ronaldo', numberOfItems:2,totalAmount:400,status:this.status[0]},
    {customerId:3,customerName:'MS Dhoni', numberOfItems:4,totalAmount:700,status:this.status[0]},
    {customerId:4,customerName:'Bill Gates', numberOfItems:1,totalAmount:200,status:this.status[0]},
    {customerId:5,customerName:'Elon Musk', numberOfItems:5,totalAmount:1200,status:this.status[0]}
  ];

}
