import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Member } from './shared/class/member';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    wasLoggedIn: boolean;
    userInfo: BehaviorSubject<any>;
    member: Member;
    private apiURL = environment.webapiURL;
    warehouseMap = {
        1: 'Los Angeles',
        2: 'San Francisco',
        3: 'New York',
    };
    constructor(
        // private oauthService: OAuthService,
        private _httpClient: HttpClient
    ) {
        this.userInfo = new BehaviorSubject({});
    }
    get isLoggedin() {
        return true;
        // return (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken());
    }
    setWasLoggedIn() {
        this.wasLoggedIn = true;
    }
    getWasLoggedIn() {
        return this.wasLoggedIn;
    }
    logout() {
        // this.oauthService.logOut();
    }
    

    getAllMembers(): Observable<any> {
        return this._httpClient.get<any>(this.apiURL + '/member')
            .pipe(
                tap(data => {
                }),
                catchError(this.handleError)
            );
    }
    getCurrentMember(): any {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/member')
                .subscribe((response: any) => {
                    console.log(response)
                    //this.onFilesChanged.next(response);
                    //this.onFileSelected.next(response[0]);
                    this.userInfo.next(response);
                    resolve(response);
                }, reject);
        });
        // return this._httpClient.get<any>('member')
        //     .pipe(
        //         tap((data: Member) => {
        //             console.log(data)
        //             this.userInfo.next(data);
        //         }),
        //         catchError(this.handleError)
        //     );
    }
    getMember(id: string): Observable<any> {
        return this._httpClient.get<any>(this.apiURL + '/member/' + id)
            .pipe(
                tap(data => {
                }),
                catchError(this.handleError)
            );
    }
    editMemberLocation(user: Member): Observable<any> {
        return this._httpClient.put<any>(this.apiURL + '/member', user)
            .pipe(
                tap((data: Member) => {
                    this.userInfo.next(data);
                }),
                catchError(this.handleError)
            );
    }

    public playSound(type: string) {
        if (type === 'error') {
            let audio = new Audio();
            audio.src = '../assets/sounds/scan-beep-error.wav';
            audio.load();
            audio.play();
        }
        else {
            let audio = new Audio();
            audio.src = '../assets/sounds/scan-beep.wav';
            audio.load();
            audio.play();
        }
        
    }

    public onHandleError = (err: HttpErrorResponse) => {
        this.playSound('error');
        return this.handleError(err);
    }
    public handleError = (err: HttpErrorResponse) => {
        let errorMessage: string;
        if (err.error) {
            errorMessage = `${err.error.Message}`;
        } else {
            console.log(err);
            errorMessage = `Response error: ${err.error.Message}`;
        }
        return throwError(errorMessage);
    }
}
