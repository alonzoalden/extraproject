import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
// import { OAuthService } from 'angular-oauth2-oidc';
import { AppService } from 'app/app.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LandingPageComponent {
    componentActive: boolean = true;
    appLoading: boolean = true;
    loadAPI: Promise<any>;
    id: any;
    member: any;
    constructor(
        private _fuseConfigService: FuseConfigService,
        public _fuseSplashScreenService: FuseSplashScreenService,
        // private oauthService: OAuthService,
        public appService: AppService
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    login() {
        // this.oauthService.initImplicitFlow();
    }
    ngOnInit() {
        // this.userStore.pipe(
        //     select(fromUser.getCurrentUser),
        //     takeWhile(() => this.componentActive)
        // ).subscribe(
        //     (member: Member) => {
        //         this.member = member;
        //         if (member && this.isLoggedin) {
        //             if (member.IsPM) {
        //                 this.router.navigate(['/PM']);
        //             }
        //             else {
        //                 this.router.navigate(['/dashboard']);
        //             }
        //         }
        //     }
        // );
        // this.userStore.pipe(
        //     select(fromUser.getIsLoading),
        //     takeWhile(() => this.componentActive)
        // ).subscribe(
        //     (loading: boolean) => {
        //         if (!loading) {
        //             this.appLoading = loading;
        //         }
        //     }
        // );

        // this.oauthService.events.subscribe(e => {
        //     if (e.type === 'token_received') {
        //         this.appService.setWasLoggedIn();
        //         this.getCurrentMemberAndRedirectToDashboard();
        //     }
        // });
    }

    ngOnDestroy() {
        this.componentActive = false;
    }

    detectBrowser() {
        const isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
    }
    getCurrentMemberAndRedirectToDashboard() {
        // this.appService.getCurrentMember().subscribe((member: Member) => {
        //     if (member && this.isLoggedin) {
        //         if (member.IsPM) {
        //             this.router.navigate(['/PM']);
        //         }
        //         else {
        //             this.router.navigate(['/dashboard']);
        //         }
        //     }
        // });
    }

    get isLoggedin() {
        // return (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken());
        return false;
    }

    // get givenName() {
    //     const claims = this.oauthService.getIdentityClaims();
    //     if (!claims) {
    //         return null;
    //     }
    //     return claims['given_name'];
    // }

    // get familyName() {
    //     const claims = this.oauthService.getIdentityClaims();
    //     if (!claims) {
    //         return null;
    //     }
    //     return claims['family_name'];
    // }

    
    logout() {
        //this.oauthService.logOut();
    }

    scrollToElement($element): void {
        $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
}
