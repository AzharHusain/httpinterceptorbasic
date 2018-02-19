import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './myinterceptor';


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule],
    bootstrap: [AppComponent],
    providers:[
        {provide:HTTP_INTERCEPTORS, useClass:MyInterceptor, multi:true}
    ]
})
export class AppModule {

}