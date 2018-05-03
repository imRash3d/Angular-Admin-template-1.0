import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './admin/products/products.component';
import { ProductListComponent } from './admin/products/product-list/product-list.component';
import { AddproductComponent } from './admin/products/addproduct/addproduct.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OrderService } from './services/order.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';




const routing: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'product', component: ProductsComponent },
      { path: 'add', component: AddproductComponent }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProductsComponent,
    ProductListComponent,
    AddproductComponent,
    DashboardComponent,

  ],
  imports: [
    RouterModule.forRoot(routing),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [
    OrderService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
