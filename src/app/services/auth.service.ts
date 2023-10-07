import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { NewUser } from '../interfaces/new-user';
import {environment as e} from "../../environments/environment"
import AuthRequest from '../interfaces/auth-request';
import User from '../interfaces/user';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
import { catchError, firstValueFrom, from, lastValueFrom, of, tap, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    signup(newUser: NewUser){
        const url = e.apiUrl + "/auth/signup"

        this.http.post(
            url, newUser, {
                headers: {
                    "content-type": "application/json"
                },
                responseType: "text"
            },
        ).subscribe(
            (res) => console.log(res)
        )
    }

    login(authRequest: AuthRequest){

        const url = e.apiUrl + "/auth"

        this.http.post<User>(
            url, authRequest,
        )
        .subscribe(
            res => {
                localStorage.setItem("sessionId", res.sessionId!)
                this.router.navigate(["console"])
                
            }
        )
        
    }

    logout(){
        localStorage.removeItem("token")
        this.router.navigate(["login"])
    }

    getUserSession(){

        const sessionId = localStorage.getItem("sessionId")
        const url =  `${e.apiUrl}/auth?sessionId=${sessionId}`
        return this.http.get<User>(url)
        
    }

   

}
