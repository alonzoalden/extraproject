import { Component, Inject, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WarehouseItemManagerService } from '../../warehouse-item-manager.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ItemList, Item } from 'app/shared/class/item';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'environments/environment';
declare const dymo: any;

@Component({
    selector: 'print-label',
    templateUrl: './print-label.component.html',
    styleUrls: ['./print-label.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PrintLabelDialogComponent implements OnInit, OnDestroy {
    imageURL = environment.imageURL;
    packageImageUrl = environment.packageImageURL;
    showExtraToFields: boolean;
    composeForm: FormGroup;
    selected: ItemList;
    private _unsubscribeAll: Subject<any>;
    isPrinting: boolean;
    printers: any[];
    printerInterval: any;
    selectedPrinter: any;
    constructor(
        private _formBuilder: FormBuilder,
        public matDialogRef: MatDialogRef<PrintLabelDialogComponent>,
        private warehouseItemManagerService: WarehouseItemManagerService,
        private _snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public _data: any,
    ) {
        // Set the defaults
        this._unsubscribeAll = new Subject();
        this.selected = new ItemList(null, null, null, null, null, null
            , new Item(null, null, null, null, null,
                null, null, null, null, null, null, null, null,
                null, null, null, null, null, null, null, null, [], [], [], [])
            );
        this.printers = [];

    }

    ngOnInit(): void {
        this.printers = dymo.label.framework.getPrinters();
        if (this.printers.length === 0) {
            console.log('No DYMO printers are installed. Install DYMO printers.');
        }
        this.warehouseItemManagerService.onItemSelected
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(selected => {
                this.selected = selected;
            });

        this.printerInterval = setInterval(() => {
            this.printers = dymo.label.framework.getPrinters();
            if (this.selectedPrinter) {
                this.isPrinterConnected();
            }
        }, 3000);
    }
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
        clearInterval(this.printerInterval);
    }

    toggleExtraToFields(): void {
        this.showExtraToFields = !this.showExtraToFields;
    }
    // prints the label
    onPrint() {
        if (!this.isPrinterConnected) {
            return;
        }

        if (!this._data) {
            const label = dymo.label.framework
                .openLabelFile('http://s3-us-west-1.amazonaws.com/content.toolots.com/Template/ItemLabel-1.label');
            // const label = dymo.label.framework.openLabelFile('https://localhost:4200/assets/ItemLabel-1.label');
            // const label = dymo.label.framework.openLabelFile("C://code/internal/src/assets/ItemLabel-1.label");
            // load image from url and store as Base64
            // var image = dymo.label.framework.loadImageAsPngBase64("C://code/internal/src/assets/images/home-gear.png");
            label.setObjectText('SKU', this.selected.VendorSKU);
            label.setObjectText('Barcode', this.selected.TPIN);
            label.setObjectText('TPIN', this.selected.TPIN);
            label.print(this.selectedPrinter);
        }
        else {
            //const printer = dymo.label.framework.getLabelWriterPrinters()[0].modelName;

            // create label from XML file
            const label = dymo.label.framework
                .openLabelFile('http://s3-us-west-1.amazonaws.com/content.toolots.com/Template/ShippingLabel.label');

            // load image from url and store as Base64
            var image = dymo.label.framework.loadImageAsPngBase64(this._data.path);

            // overwrite image "Image" from XML label with loaded image
            label.setObjectText('Label', image);

            // print it
            label.print(this.selectedPrinter);
        }
    }
    isPrinterConnected(): boolean {
        const connected = this.printers.find(
            (printer) => this.selectedPrinter === printer.name && printer.isConnected
        );
        if (!connected) {
            
            this.selectedPrinter = null;
            return;
        }
        return !!connected;
    }
}
