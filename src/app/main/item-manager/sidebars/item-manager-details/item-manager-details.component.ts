import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';

import { WarehouseItemManagerService } from '../../warehouse-item-manager.service';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { MailComposeDialogComponent } from '../../dialogs/edit-dimensions/edit-dimensions.component';
import { ItemList, ItemCartonInformation } from 'app/shared/class/item';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { SnackbarComponent } from 'app/shared/components/snackbar/snackbar.component';
import { MatTableDataSource } from '@angular/material/table';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { CartonInformationDialogComponent } from '../../dialogs/carton-information/carton-information.component';
import { InventoryDetailDialogComponent } from '../../dialogs/inventory-detail/inventory-detail.component';
import { PotentialLocationDialogComponent } from '../../dialogs/potential-location/potential-location.component';
//import { WarehouseService } from 'app/main/warehouse/warehouse.service';
import { environment } from 'environments/environment';
import { AppService } from 'app/app.service';
import { Member } from 'app/shared/class/member';
import { PrintLabelDialogComponent } from '../../dialogs/print-label/print-label.component';

@Component({
    selector: 'item-manager-details-sidebar',
    templateUrl: './item-manager-details.component.html',
    styleUrls: ['./item-manager-details.component.scss'],
    animations: fuseAnimations
})
export class WarehouseItemManagerDetailsSidebarComponent implements OnInit, OnDestroy {
    selected: any;
    isEdit: boolean;
    isLeadRole: boolean;
    dialogRef: any;
    displayedColumns1 = ['PONumber', 'ContainerNumber', 'InboundShipmentNumber', 'CartonNumber', 'Quantity'];
    dataSource1: any;
    private _unsubscribeAll: Subject<any>;
    imageURL = environment.imageURL;
    constructor(
        public appService: AppService,
        public itemManagerService: WarehouseItemManagerService,
        // public warehouseService: WarehouseService,
        private router: Router,
        public _matDialog: MatDialog,
        private _snackBar: MatSnackBar,
        private _fuseSidebarService: FuseSidebarService,
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        if (this.router.url.includes('/item-management/edit/')) {
            this.isEdit = true;
        }
        this.router.events.subscribe(
            (event: any) => {
                if (event instanceof NavigationEnd) {
                    if (event.url.includes('/item-management/edit/')) {
                        this.isEdit = true;
                    } else {
                        this.isEdit = false;
                    }
                }
            }
        );

        this.itemManagerService.onItemSelected
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(selected => {
                this.selected = selected;
                if (this.selected.Data) {
                    this.dataSource1 = new MatTableDataSource<ItemCartonInformation>(this.selected.Data.ItemCartonInformations);
                }
            });
        this.appService.userInfo
            .subscribe((user: Member) => {
                if (user && user.MemberRoles) {
                    const leadRole = user.MemberRoles.find(role => {
                            return (role.GadgetRoleName === 'Warehouse' && role.IsLead)
                                || (role.GadgetRoleName === 'Admin');
                    });
                    if (leadRole) {
                        this.isLeadRole = true;
                    }
                }
            });
    }
    composeDialog(): void {
        this.dialogRef = this._matDialog.open(MailComposeDialogComponent, {
            panelClass: 'edit-fields-dialog'
        });
        this.dialogRef.afterClosed()
            .subscribe(response => {
                if (!response) {
                    return;
                }
            });
    }

    composeDialogCartons(): void {
        this.dialogRef = this._matDialog.open(CartonInformationDialogComponent, {
            panelClass: 'view-list-dialog'
        });
        this.dialogRef.afterClosed()
            .subscribe(response => { });
    }
    composeDialogInventoryDetails(): void {
        this.dialogRef = this._matDialog.open(InventoryDetailDialogComponent, {
            panelClass: 'view-list-dialog'
        });
        this.dialogRef.afterClosed()
            .subscribe(response => { });
    }
    composeDialogPotentialLocations(): void {
        this.dialogRef = this._matDialog.open(PotentialLocationDialogComponent, {
            panelClass: 'view-list-dialog'
        });
        this.dialogRef.afterClosed()
            .subscribe(response => { });
    }
    composeDialogPrintLabel(): void {
        this.dialogRef = this._matDialog.open(PrintLabelDialogComponent, {
            panelClass: 'edit-fields-dialog',
            disableClose: true
        });
        this.dialogRef.afterClosed()
            .subscribe(response => { });
    }
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    closeSidebar(): void {
        this._fuseSidebarService.getSidebar('file-manager-details-sidebar').toggleOpen();
    }
}
