import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducts } from './products';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient ) { }
	private __url = "/assets/datafiles/products.json";


  getProductList():Observable<IProducts[]>{
	  return this.http.get<IProducts[]>(this.__url); 

  }
	
}
