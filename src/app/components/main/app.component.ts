import { Component } from '@angular/core';
import { ToastData, ToastService } from 'src/app/services/toast.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  {

    constructor(
        private toastService: ToastService
    ){}

    toast!: ToastData
    visible = false

    ngOnInit(): void {
        this.toastService
            .toast
            .subscribe( t => {
                console.log(t)
                this.toast = t
                this.visible = true
                setTimeout(
                    () => this.visible = false, 1000
                )
            }
        )
    }


}
