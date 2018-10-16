import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DishProvider } from '../../providers/dish/dish';
import { LeaderProvider } from '../../providers/leader/leader';
import { PromotionProvider } from '../../providers/promotion/promotion';

import { Dish } from '../../shared/dish';
import { Leader } from '../../shared/leader';
import { Promotion } from '../../shared/promotion';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
	dish:Dish;
	leader:Leader;
	promotion:Promotion;


  constructor(public navCtrl: NavController, 
    private dishService: DishProvider,
  	private leaderService: LeaderProvider,
  	private promotionService: PromotionProvider,
  	@Inject('DbURL') private DbURL
  	){}

ngOnInit(){
  this.getFeaturedDish();
  //this.getFeaturedPromotion();

  this.getFeaturedLeader();


}


getFeaturedDish(){
      this.dishService
      .getFeaturedDish()
      .subscribe(
        response=>{
          this.dish=response[0];
          console.log(this.dish);
        });
    }

getFeaturedPromotion(){
this.promotionService
.getFeaturedPromotion()
.subscribe(
  response =>{
    this.promotion = response[0];
    console.log(this.promotion);
  });

  }
  getFeaturedLeader(){
    this.leaderService
    .getFeaturedLeader()
    .subscribe(
      response =>{
        this.leader = response[0];
        console.log(this.leader);
      },
      error => {
        console.log(error);
      }
      );
  }
}




