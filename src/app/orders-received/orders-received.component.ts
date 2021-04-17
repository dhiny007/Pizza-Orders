import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-received',
  templateUrl: './orders-received.component.html',
  styleUrls: ['./orders-received.component.css']
})
export class OrdersReceivedComponent implements OnInit {

  id:string;

  customerData=[
    {customerName:'Robert Downey Jr', numberOfItems:3,totalAmount:600,status:status[0]},
    {customerName:'Cristiano Ronaldo', numberOfItems:2,totalAmount:400,status:status[0]},
    {customerName:'MS Dhoni', numberOfItems:4,totalAmount:700,status:status[0]},
    {customerName:'Bill Gates', numberOfItems:1,totalAmount:200,status:status[0]},
    {customerName:'Elon Musk', numberOfItems:5,totalAmount:1200,status:status[0]}
  ];

  status=['Order Received','Preparing','Ready To Serve']

  constructor() { }

  ngOnInit(): void {
  }

}
