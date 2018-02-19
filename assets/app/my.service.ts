import { Injectable } from "@angular/core";
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {MyModel} from './my.model';



@Injectable()


export class MyService{

    constructor(private _http:HttpClient){

    }

    callFirst(){
        return this._http.get<MyModel>('http://localhost:3000/api/first',
            {
                observe:'body'              
            }
        );
    }

    callSecond(){
        return this._http.get<MyModel>('http://localhost:3000/api/second',
            {
                observe:'body'
            }
        );
    }

    callThird(){
        return this._http.get<MyModel>('http://localhost:3000/api/third',
            {
                observe:'body'
            }
        );
    }
}