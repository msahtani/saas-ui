import { Component } from '@angular/core';

@Component({
    selector: 'app-get-started',
    templateUrl: './get-started.component.html',
    styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent {
    
    form = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: ""
    }

    print() {
        console.log(this.form)
    }
}
