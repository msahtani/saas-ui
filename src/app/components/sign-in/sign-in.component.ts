import { Component } from '@angular/core';
import AuthRequest from 'src/app/interfaces/auth-request';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

    constructor(
        private authService: AuthService
    ){}


    form : AuthRequest = {
        email: "",
        password: ""
    }


    login(){
        this.authService.login(this.form)
    }
    

}
