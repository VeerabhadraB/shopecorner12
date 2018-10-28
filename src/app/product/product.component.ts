import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
	public products = [{ "name": "car", "model": "BMW321", "price": "2L" },
		{ "name": "Bycke", "model": "DUCK321", "price": "1L" },
		{ "name": "Car", "model": "BMW008", "price": "2L" },
		{ "name": "Car", "model": "Ranalt321", "price": "4L" }];
	addNewProduct(){
		this.products.push({ "name": "bike", "model": "BMW008", "price": "2L" });
		console.log(this.products);
	}

}
