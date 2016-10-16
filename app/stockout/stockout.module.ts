import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {StockOutComponent} from './stockout.component';
@NgModule({
    imports:[
        FormsModule,
        CommonModule
    ],
    declarations:[
        StockOutComponent
    ]
}) 
export class StockOutModule{

}