import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-g-textarea',
  templateUrl: './g-textarea.component.html',
  styleUrls: ['./g-textarea.component.css']
})
export class GTextareaComponent{
    

    @Input({transform: booleanAttribute}) readonly = false
    @Input() label!: string

    @Input() value!: string
    @Output() valueChange = new EventEmitter<string>()

    @ViewChild("textarea") $textarea!: ElementRef<HTMLTextAreaElement>
    @ViewChild("backdrop") $backdrop!: ElementRef<HTMLDivElement>


    get highlightedText () {
        return this.applyHighlights(this.value)
    }

    get len(){
        return this.value.length
    }

    applyHighlights(text: string) {

        if(!text) return

        text = text
            .replace(/\n$/g, "\n\n")
            .replace(
                /\{\w*\}?/g,
                "<mark>$&</mark>"
            );
        
        return text
    }

    
    handleScroll() {
        const scrollTop = this.$textarea.nativeElement.scrollTop;
        this.$backdrop.nativeElement.scrollTop = scrollTop;
    
        const scrollLeft = this.$textarea.nativeElement.scrollLeft;
        this.$backdrop.nativeElement.scrollLeft = scrollLeft;
    }


}
