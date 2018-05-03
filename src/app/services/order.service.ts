import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Order } from "../models/oder.model";

@Injectable()

export class OrderService {
    constructor(private http: HttpClient) { }
    private Root_Url = "https://orderdatabase-efcb6.firebaseio.com/";

orders:Order[]=[];

    saveOrder(order) {
        this.http.post(this.Root_Url + "orders.json", order)
        .subscribe(
          //  res => console.log(res)
        )
    }

    getOrder (){
   
     return this.http.get(this.Root_Url+"orders.json");
    
 
     


    
    
   
      
    }

    editOrder (order,key){
        this.http.put(this.Root_Url+"orders/"+key+'.json',order)
        .subscribe(
            res=>console.log(res),
            err=>console.log(err)
    
    )
    }


    deleteOrder(key) {
        this.http.delete(this.Root_Url+'orders/'+key+'.json').subscribe(
            res=>console.log(res)
        )
    }


}