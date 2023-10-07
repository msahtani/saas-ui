import { Component } from '@angular/core';
import { Modal } from 'src/app/components/modal/modal';

@Component({
    selector: 'app-add-tsms',
    templateUrl: './add-tsms.component.html',
    styleUrls: ['./add-tsms.component.css'],
})
export class AddTsmsComponent extends Modal {

    constructor(){
        super({})
    }

    override close(): void {
           
    }


}
