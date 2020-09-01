import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  number:string;
  message:string;

  constructor(private callNumber:CallNumber) {

  }
  
  call(){
    this.callNumber.callNumber(this.number, true)
      .then(res => this.showMessage('Launched dialer!'))
      .catch(err => this.showMessage('Error launching dialer'));
  }

  showMessage(msg:string){
    this.message = msg;

  }

}
