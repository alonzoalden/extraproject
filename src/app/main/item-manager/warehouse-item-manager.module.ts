import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';
import { MailComposeDialogComponent } from './dialogs/edit-dimensions/edit-dimensions.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WarehouseItemManagerComponent } from './warehouse-item-manager.component';
import { WarehouseItemManagerService } from './warehouse-item-manager.service';
import { WarehouseItemManagerListComponent } from './item-manager-list/item-manager-list.component';
import { WarehouseItemManagerDetailsSidebarComponent } from './sidebars/item-manager-details/item-manager-details.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CartonInformationDialogComponent } from './dialogs/carton-information/carton-information.component';
import { PotentialLocationDialogComponent } from './dialogs/potential-location/potential-location.component';
import { InventoryDetailDialogComponent } from './dialogs/inventory-detail/inventory-detail.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrintLabelDialogComponent } from './dialogs/print-label/print-label.component';
import { StepsPreviewComponent } from './steps-preview/steps-preview.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ViewShipmentDialogComponent } from './dialogs/view-shipment/view-shipment.component';
import { ChatPanelShipmentsComponent } from './dialogs/view-shipment/chat-panel/chat-panel.component';
// import { ChatPanelShipmentModule } from 'app/main/chat-panel/chat-panel.module';

const routes: Routes = [
    {
        path     : '',
        component: WarehouseItemManagerComponent,
        children: [
            {
                path     : '',
                component: WarehouseItemManagerListComponent,
            }
        ]
    }
];
@NgModule({
    declarations: [
        WarehouseItemManagerComponent,
        WarehouseItemManagerListComponent,
        WarehouseItemManagerDetailsSidebarComponent,
        MailComposeDialogComponent,
        CartonInformationDialogComponent,
        InventoryDetailDialogComponent,
        PotentialLocationDialogComponent,
        PrintLabelDialogComponent,
        StepsPreviewComponent,
        ViewShipmentDialogComponent,
        ChatPanelShipmentsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatIconModule,
        MatRippleModule,
        MatSlideToggleModule,
        MatTableModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSelectModule,
        MatToolbarModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatTabsModule,
        MatChipsModule,
        MatSnackBarModule,
        MatRadioModule,
        FuseSharedModule,
        FuseSidebarModule,
    ],
    providers: [
        WarehouseItemManagerService,
        MatSnackBar
    ],
    entryComponents: [
        MailComposeDialogComponent,
        CartonInformationDialogComponent,
        InventoryDetailDialogComponent,
        PotentialLocationDialogComponent,
        PrintLabelDialogComponent,
        ViewShipmentDialogComponent
    ]
})
export class WarehouseItemManagerModule {
}
