import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing,appRoutingProviders } from './app.routing';

import { HomeComponent } from './home.component';
import { StockInComponent } from './stockin.component';
import { StockOutComponent } from './stockout.component';
import { ReportsComponent } from './reports.component';
import { AdminComponent } from './admin.component';
@NgModule({
  imports:      [ BrowserModule,routing ],
  declarations: [ AppComponent,HomeComponent,StockInComponent,StockOutComponent,ReportsComponent,AdminComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ appRoutingProviders ]
})
export class AppModule { }