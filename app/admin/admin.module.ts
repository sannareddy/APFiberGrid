import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AdminComponent} from './admin.component';
@NgModule({
    imports:[
        FormsModule,
        CommonModule
    ],
    declarations:[
        AdminComponent
    ]
}) 
export class AdminModule{

}