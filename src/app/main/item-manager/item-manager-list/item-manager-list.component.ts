import { Component, OnDestroy, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { WarehouseItemManagerService } from '../warehouse-item-manager.service';
import { ItemList, Item } from 'app/shared/class/item';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'environments/environment';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MailComposeDialogComponent } from '../dialogs/edit-dimensions/edit-dimensions.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartonInformationDialogComponent } from '../dialogs/carton-information/carton-information.component';
import { InventoryDetailDialogComponent } from '../dialogs/inventory-detail/inventory-detail.component';
import { PotentialLocationDialogComponent } from '../dialogs/potential-location/potential-location.component';
import { PrintLabelDialogComponent } from '../dialogs/print-label/print-label.component';
import { Member } from 'app/shared/class/member';
import { AppService } from 'app/app.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'item-manager-list',
    templateUrl: './item-manager-list.component.html',
    styleUrls: ['./item-manager-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('detailExpand', [
        state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
            state('expanded', style({ height: '*', visibility: 'visible' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
        fuseAnimations,
    ],
})
export class WarehouseItemManagerListComponent implements OnInit, OnDestroy {
    imageURL = environment.imageURL;
    files: any;
    dataSource: any;
    displayedColumns = ['Actions', 'ItemName', 'detail-button'];
    selected: ItemList;
    isLoading: boolean;
    isLeadRole: boolean;
    filteredCourses: any[];
    currentCategory: string;
    searchTerm: string;
    searchEnabled: boolean;
    dialogRef: any;
    inputEnabled: boolean;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild('mainInput') mainInput: ElementRef;
    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        public appService: AppService,
        private _fuseSidebarService: FuseSidebarService,
        private warehouseItemManagerService: WarehouseItemManagerService,
        public _matDialog: MatDialog,
        private _snackBar: MatSnackBar
    ) {
        this._unsubscribeAll = new Subject();
        this.searchTerm = '';
        this.searchEnabled = false;
        this.inputEnabled = true;
    }

    ngOnInit(): void {

        this.warehouseItemManagerService.onItemSelected.next({});
        this.warehouseItemManagerService.onItemSelected
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(selected => {
                // if (this.selected && this.selected.ItemID && !selected.ItemID) {
                //     this.searchTerm = '';
                // }
                this.selected = selected;
            });
        this.isLoading = true;

        this.appService.allItemList
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(items => {
                if (items.length) {
                    this.dataSource = new MatTableDataSource<ItemList>(items);
                    this.dataSource.sort = this.sort;
                    this.dataSource.paginator = this.paginator;
                    this.isLoading = false;
                    this.focusMainInput();
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
        this.focusMainInput();
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    onSelect(selected: ItemList): void {
        if (this.selected.ItemID !== selected.ItemID) {
            this.warehouseItemManagerService.onItemSelected.next({});
        }
        // Use setTimeout to repeat animation
        setTimeout(() => this.warehouseItemManagerService.onItemSelected.next(selected), 0);
        this.warehouseItemManagerService.getItemDimension(selected.ItemID).subscribe();
        // .subscribe(item => this.selected.Dimensions.push(item));
    }

    toggleSidebar(name): void {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }

    toggleSearch(): void {
        this.searchEnabled = !this.searchEnabled;
    }
    cancelSearch(): void {
        this.toggleSearch();
        this.searchTerm = '';
        this.filterBySearchTerm();
    }

    filterBySearchTerm(): void {
        const searchTerm = this.searchTerm.toLowerCase();

        // Search
        if (searchTerm === '') {
            this.filteredCourses = this.dataSource.data;
        }
        else {
            this.filteredCourses = this.dataSource.data.filter((course) => {
                return course.title.toLowerCase().includes(searchTerm);
            });
        }
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
        this.warehouseItemManagerService.onItemSelected.next({});
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
    focusMainInput() {
        if (this.inputEnabled) {
            setTimeout(() => this.mainInput.nativeElement.focus(), 10);
        }
    }
}
