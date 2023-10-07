import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Modal } from '../components/modal/modal';

interface ModalData{
    modal: Type<Modal>
    data?: any
}

const emptyModal = null as unknown as Type<Modal>

@Injectable({
    providedIn: 'root'
})
export class OpenModalService {

    #source = new BehaviorSubject<ModalData>({
        modal: emptyModal
    })
    #currentModal = this.#source.asObservable()

    get currentMessage(){
        return this.#currentModal
    }
    
    open(modal: Type<Modal>, data?: any){
        this.#source.next({
            modal: modal,
            data: data
        })
        this.#source.next({
            modal: emptyModal
        })

    }

}