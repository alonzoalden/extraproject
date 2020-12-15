import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatRipple } from '@angular/material/core';
import { AppService } from 'app/app.service';
import { Member } from 'app/shared/class/member';
import * as linkData from './shipments-dashboard.links.json';

@Component({
    selector: 'reports-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: fuseAnimations
})
export class ReportsDashboardComponent implements OnInit, OnDestroy {
    userInfo: Member;
    categories: any[];
    links: any[];
    linksFilteredByCategory: any[];
    filteredLinks: any[];
    currentCategory: string;
    searchTerm: string;
    searchEnabled: boolean;
    @ViewChild('matRipple') button: MatButton;
    warehouseButtonList = linkData.links;

    // Private
    private _unsubscribeAll: Subject<any>;
    constructor(
        private router: Router,
        private appService: AppService
    ) {
        // Set the defaults
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.searchEnabled = false;
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        // Subscribe/retreive Dashboard components
        this.filteredLinks = this.links = this.warehouseButtonList;

        this.appService.userInfo
            .subscribe((user: Member) => {
                if (!user.MemberID) {
                    return;
                }
                this.userInfo = user;
                
            });
        
    }
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    toggleSearch(): void {
        this.searchEnabled = !this.searchEnabled;
    }
    cancelSearch(): void {
        this.toggleSearch();
        this.searchTerm = '';
        this.filterLinksByTerm();
    }
    activateButtonRipple(item) {
        item.ripple.launch({ centered: true });
        setTimeout(() => {
            this.button._elementRef.nativeElement.click();
        }, 0);
    }
    goto(url) {
        this.router.navigate([url]);
    }
    filterLinksByTerm(): void {
        const searchTerm = this.searchTerm.toLowerCase();
        // Search
        if (searchTerm === '') {
            this.filteredLinks = this.links;
        }
        else {
            this.filteredLinks = this.links.filter((link) => {
                return link.title.toLowerCase().includes(searchTerm);
            });
        }
    }
}
