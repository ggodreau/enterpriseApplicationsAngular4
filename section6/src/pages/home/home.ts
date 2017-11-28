import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AppVersion } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    platform: Platform) {
      platform.ready().then(() => {
        AppVersion.getVersionNumber().then(v => console.log('app version is:', v));
      }); 
  }

}
