import {Component, OnInit} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit{

    ngOnInit() {
        console.log("hello world")
    }
}
