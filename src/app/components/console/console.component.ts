import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Account from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';

// @ts-ignore
@Component({
    selector: 'app-console',
    templateUrl: './console.component.html',
    styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit{

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
