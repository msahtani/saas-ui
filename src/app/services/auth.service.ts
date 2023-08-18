import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { NewUser } from '../interfaces/new-user';
import {environment as e} from "../../environments/environment"
import AuthRequest from '../interfaces/auth-request';
import User from '../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

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

        const url = e.apiUrl + "/auth/login"

        this.http.post<User>(
            url, authRequest, {
                headers: {
                    "content-type": "application/json"
                },
            },
        ).subscribe(
            res => {
                console.log(res)
                this.setToken(res.token!)
            }
        )


    }


    setToken(token: string){
        localStorage.setItem("token", token)
    }

    getToken(){
        return localStorage.getItem("token")
    }

    authenticated(){
        return Boolean(this.getToken()) 
    }

}
