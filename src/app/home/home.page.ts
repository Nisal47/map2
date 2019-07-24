import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data:string="";
  constructor(private geolocation:Geolocation) {}

  locate(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude

      this.data = "Lat:"+ resp.coords.latitude+<br>+ "Lng" + resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
