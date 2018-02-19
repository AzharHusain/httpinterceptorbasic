import { Component } from '@angular/core';
import { MyService } from './my.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers:[MyService]
})
export class AppComponent {

    mylist = [];

    constructor(private _service:MyService){}

    assignList(data){
        this.mylist = data;
    }
    
    firstButton(){
        this._service.callFirst()
        .subscribe(
            data => this.assignList(data.name),
            error => console.log(error)
        )
    }

    secondButton(){
        this._service.callSecond()
        .subscribe(
            data => this.assignList(data.name),
            error => console.log(error)
        )
    }

    thirdButton(){
        this._service.callThird()
        .subscribe(
            data => this.assignList(data.name),
            error => console.log(error)
        )
    }
}