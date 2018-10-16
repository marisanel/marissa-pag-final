import { Component } from '@angular/core';
import { LeaderProvider } from '../../providers/leader/leader';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Leader } from '../../shared/leader';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

leaders:Leader[];


  constructor(public navCtrl: NavController, public navParams: NavParams,private leaderService: LeaderProvider) {
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  ngOnInit(){
 

  this.getLeaders();


}
getLeaders(){
    this.leaderService
    .getLeaders()
    .subscribe(
      response =>{
        this.leaders = response;
        console.log(this.leaders);
      },
      error => {
        console.log(error);
      }
      );
  }
}
