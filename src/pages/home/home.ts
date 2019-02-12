import { Component } from '@angular/core';
// import {Platform} from 'ionic-angular';

import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isOn:boolean;

  constructor(private flash:Flashlight) {
  
  }

  turnOn(){
    this.flash.switchOn();

  }

  turnOff(){
    this.flash.switchOff();

  }

  flashLightStatus(){
    this.isOn=this.flash.isSwitchedOn();
  }

}
