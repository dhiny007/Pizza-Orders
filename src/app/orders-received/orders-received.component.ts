import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer-details.model'

@Component({
  selector: 'app-orders-received',
  templateUrl: './orders-received.component.html',
  styleUrls: ['./orders-received.component.css']
})
export class OrdersReceivedComponent implements OnInit {

  // @Input() id:string;
  @Input() customerData:Customer[];
  @Input() itemStatus:Array<string>;
  index:number;
  customer:Customer;
  isSelected=false;
  count=0;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onChangeStatus(customer){
    customer.clickCount++;
    this.count++;
    let status=customer.status;
    this.index=this.itemStatus.indexOf(status);
    console.log(this.index)
    if(this.index<this.itemStatus.length-1){
      customer.status=this.itemStatus[this.index+1];
    }
    if(this.index==this.itemStatus.length-2){
      customer.isDisabled=true;
      console.log(customer);
    }
    console.log(this.customerData)
  }

  onViewDetails(customer,i){
    this.customer=customer;
    this.index=i+1;
    this.isSelected=true;

  }
}
