import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  index:string;
  items:[
    {customerId:1,orderedItems:[
      {itemName:"Margharita",price:150},
      {itemName:"Peppy Paneer",price:200},
      {itemName:"Farm House",price:300}
    ]},
    {customerId:2,orderedItems:[
      {itemName:"Margharita",price:150},
      {itemName:"Mexican Green Wave",price:200},
      {itemName:"Veg Extravaganza",price:300}
    ]},
    {customerId:3,orderedItems:[
      {itemName:"Peppy Paneer",price:150},
      {itemName:"Paneer Makhani",price:200},
      {itemName:"Veggie Paradise",price:300}
    ]},
    {customerId:4,orderedItems:[
      {itemName:"Fresh Veggie",price:150},
      {itemName:"Indi Tandoori Paneer",price:200},
      {itemName:"Farm House",price:300}
    ]},
    {customerId:5,orderedItems:[
      {itemName:"Cheese N Corn",price:150},
      {itemName:"Peppy Panneer",price:200},
      {itemName:"Burger Pizza- Premium Veg",price:300}
    ]},
  ]

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.index=params['id'];
    })
  }


}
