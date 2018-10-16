import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable }from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Promotion } from '../../shared/promotion';
import { dbURL } from '../../shared/dburl';
import { Dish } from '../../shared/dish';
/*
  Generated class for the PromotionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PromotionProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PromotionProvider Provider');
  }

  getPromotions(): Observable<Promotion[]>{
  	return this.http.get<Promotion[]>(dbURL + 'promotion').map(
  		res => res);
  }

  getFeaturedPromotion(): Observable<Promotion>{
	return this.http.get<Dish>(dbURL + 'promotions?featured=true').map( 
res => res
);

}

}
