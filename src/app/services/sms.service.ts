import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import SmsApi from '../interfaces/sms-api';
import { environment as env } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SmsService {

    constructor(
        private http: HttpClient
    ) { }


    sendSms(api: SmsApi){
        const url = env.apiUrl + "/api/send"
        return this.http.post(url, api)
    }

}