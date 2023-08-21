import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-console-menu',
    templateUrl: './console-menu.component.html',
    styleUrls: ['./console-menu.component.css']
})
export class ConsoleMenuComponent {

    constructor(
        private router: Router
    ){}

    menu = [
        {
            name: "Home",
            link: ""
        },
        {
            name: "Templated SMS",
            link: "tsms"
        },
        {
            name: "Settings",
            link: "settings"
        }
    ]

    currentLink = ""

    ngOnInit(): void {
        // select item once the route is changes
        this.router.events
            .subscribe(
                (_) => this.selectItem()
            )
    }


    selectItem(){
        const path = this.router.routerState.snapshot.url.split("/")
        this.currentLink = (path.length !== 2) ? path[2] : ""
    }


}
