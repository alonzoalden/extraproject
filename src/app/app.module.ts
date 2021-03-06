import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FakeDbService } from './fake-db/fake-db.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { fuseConfig } from './fuse-config';
import { LayoutModule } from './layout/layout.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { LandingPageComponent } from './main/landing/landing.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginModule } from './main/login/login.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WarehouseItemManagerModule } from './main/item-manager/warehouse-item-manager.module';
import { LandingPageModule } from './main/landing/landing.module';
//import { WarehouseDashboardComponent } from './main/warehouse-dashboard/warehouse-dashboard.component';

import { SafePipe } from './shared/pipes/safe.pipe';
import { ShipmentsDashboardComponent } from './main/shipments/dashboard/dashboard.component';
import { BillingDashboardComponent } from './main/billing/dashboard/dashboard.component';
import { BillingModule } from './main/billing/billing.module';
import { ReportsModule } from './main/reports/reports.module';


@NgModule({
  declarations: [
    AppComponent,
    // LandingPageComponent,
    ShipmentsDashboardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // TranslateModule.forRoot(),
    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),

    // Material moment date module
    MatMomentDateModule,

    // Material
    MatButtonModule,
    MatIconModule,

    // Fuse modules
    FuseModule.forRoot(fuseConfig),
    FuseProgressBarModule,
    FuseSharedModule,
    FuseSidebarModule,
    FuseThemeOptionsModule,

    // App modules
    LayoutModule,
    // AppStoreModule
    LandingPageModule,

    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FuseSharedModule,
    SimpleNotificationsModule.forRoot(),
    FlexLayoutModule,
    LoginModule,
    WarehouseItemManagerModule,
    BillingModule,
    ReportsModule
  ],
  exports: [
    
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
