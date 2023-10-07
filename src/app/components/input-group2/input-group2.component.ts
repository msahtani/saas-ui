import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

@Component({
    selector: 'app-input-group2',
    templateUrl: './input-group2.component.html',
    styleUrls: ['./input-group2.component.css']
})
export class InputGroup2Component {


    @Input({transform: booleanAttribute}) readonly = false
    @Input({transform: booleanAttribute}) password = false
    @Input({transform: booleanAttribute}) clipboard = false

    @Input() label!: string
    @Input() type = "text"

    @Input() value!: string
    @Output() valueChange = new EventEmitter<string>()


    copied = false

    copyToClipboard(){

        if(!this.clipboard) return

        navigator
            .clipboard
            .writeText(this.value)

        setTimeout(
            () => this.copied = false,
            1000
        )
        this.copied = true

        

    }


}
