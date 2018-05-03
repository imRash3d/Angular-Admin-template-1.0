import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Order } from '../../models/oder.model';
import { OrderService } from '../../services/order.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  priceSort = false;
  qtySort = false;
  Orders: Order[] = [];
  tempOrder: Order[] = [];
  subscription: Subscription
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getOrder();

  }
  getOrder() {
    let order = new Object();
    this.subscription = this.orderService.getOrder()
      .subscribe(res => {
        for (let key in res) {
          order = res[key];
          order['$key'] = key;

          this.Orders.push(order as Order)
        }
      })

    this.tempOrder = this.Orders;
  }

  //SELECT CATEGORY 

  SelectCat(e) {
    if (e.target.value != '') {
      this.tempOrder = this.Orders.filter(item => {
        if (item.category == e.target.value) return 1;
      })
    }
    else this.tempOrder = this.Orders;

  }

  sortPrice() {
    if (!this.priceSort) {
      this.tempOrder = this.Orders.sort(function (a, b): any {
        if (a.price < b.price) {
          return 1;
        }
      });
      this.priceSort = true;
    }
    else {
      this.tempOrder = this.Orders.sort(function (a, b): any {
        if (a.price > b.price) {
          return 1;
        }
      });
      this.priceSort = false;
    }
  }


  // SELECT DELIVERY STATUS 

  SelectStatus(e) {
    if (e.target.value != '') {
      this.tempOrder = this.Orders.filter(item => {
        if (item.status == e.target.value) return 1;
      })
    }
    else {
      this.tempOrder = this.Orders
    }
  }


  sortQuantity() {
    if (!this.qtySort) {
      this.tempOrder = this.Orders.sort(function (q1, q2): any {
        if (q1.quantity > q2.quantity) return 1
      });
      this.qtySort = true;
    }
    else {
      this.tempOrder = this.Orders.sort(function (q1, q2): any {
        if (q1.quantity < q2.quantity) return 1;
      });
      this.qtySort = false;
    }
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
