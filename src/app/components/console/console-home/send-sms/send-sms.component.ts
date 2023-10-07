import { Component, Input } from '@angular/core';
import { Auth } from 'src/app/interfaces/account';
import SMS from 'src/app/interfaces/sms';
import SmsApi from 'src/app/interfaces/sms-api';
import { SmsService } from 'src/app/services/sms.service';

@Component({
    selector: 'app-send-sms',
    templateUrl: './send-sms.component.html',
    styleUrls: ['./send-sms.component.css']
})
export class SendSmsComponent {

    @Input() auth!: Auth

    form :SMS = {
        phoneNumber: "",
        body: "",
        when: "",
        deleteT(){
            this.when = this.when?.replace("T", " ")
        }
    }

    rSchedule: number = 0

    constructor(
        private smsService: SmsService
    ){}

    sendSMS(){

        this.form.deleteT()

        const api: SmsApi = {
            auth: this.auth,
            sms: this.form
        }

        this.smsService
            .sendSms(api)
            .subscribe(
                () => console.log("sent")
            )
    }

    toggle(){
        this.form.when = ""
        this.rSchedule = (this.rSchedule + 1)%2
    }

}