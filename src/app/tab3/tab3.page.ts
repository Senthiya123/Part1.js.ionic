import { Component } from '@angular/core';

import { BatteryStatus } from '@ionic-native/battery-status/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    batteryLevel: number;
    plugged: boolean;

    battery: string;
    

    constructor(private batteryStatus: BatteryStatus) {
        const subscription = this.batteryStatus.onChange().subscribe(status => {
            this.batteryLevel = status.level;
            this.plugged = status.isPlugged;
            this.critical();
        });


        
    }

   //checks the Battery Level
critical() {
    if (this.batteryLevel <= 5) {
        this.battery = "The battery level is CRITICAL.";
    }
    else if (this.batteryLevel <= 20) {
        this.battery = "The battery level is LOW.";
    }
}
}
