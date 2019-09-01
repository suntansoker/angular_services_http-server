import {ProdService} from './prod.service';
import { Component, OnInit,OnDestroy, Input, EventEmitter, Output } from "@angular/core";
import { Product } from './product';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'prod-component',
    templateUrl: './prod.component.html',
    styleUrls:['./prod.component.css']
})

export class ProdComponent implements OnInit{
    products: Product[];
    lastViewedName: any;
  
    constructor(private _prodService: ProdService, private _route: ActivatedRoute) {      
    }

    name: String = '';
    quantity: number = 1;

    ngOnInit(){
      this._route.paramMap.forEach((params: Params) => {
        this.lastViewedName = params.get('name');
      });
        this.getProducts();
      }
  
    getProducts():void{
      this._prodService.getProdList().subscribe(
        (products: any) => this.products=products,
        err => console.log(err)
      );
  
    }

    addProduct() {
        this._prodService.addProduct(this.name,this.quantity).subscribe(
          (data:any) => this.getProducts()
        );
      }
      
    @Output('addedNameQuantityEvent')
    addedEvent = new EventEmitter();

    addEvent(){
        this.addedEvent.emit([this.name, this.quantity]);
    }

}