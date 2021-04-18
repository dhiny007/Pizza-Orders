import { AfterViewChecked, Component, Input, OnChanges } from '@angular/core';
import { Customer } from '../customer-details.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnChanges {
  @Input() customer:Customer;
  @Input() statusArray:Array<string>;
  statusTracker=[];
  currentItem:Object;
  totalAmount=0;
  address:string;
  progressValue=50;
  count=0;
  nextStatus='Preparing';
  status:string;
  tax:number;

  items=[
    {customerId:1,orderedItems:[
      {itemName:"Margharita",price:150},
      {itemName:"Peppy Paneer",price:200},
      {itemName:"Farm House",price:300}
    ],
    deliveryAddress:"Cecilia Chapman 711-2880 Nulla St.Mankato Mississippi 96522 (257) 563-7401"
    },
    {customerId:2,orderedItems:[
      {itemName:"Mexican Green Wave",price:400},
      {itemName:"Veg Extravaganza",price:300}
    ],
    deliveryAddress:"Ina Moran P.O. Box 929 4189 Nunc Road Lebanon KY 69409 (389) 737-2852"
    },
    {customerId:3,orderedItems:[
      {itemName:"Peppy Paneer",price:150},
      {itemName:"Paneer Makhani",price:250},
      {itemName:"Veggie Paradise",price:250},
      {itemName:"Margharita",price:150}
    ],
    deliveryAddress:"Calista Wise 7292 Dictum Av. San Antonio MI 47096 (492) 709-6392"
  },
  {customerId:4,orderedItems:[
    {itemName:"Fresh Veggie",price:235}
  ],
  deliveryAddress:"Forrest Ray 191-103 Integer Rd. Corona New Mexico 08219 (404) 960-3807"
  },
  {customerId:5,orderedItems:[
    {itemName:"Cheese N Corn",price:290},
    {itemName:"Peppy Panneer",price:150},
    {itemName:"Burger Pizza- Premium Veg",price:400},
    {itemName:"Margharita",price:150},
    {itemName:"Veggie Paradise",price:250}
  ],
  deliveryAddress:"Lawrence Moreno 935-9940 Tortor. Street Santa Rosa MN 98804 (684) 579-1879"
  }];

  constructor() {
  }

  //On Click of the Change Status button, we get the previous delivery status and update it to the next status
  changeStatus(status){
    //Incrementing clickCount value which in turn keeps the progress bar updated with the correct status.
    this.customer.clickCount++;
    status=this.nextStatus;
    let index=this.statusArray.indexOf(status);
    if(index<this.statusArray.length-1){
      this.nextStatus=this.statusArray[index+1];
      this.customer.status=status;
    }
    /*If the current status already is the final status, then disable the Mark button and also
     update the customer status to "Ready to Serve" */
    if(index==this.statusArray.length-1){
      this.customer.status=status;
      this.customer.isDisabled=true;
    }
    this.status=this.nextStatus;
    return this.nextStatus;
  }

  ngOnChanges(): void {
    this.totalAmount=0;
    if(this.customer){
      /*When we switch to some other customer view and come back to this customer,
      we preserve the delivery state which was present for this customer*/
      if(this.customer.status==this.statusArray[this.statusArray.length-1]){
        this.nextStatus=this.customer.status;
      }
      else{
        let index=this.statusArray.indexOf(this.customer.status);
        this.nextStatus=this.statusArray[index+1];
      }
      /*Fetch all items that the current customer has ordered and calculate the total amount.
      Also set the customer's delivery address*/
      for(let i=0;i<this.items.length;i++){
        if(this.customer.customerId==this.items[i].customerId){
          this.currentItem=this.items[i].orderedItems;
          this.address=this.items[i].deliveryAddress;
          for(let j=0;j<this.items[i].orderedItems.length;j++){
            this.totalAmount+=this.items[i].orderedItems[j].price;
          }
          this.tax=this.totalAmount*0.1;
          this.totalAmount=this.totalAmount + this.tax;
        }

      }
    }
  }
}
