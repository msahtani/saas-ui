import { Component, ElementRef, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Modal } from '../modal';
import { OpenModalService } from '../../../services/open-modal.service';


@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit{

    @ViewChild("modal", {static: true}) 
    modal!: ElementRef

    @Input() component?: Type<Modal>
    @Input() showAddBtn = false

    initialComponent!:Type<Modal>

    constructor(
        private containerRef: ViewContainerRef,
        private openModal: OpenModalService
    ){}


    ngOnInit(): void {


        if(this.component){
            this.initialComponent = this.component
        }

        this.openModal.currentMessage.subscribe(
            m => {
                this.component = m.modal
                this.loadComponent(m.data)
            }
        )

        this.loadInitComponent()
    }

    loadInitComponent(){
        this.openModal
            .open(this.initialComponent)
    }

    loadComponent(data?:never){

        if(!this.component) return

        const componentRef = this
            .containerRef
            .createComponent(this.component)

        const el = componentRef
            .location
            .nativeElement as HTMLElement
        el.classList.add("modal-ca")

        componentRef.instance.close = () => {
            this.containerRef.clear()
        }

        if(data){
            const instance = componentRef.instance
            console.log("i'm affected")
            instance.data = data
        }
    }

}
