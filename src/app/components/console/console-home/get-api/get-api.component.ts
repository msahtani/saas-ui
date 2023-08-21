import { Component, ElementRef, ViewChild } from '@angular/core';
import Account from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
    selector: 'app-get-api',
    templateUrl: './get-api.component.html',
    styleUrls: ['./get-api.component.css']
})
export class GetApiComponent {

    constructor(
        private account: AccountService
    ){}


    acc: Account = {
        accountSid: "",
        authToken: "",
        balance: 0   
    }

    @ViewChild("clipboard")
    clipboardBtn!: ElementRef

    copyToClipboard(){
        navigator.clipboard.writeText(
            this.acc.accountSid
        )
    }

    ngOnInit() {
        this.account.getAccount()
            .subscribe(
                res => {
                    console.log(res)
                    this.acc = res
                }
            )
    }

}
