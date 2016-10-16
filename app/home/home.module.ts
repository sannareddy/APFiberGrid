import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home.component';
@NgModule({
    imports:[
        FormsModule,
        CommonModule
    ],
    declarations:[
        HomeComponent
    ]
}) 
export class HomeModule{

}