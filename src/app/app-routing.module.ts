import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingDashboardComponent } from './main/billing/dashboard/dashboard.component';
import { WarehouseItemManagerComponent } from './main/item-manager/warehouse-item-manager.component';
import { WarehouseItemManagerModule } from './main/item-manager/warehouse-item-manager.module';
import { LandingPageComponent } from './main/landing/landing.component';
import { ReportsDashboardComponent } from './main/reports/dashboard/dashboard.component';
import { ShipmentsDashboardComponent } from './main/shipments/dashboard/dashboard.component';

const routes: Routes = [
    // {
    //     path        : 'apps',
    //     loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule)
    // },
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'reports',
        component: ReportsDashboardComponent
    },
    // {
    //     path: 'shipments',
    //     component: ShipmentsDashboardComponent,
    //     children: [
    //         {
    //             path: 'all',
    //             component: WarehouseItemManagerComponent,
    //         },
    //         {
    //             path: 'open',
    //             component: WarehouseItemManagerComponent,
    //         },
    //         {
    //             path: 'closed',
    //             component: WarehouseItemManagerComponent,
    //         },
    //     ]
    // },
    // {
    //     path: 'shipments',
    //     component: ShipmentsDashboardComponent,
    //     children: [
    //         {
    //             path: 'all',
    //             component: WarehouseItemManagerComponent,
    //         },
    //         {
    //             path: 'open',
    //             component: WarehouseItemManagerComponent,
    //         },
    //         {
    //             path: 'closed',
    //             component: WarehouseItemManagerComponent,
    //         },
    //     ]
    // },
    
    {
        path: '**',
        redirectTo: 'apps/dashboards/analytics'
    },
    {
        path        : 'e-commerce',
        loadChildren: () => import('./main/e-commerce/e-commerce.module').then(m => m.EcommerceModule)
    },
    {
        path        : 'login',
        loadChildren: () => import('./main/login/login.module').then(m => m.LoginModule)
    },
    {
        path        : 'shipments',
        loadChildren: () => import('./main/item-manager/warehouse-item-manager.module').then(m => m.WarehouseItemManagerModule)
    },
    {
        path        : 'billing',
        loadChildren: () => import('./main/billing/billing.module').then(m => m.BillingModule)
    },
    {
        path        : 'claims',
        loadChildren: () => import('./main/claims/claims.module').then(m => m.ClaimsModule)
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
