import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  text:string;
  range:number;
  constructor(private tts: TextToSpeech) {
    
  }

  playAudio(){
    this.tts.speak({text:this.text, locale:'en-US',rate:this.range})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  
  stopAudio(){
    this.tts.speak({text:"", locale:'en-US',rate:this.range})
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }
}
