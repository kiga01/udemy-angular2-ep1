import {Component} from 'angular2/core';
import {TestComponent} from './test.component';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-component',
    template: `
        Hi, my name is
        <span [style.color]="inputElement.value === 'yes' ? 'red' : '' ">{{name}}</span>,
        and this is my first angular2 component!
        <span [class.is-awesome]="inputElement.value === 'yes'" >It's so awesome!</span>
        <br>
        is it awesome?
        <input type="text" #inputElement (keyup)="0">
        <br>
        <button [disabled]="inputElement.value !== 'yes'" >only enable if 'yes' was entered!</button>
        <br>
        <test></test>
    `,
    styleUrls: [
        'src/css/my-component.css',
    ],
    directives: [
        TestComponent,
    ],
})

export class MyComponentComponent implements OnInit{
    name : string;

    //constructor () {
    //    this.name = "kiga";
    //};

    ngOnInit():any{
        this.name = "kiga";
    }

}
