import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations';
// import { WarehouseOutboundService } from '../../../../../../../../toolots/gadget/src/app/main/warehouse/warehouse-outbound/warehouse-outbound.service';
import { MatDialog } from '@angular/material/dialog';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
// import { WarehouseService } from 'app/main/warehouse/warehouse.service';
// import { FulfillmentLine, FulfillmentLineConfirm, Fulfillment, FulfillmentCartonItemScan, FulfillmentPackageLine } from 'app/shared/class/fulfillment';
import { Router } from '@angular/router';
// import { EnterQtyDialogComponent } from '../dialogs/enter-qty/enter-qty.component';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { SnackbarComponent } from 'app/shared/components/snackbar/snackbar.component';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'set-package-items-actions',
    templateUrl: './set-package-items-actions.component.html',
    styleUrls: ['./set-package-items-actions.component.scss'],
    animations: fuseAnimations
})
export class SetPackageItemsActionsComponent implements OnInit, OnDestroy {
    selected: any;
    isEdit: boolean;
    dialogRef: any;
    
    // selectedItemScan: FulfillmentLine;
    pickIncomplete: boolean;
    inputEnabled: boolean;
    editConfirmQuantity: boolean;
    @ViewChild('scrollContainer') scrollContainerEl: ElementRef;
    private _unsubscribeAll: Subject<any>;
    constructor(
        // private warehouseOutboundService: WarehouseOutboundService,
        // public warehouseService: WarehouseService,
        public _matDialog: MatDialog,
        private _fuseSidebarService: FuseSidebarService,
        private router: Router,
        private _snackBar: MatSnackBar,
        private _service: NotificationsService
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        // this.warehouseOutboundService.onFulfillmentSelected
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((selected: Fulfillment) => {
        //         this.selected = selected;
        //     });
        // this.warehouseOutboundService.onFulfillmentLineSelected
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((selectedfulfillmentline: FulfillmentPackageLine) => {
        //         this.selectedFulfillmentLine = selectedfulfillmentline;
        //     });
        // this.warehouseOutboundService.onFulfillmentLinePackageSelected
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((selectedfulfillmentline: FulfillmentPackageLine) => {
        //         this.selectedFulfillmentPackageLine = selectedfulfillmentline;
        //     });
        // this.warehouseOutboundService.onFulfillmentLineConfirmSelected
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((fulfillmentlineconfirm: FulfillmentLineConfirm) => {
        //         this.selectedFulfillmentLineConfirm = fulfillmentlineconfirm;
        //     });
        // this.warehouseOutboundService.editConfirmQuantity
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((editquantity: boolean) => {
        //         this.editConfirmQuantity = editquantity;
        //     });
        // this.warehouseOutboundService.onFulfillmentLineItemScanSelected
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((itemscan) => {
        //         this.selectedItemScan = itemscan;
        //     });
            
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
        // this.warehouseOutboundService.onFulfillmentLinePackageSelected.next({});
    }
    clearSelected(): void {
        this.router.navigate(['warehouse/outbound/pick']);
    }
    addConfirmedQty() {
        // if ((this.totalConfirmedQuantity() + 1) <= this.selectedFulfillmentLine.Quantity) {
        // }
        // if (this.selectedFulfillmentLine.Quantity < this.getMaxPerItem(this.selectedFulfillmentLine.tpin)) {
        //     this.selectedFulfillmentLine.Quantity++;
        // }
        // else {
        //     this._service.error('Error', 'Quantity can not exceed ordered quantity', {timeOut: 3000, clickToClose: true});
        // }
    }
    subtractConfirmedQty() {
        // if ((this.selectedFulfillmentLine.Quantity - 1) >= 0) {
        //     this.selectedFulfillmentLine.Quantity--;
        // }
    }
    totalConfirmedQuantity() {
        // return this.selectedFulfillmentLine.FulfillmentLineConfirms.reduce((total, val) => {
        //     return total += val.Quantity;
        // }, 0);
    }
    getMaxPerItem(tpin): any {
        // let maxAmt = 0;
        // this.selected.FulfillmentLines.forEach((fulfillmentline: FulfillmentLine) => {
        //     if (fulfillmentline.ItemTPIN === tpin) {
        //         maxAmt += fulfillmentline.Quantity;
        //     }
        // });
        // let confirmedAmt = 0;
        // this.selected.FulfillmentLines.forEach((fulfillmentline: FulfillmentLine) => {
        //     if (fulfillmentline.ItemTPIN === tpin) {
        //         confirmedAmt += fulfillmentline.confirmedQty;
        //     }
        // });
        // return maxAmt - confirmedAmt;
    }
    enterConfirmQty() {
        // this.warehouseOutboundService.toggleEnterConfirmedQty();
    }
}
