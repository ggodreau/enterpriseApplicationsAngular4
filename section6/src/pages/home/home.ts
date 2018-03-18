import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
//import { AppVersion } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //contacts;

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private geolocation: Geolocation,
    platform: Platform) {

      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }

      platform.ready().then(() => {
    //    Concacts.find(['displayName']).then(contacts => this.contacts = contacts);
//        AppVersion.getVersionNumber().then(v => console.log('app version is:', v));
        console.log('app is ready!');

        this.camera.getPicture(options).then((imageData) => {
         // imageData is either a base64 encoded string or a file URI
         // If it's base64:
         //let base64Image = 'data:image/jpeg;base64,' + imageData;
         console.log("IMAGE", imageData);
        }, (err) => {
          console.log('camera error');
         // Handle error
        });

        // GEOLOCATION
        this.geolocation.getCurrentPosition().then((resp) => {
                console.log(resp.coords.latitude);
                console.log(resp.coords.longitude);
            }).catch((error) => {
                console.log('Error getting location', error);
        });
        
        let watch = this.geolocation.watchPosition();
          watch.subscribe((data) => {
                // data can be a set of coordinates, or an error (if an error occurred).
                // data.coords.latitude
                // data.coords.longitude
               console.log('watch: ', data); 
                });

        });
  }

}
