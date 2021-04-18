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

  /*Fetch the current customer entry and pass it on to the order details component for rendering the order details of the customer
    Also we set the index of the current element index so that we can use the index to highlight the selected customer on frontend*/
  viewMemberDetails(customer,i){
    this.customer=customer;
    this.customerId=customer.customerId;
  }
}
