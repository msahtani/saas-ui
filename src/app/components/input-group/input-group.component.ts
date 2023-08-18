import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, booleanAttribute } from '@angular/core';

@Component({
    selector: 'app-input-group',
    templateUrl: './input-group.component.html',
    styleUrls: ['./input-group.component.css']
})
export class InputGroupComponent implements OnInit{

    @Input() label!: string
    @Input() type = "" 

    @Input() value!: string
    @Output() valueChange = new EventEmitter<string>()

    focused = false
    isPassword = false

    ngOnInit(): void {
        
        this.isPassword = (this.type == "password")
    }

    change(){
        this.valueChange.emit(this.value)
    }

    showhide(){
        this.type = (this.type) ? "" : "password"
    }


}
