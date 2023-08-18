import { Component } from '@angular/core';
import { NewUser } from 'src/app/interfaces/new-user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-get-started',
    templateUrl: './get-started.component.html',
    styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent {

    constructor(
        private authService: AuthService
    ){}
    
    form: NewUser = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: ""
    }

    getStarted(){
        this.authService.signup(this.form)
    }
}
