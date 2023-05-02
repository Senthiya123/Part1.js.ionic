import { Component } from '@angular/core';

import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    text: string;
    rate: number;
    

    constructor(private tts: TextToSpeech) {
        this.text = 'Initial text';
        this.rate = 1;
        
    }

    playText() {
        this.tts.speak({
            text: this.text,
            rate: this.rate / 10
            
        })
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
    }

    stopTTS() {
        this.tts.speak("").then(_ => {
            this.tts.stop();
            console.log('tts stopped !!! ');
        });

    }



}
