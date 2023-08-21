import { Component } from '@angular/core';

@Component({
    selector: 'app-send-sms',
    templateUrl: './send-sms.component.html',
    styleUrls: ['./send-sms.component.css']
})
export class SendSmsComponent {


    form = {
        phoneNumber: "",
        body: ""
    }

    length = 0

}