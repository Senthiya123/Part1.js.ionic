import { Component } from '@angular/core';

import { Flashlight } from '@ionic-native/flashlight/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    isOn: boolean = true;

    song: number = 1;

    song1 : boolean = true;

    constructor(private flashlight: Flashlight, private nativeAudio: NativeAudio) {
        this.nativeAudio.preloadSimple('s1', 'assets/audio/s1.mp3');
        this.nativeAudio.preloadSimple('s2', 'assets/audio/s2.mp3');
         
    }
    
    toggleFlash() {
        if (this.flashlight.isSwitchedOn()) {

            this.isOn = false;
            this.flashlight.switchOff();
            
        }
        else {
            
            this.flashlight.switchOn();
            this.isOn = true;
            
        }


    }
    

    playMusic() {
        if (this.song ==1) {
            this.nativeAudio.play('s1');
            this.song = 2;
            this.song1 = true;
        } else {
            this.song = 1;
            this.nativeAudio.play('s2');
            this.song1 = false;
        }
    }

    
}

