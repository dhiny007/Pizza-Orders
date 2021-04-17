import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer-details.model'

@Component({
  selector: 'app-orders-received',
  templateUrl: './orders-received.component.html',
  styleUrls: ['./orders-received.component.css']
})
export class OrdersReceivedComponent implements OnInit {

  @Input() id:string;
  @Input() customerData:Customer;
  selected=false;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onChangeStatus(){

  }

  onViewDetails(){
    this.selected=!this.selected;
    console.log(this.selected)
    if(this.selected==true){
      this.router.navigate(['id']);
    }
    else{
      this.router.navigate(['']);
    }
  }
}
