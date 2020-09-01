import { Component } from '@angular/core';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  charge_level:number;
  plugged_status:boolean;
  msg:string;
  
  constructor(private batteryStatus:BatteryStatus) {
    const subscription = this.batteryStatus.onChange().subscribe(status => {
      console.log(status.level, status.isPlugged);
      this.charge_level = status.level;
      if(this.charge_level<50){
        this.msg="warn:the charge level below 50%.";
      } else {
        this.msg="";
      }
      this.plugged_status = status.isPlugged;
   });
  }


}
