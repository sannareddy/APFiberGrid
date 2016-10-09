"use strict";
var router_1 = require('@angular/router');
var stockin_component_1 = require('./stockin.component');
var stockout_component_1 = require('./stockout.component');
var reports_component_1 = require('./reports.component');
var home_component_1 = require('./home.component');
var admin_component_1 = require('./admin.component');
var appRoutes = [
    { path: 'stockin', component: stockin_component_1.StockInComponent },
    { path: 'stockout', component: stockout_component_1.StockOutComponent },
    { path: 'reports', component: reports_component_1.ReportsComponent },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map