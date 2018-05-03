import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../models/oder.model';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input('orders') orders: Order[] = [];
  @Output() sortPrice = new EventEmitter();
  @Output() sortQuantity = new EventEmitter();
  modalRef: BsModalRef;
  constructor(
private  route:Router,
private modalService: BsModalService,
private Orderservice:OrderService
  ) { }

  ngOnInit() {

  }

  price() {
    this.sortPrice.emit()
  }

  quantity() {
    this.sortQuantity.emit();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal(){
    this.modalRef.hide();
 
  }
  delete(deleteTemp){
   
    this.modalRef= this.modalService.show(deleteTemp)
  }

  deleteNo(){
    this.modalRef.hide();
  }
  deleteOk(key){
    this.Orderservice.deleteOrder(key);
    this.modalRef.hide();
  }

}
