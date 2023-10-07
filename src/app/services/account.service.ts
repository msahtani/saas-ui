import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as e} from 'src/environments/environment';
import { AuthService } from './auth.service';
import Account from '../interfaces/account';
import { ToastService } from './toast.service';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(
        private http: HttpClient
    ) { }

    getAccount(){

        const url = e.apiUrl + "/account"

        return this.http.get<Account>(url, {
            headers: {
                "accept": "application/json"
            }
        })
    }

    changeAuth(){

        const url = e.apiUrl + "/account"

        return this.http.patch(url, "", {
            headers: {
                "accept": "application/text"
            },
            responseType: 'text',
            withCredentials: true
        })

    }

}
