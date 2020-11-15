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
import { DomSanitizer } from '@angular/platform-browser';

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
    fileDetailManifest: any;
    fileDetailManifest64: any;
    fileDetailManifest64Original: any;
    fileBLDocument: any;
    fileBLDocument64: any;
    fileBLDocument64Original: any;
    filePackingList: any;
    filePackingList64: any;
    filePackingList64Original: any;
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
        public media: MediaObserver,
        private dom: DomSanitizer
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
            HBL: ['' ],
            MBL: ['' ],
            Container: ['' ],
            DateDepart: ['' ],
            DateArrive: ['' ],
            TXL: ['' ],
            ISF: ['' ],
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
    onFileSelected(event, type) {

        this[type] = event.target.files[0];
        if (!this[type]) {
            return;
        }
        
        // save the selectedFile 
        const reader = new FileReader();
        reader.onload = (e) => {
            this[type + '64'] = this.dom.bypassSecurityTrustResourceUrl(e.target.result.toString());
            this[type + '64Original'] = e.target.result;
            
            //this.selectedFile64 = e.target.result;
            //this.refreshPhotoDataSource(this.selectedFile64, this.selectedFile.name);
            // const image = new Image();
            // image.src = this[type + '64'];
        };
        reader.readAsDataURL(this[type]);
        
        // setTimeout(()=> {
        //     const output: any = document.getElementById(this.selectedFile.name);
        //     console.log(output);
        //     output.src = URL.createObjectURL(event.target.files[0]);
        // }, 100);
        
        //this.selectedFile = null;
        this[type] = null;




        // const formData: FormData = new FormData();
        // formData.append('uploadedFiles', this.selectedFile, this.selectedFile.name);
        // this.warehouseOutboundService.uploadMarkShipImage(formData)
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe(
        //         (filepath)=> {
        //             this.refreshPhotoDataSource(filepath);
        //             this.isImageLoading = false;
        //             // this.fileInput.nativeElement.value = '';
        //             this.onSelectPhoto(this.dataSourcePhotos.data[0]);
                    
        //             // save the selectedFile 
        //             const reader = new FileReader();
        //             reader.onload = (e) => {
        //                 this.selectedFile64 = e.target.result;
        //                 const image = new Image();
        //                 image.src = this.selectedFile64;
        //                 image.onload = () => {
        //                     this.selectedFile64Width = image.width;
        //                     this.selectedFile64Height = image.height;
        //                 };
        //             };
        //             const file = this.selectedFile;
        //             reader.readAsDataURL(file);
        //             this.selectedFile = null;
        //         },
        //         (err) => {
        //             this.notifyService.error('Error', `${err}`, { clickToClose: true });
        //             this.isImageLoading = false;
        //             this.selectedFile = null;
        //             // this.fileInput.nativeElement.value = '';
        //         }
        //     );
    }
    onRemovePdf(type) {
        const confirmation = confirm(`Are you sure you want to remove this file?`);
        if (!confirmation) {
            return;
        }
        this[type] = null;
    }
    viewPDF(type) {
        var win = window.open();
        win.document.write('<iframe src="data:application/pdf;' + this[type] + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>')

        // const linkSource = 'data:application/pdf;' + this[type];
        // window.open(linkSource);
        // const downloadLink = document.createElement("a");
        // downloadLink.setAttribute('target', '_blank');
        // const fileName = "sample.pdf";

        // downloadLink.href = linkSource;
        // downloadLink.download = fileName;
        // downloadLink.click();

    }
}