import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ReportsComponent implements OnDestroy {
    selected: any;
    pathArr: string[];
    dialogRef: any;
    isEdit: boolean;
    searchTerm: string;
    searchEnabled: boolean;
    filteredCourses: any[];

    private _unsubscribeAll: Subject<any>;

    constructor(
        public _matDialog: MatDialog,
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    onActivate(e, scrollContainer) {
        scrollContainer.scrollTop = 0;
    }
}
