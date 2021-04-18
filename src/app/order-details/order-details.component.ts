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

  // statusIndex(){
  //   this.count=0;
  //   this.statusTracker.push(this.customer.status);
  //   console.log(this.statusTracker,'hehehe');
  //   if(this.statusArray.indexOf(this.customer.status)>=0){
  //     this.count++;
  //     if(this.statusArray.indexOf(this.customer.status)>=1){
  //       this.count++;
  //       if(this.statusArray.indexOf(this.customer.status)>=2){
  //         this.count++;
  //         }
  //     }
  //   }
  //   console.log(this.count,'COUNT');
  // }

  ngOnChanges(): void {
    if(this.customer){
      console.log(this.customer.customerId);
      for(let i=0;i<this.items.length;i++){
        if(this.customer.customerId==this.items[i].customerId){
          this.statusTracker.push(this.customer.status);
          console.log(this.statusTracker,'ROFL');
          console.log(this.items[i]);
          this.totalAmount=0;
          this.currentItem=this.items[i].orderedItems;
          this.address=this.items[i].deliveryAddress;
          for(let j=0;j<this.items[i].orderedItems.length;j++){
            this.totalAmount+=this.items[i].orderedItems[j].price;
            console.log(this.totalAmount,this.items[i].orderedItems[j].price)
          }
        }
        else{
          this.statusTracker=[];
        }

      }
    }
  }
}
