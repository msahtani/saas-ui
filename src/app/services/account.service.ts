import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as e} from 'src/environments/environment';
import { AuthService } from './auth.service';
import Account from '../interfaces/account';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(
        private http: HttpClient,
        private auth: AuthService
    ) { }

    getAccount(){

        const url = e.apiUrl + "/account"

        return this.http.get<Account>(url, {
            headers: {
                "accept": "application/json",
                "authorization": "Bearer " + this.auth.getToken()
            }
        })
    }

}
