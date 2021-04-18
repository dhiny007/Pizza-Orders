import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../customer-details.model'

@Component({
  selector: 'app-orders-received',
  templateUrl: './orders-received.component.html',
  styleUrls: ['./orders-received.component.css']
})
export class OrdersReceivedComponent implements OnInit {

  @Input() customerData:Customer[];
  @Input() itemStatus:Array<string>;
  index:number;
  customer:Customer;
  customerId:number;


  constructor() { }

  ngOnInit(): void {
  }

/* Fetch the current customer details to pass it to the order details component
   and identify the current customer based on the customer id so that we
   can use it to highlight the customer entry on the frontend. */
  viewMemberDetails(customer){
    this.customer=customer;
    this.customerId=customer.customerId;
  }
}
