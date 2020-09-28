import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // {
    //     path        : 'apps',
    //     loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule)
    // },
    {
        path: '**',
        redirectTo: 'apps/dashboards/analytics'
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
