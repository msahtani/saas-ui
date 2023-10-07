import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import Account from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
    selector: 'app-get-api',
    templateUrl: './get-api.component.html',
    styleUrls: ['./get-api.component.css']
})
export class GetApiComponent {

    @Input() acc!: Account

    @ViewChild("clipboard")
    clipboardBtn!: ElementRef

    constructor(
        private account: AccountService,
        private toast: ToastService
    ){}

    copyToClipboard(){
        navigator.clipboard.writeText(
            this.acc.accountSid
        )
    }

    changeAuthToken(){
        this.account
            .changeAuth()
            .subscribe(
                (token) => {
                    console.log(token)
                    this.acc.authToken = token as string
                    this.toast.show("auth token updated")
                }
            )
    }



    

}
