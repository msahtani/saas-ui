import { Component } from '@angular/core';
import { HomeComponent } from '../../home/home.component';
import { AddTsmsComponent } from './add-tsms/add-tsms.component';

@Component({
    selector: 'app-templated-sms',
    templateUrl: './templated-sms.component.html',
    styleUrls: ['./templated-sms.component.css'],
})
export class TemplatedSmsComponent {
    
    modal = AddTsmsComponent
}
