import {
    Component, Inject, OnInit, OnDestroy
    , ViewChild, AfterViewInit, HostListener, ViewChildren, QueryList, ElementRef
} from '@angular/core';
import { FormGroup, FormBuilder, NgForm,  } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
// import { WarehouseOutboundService } from '../../../../../../../toolots/gadget/src/app/main/warehouse/warehouse-outbound/warehouse-outbound.service';
 'app/shared/components/notification/notification.component';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '@fuse/animations';
import { MatInput } from '@angular/material/input';
import { MatTabGroup } from '@angular/material/tabs';
import { WarehouseItemManagerService } from '../../warehouse-item-manager.service';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import { FusePerfectScrollbarDirective } from '@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { MediaObserver } from '@angular/flex-layout';

declare const dymo: any;

@Component({
    templateUrl: './view-shipment.component.html',
    styleUrls: ['./view-shipment.component.scss'],
    // encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})

export class ViewShipmentDialogComponent implements OnInit, AfterViewInit, OnDestroy {
    form: any;
    selected: any;
    selectedTabIndex: any;
    isLoading: boolean;
    composeForm: any;
    contacts: any[];
    chat: any;
    selectedContact: any;
    sidebarFolded: boolean;
    user: any;

    @ViewChild('replyForm')
    private _replyForm: NgForm;

    @ViewChild('replyInput')
    private _replyInput: ElementRef;

    @ViewChildren(FusePerfectScrollbarDirective)
    private _fusePerfectScrollbarDirectives: QueryList<FusePerfectScrollbarDirective>;

    @ViewChild('tabGroup', { static: false }) tabGroup: MatTabGroup;
    @ViewChildren(MatInput) matInputs: QueryList<MatInput>;
    private _unsubscribeAll: Subject<any>;
    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        // if (event.key === 'Escape' && !this.isLoading) {
        //     this.matDialogRef.close();
        // }
    }
    
    constructor(
        private _formBuilder: FormBuilder,
        public matDialogRef: MatDialogRef<ViewShipmentDialogComponent>,
        public warehouseItemManagerService: WarehouseItemManagerService,
        @Inject(MAT_DIALOG_DATA) public _data: any,
        private notifyService: NotificationsService,
        public _matDialog: MatDialog,
        public media: MediaObserver
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        // this.appService.userInfo
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe(user => this.userInfo = user);
        this.composeForm = this.createProductForm();
        

    }
    ngAfterViewInit(): void {
        // this.focusMainInput();
    }
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    
    createProductForm(): FormGroup {
        return this._formBuilder.group({
            Length: ['' ],
            Width: ['' ],
            Height: ['' ],
            Weight: ['' ],
            PackageType: ['' ],
            ToolotsPallet: ['' ],
            Pieces: ['' ],
        });
    }
    onSelectedTabChange() {
        //
    }
    onDialogClose() {
        //
    }
    onHandlePrev() {
        if (this.tabGroup.selectedIndex === 0) {
            this.selectedTabIndex = 2;
        }
        else {
            this.selectedTabIndex = this.tabGroup.selectedIndex - 1;
        }
    }
    onHandleNext() {
        if (this.tabGroup.selectedIndex === 2) {
            this.selectedTabIndex = 0;
        }
        else {
            this.selectedTabIndex = this.tabGroup.selectedIndex + 1;
        }
    }
}