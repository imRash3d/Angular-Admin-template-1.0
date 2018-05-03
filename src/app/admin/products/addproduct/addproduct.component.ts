import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../models/oder.model';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
@Input() editMode;
@Input('Singleorder') Singleorder:Order=new Order();
@Output() closeModal= new EventEmitter();

  constructor(
    private OrderService: OrderService
  ) { }

  ngOnInit() {
   
  }


  SaveOrder(form: NgForm) {
    var order = {
      product_name: form.value.product_name,
      dealer_name: form.value.dealer_name,
      quantity: form.value.quantity,
      price: form.value.price,
      address: form.value.address,
      category: form.value.category,
    
    }

    
    if(this.editMode){
      order["status"]=form.value.status;
     this.OrderService.editOrder(order,this.Singleorder.$key);
     this.closeModal.emit();
    }
    else {
      order["status"]="pending";
      this.OrderService.saveOrder(order);
      form.reset();
    }


 

  }
}
