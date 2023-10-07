import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ToastData {
    text: string
    color?: string // default color is bluescale
}


@Injectable({
    providedIn: 'root'
})
export class ToastService {

    #source = new BehaviorSubject<ToastData>({text: ""})
    #currentToast = this.#source.asObservable()
    
    // used by the receiver to subscribe
    get toast() {
        return this.#currentToast
    }

    // used by the emitter to send toast
    show(text: string, color?: string) {
        this.#source.next({
            text: text,
            color: color
        })
    }

}
