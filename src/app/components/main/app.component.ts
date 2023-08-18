import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    form = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: ""
    }

    print(){
        console.log(this.form)
    }


}
