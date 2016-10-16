import { Routes,RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { StockInComponent } from './stockin/stockin.component';
import { StockOutComponent } from './stockout/stockout.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
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