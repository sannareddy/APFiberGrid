import { Routes,RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { StockInComponent } from './stockin.component';
import { StockOutComponent } from './stockout.component';
import { ReportsComponent } from './reports.component';
import { HomeComponent } from './home.component';
import { AdminComponent } from './admin.component';
const appRoutes: Routes=[
    { path:'stockin', component:StockInComponent },
    { path:'stockout',component:StockOutComponent },
    { path:'reports',component:ReportsComponent },
    { path:'admin',component:AdminComponent },
    { path:'home',component:HomeComponent },
    { path:'',redirectTo:'/home',pathMatch:'full' },
    { path:'**',redirectTo:'/home',pathMatch:'full' }
];

export const appRoutingProviders:any[]=[
    
];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);