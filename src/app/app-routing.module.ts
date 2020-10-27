import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './main/landing/landing.component';
import { WarehouseDashboardComponent } from './main/warehouse-dashboard/warehouse-dashboard.component';

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
        path: 'dashboard',
        component: WarehouseDashboardComponent
    },
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
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
