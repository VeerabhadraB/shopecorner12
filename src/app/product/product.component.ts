import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	constructor(private __productList: ProductsService) { }
	public products = [];
	ngOnInit() {
		this.__productList.getProductList().subscribe(data => this.products = data);
		console.log(this.products);
  }
	// public products = [{ "name": "car", "model": "BMW321", "price": "2L" },
	// { "name": "Bycke", "model": "DUCK321", "price": "1L" },
	// { "name": "Car", "model": "BMW008", "price": "2L" },
	// { "name": "Car", "model": "Ranalt321", "price": "4L" }];
	

}
