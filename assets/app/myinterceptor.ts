import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest,HttpHandler,HttpEvent } from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import { HttpHeaders } from "@angular/common/http";

import 'rxjs/add/operator/do';
import { HttpErrorResponse } from "@angular/common/http";






@Injectable()


export class MyInterceptor  implements HttpInterceptor{

    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{

        let request = req.clone({
            headers:new HttpHeaders().append('Authorization','abcd')            
        });
        return  next.handle(request).do(
            (event:any) => {},
            (error:any)=>{
                if(error instanceof HttpErrorResponse)
                {
                    if(error.status == 501){

                        //complex error handling over here
                        console.error(error);
                    }
                }
            }
        );
    }    
}