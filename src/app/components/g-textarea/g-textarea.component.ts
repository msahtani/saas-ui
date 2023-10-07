import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-g-textarea',
  templateUrl: './g-textarea.component.html',
  styleUrls: ['./g-textarea.component.css']
})
export class GTextareaComponent{
    

    @Input({transform: booleanAttribute}) readonly = false
    @Input() label!: string

    @Input() value: string = ""
    @Output() valueChange = new EventEmitter<string>()

    @ViewChild("textarea") $textarea!: ElementRef<HTMLTextAreaElement>
    @ViewChild("backdrop") $backdrop!: ElementRef<HTMLDivElement>


    get len(){
        return this.value.length
    }

    


}
