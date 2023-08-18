import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-clipboard',
    templateUrl: './clipboard.component.html',
    styleUrls: ['./clipboard.component.css']
})
export class ClipboardComponent {

    @Input() data!: string
    saved = false

    save(){
        navigator.clipboard.writeText(this.data)
        this.saved = true
        setTimeout(
            () => this.saved = false, 1000
        )
    }

}
