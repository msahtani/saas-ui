import { Component } from '@angular/core';
import Account from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
    selector: 'app-console-home',
    templateUrl: './console-home.component.html',
    styleUrls: ['./console-home.component.css']
})
export class ConsoleHomeComponent {

    acc: Account = {
        accountSid: "",
        authToken: "",
        balance: 0
    }

    constructor(
        private account: AccountService
    ){}

    ngOnInit(): void {
        this.account
            .getAccount()
            .subscribe(
                res => this.acc = res
            )
    }



}
