import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HttpApi} from "../constants/http-api";
import {LocalStorageService} from "./local-storage.service";
import {finalize, Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {UserDetails} from "../../model/user-details";
import {SignUpRequest} from "../../model/sign-up";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    readonly LOCAL_STORAGE_KEY_AUTHENTICATED = 'AUTHENTICATED';
    readonly LOCAL_STORAGE_KEY_X_AUTH_TOKEN = 'X_AUTH_TOKEN';
    readonly LOCAL_STORAGE_KEY_USER_DETAILS = 'USER_DETAILS';

    get authenticated(): boolean {
        console.log("=======authenticated==========", !!this.localStorageService.getItem(
            this.LOCAL_STORAGE_KEY_AUTHENTICATED
        ));
        return !!this.localStorageService.getItem(
            this.LOCAL_STORAGE_KEY_AUTHENTICATED
        );
    }

    get xAuthToken(): string | null {
        const xAuthToken = this.localStorageService.getItem(this.LOCAL_STORAGE_KEY_X_AUTH_TOKEN)
        if (!xAuthToken) {
            return null;
        }
        return JSON.stringify(xAuthToken);
    }

    get userDetails(): Observable<UserDetails> {
        // send current user or load data from backend using token
        return this.loadUser();
    }

    login(credentials: any, callback?: Function) {
        const headers = new HttpHeaders(
            credentials ? {authorization: "Basic " + btoa(credentials.username + ":" + credentials.password)} : {}
        );
        this.http
            // .get(HttpApi.me, {headers: headers, observe: 'response'})
            .get(HttpApi.me, {headers: headers})
            .subscribe((response) => {
                if (response) {
                    console.debug("=================>", response);
                    this.localStorageService.setItem(
                        this.LOCAL_STORAGE_KEY_AUTHENTICATED,
                        true
                    );
                    // todo: 如果使用token的方式，保存x-auth-token
                    // this.localStorageService.setItem(
                    //     this.LOCAL_STORAGE_KEY_X_AUTH_TOKEN,
                    //     true
                    // );
                } else {
                    this.localStorageService.clear();
                }
                return callback && callback();
            });
    }

    logout(callback?: Function) {
        this.http
            .post(HttpApi.logout, {})
            .pipe(
                finalize(() => {
                    this.clearAuthenticated();
                    this.router.navigateByUrl("/auth/login");
                })
            )
            .subscribe(callback && callback());
    }

    signup(data: SignUpRequest) {
        // return this.http.post(HttpApi.signup, data)
        //     .pipe(
        //         map((res: { user: any, token: string }) => {
        //             this.user = res.user;
        //             localStorage.setItem(tokenName, res.token);
        //             // only for example
        //             localStorage.setItem('username', res.user.username);
        //             localStorage.setItem('email', res.user.email);
        //             this.isLogged$.next(true);
        //             return this.user;
        //         }));
    }


    private loadUser(): Observable<UserDetails> {
        const userDetails = this.localStorageService.getItem(this.LOCAL_STORAGE_KEY_USER_DETAILS) as UserDetails;
        return of(userDetails);
    }

    private clearAuthenticated(): void {
        this.localStorageService.removeItem(
            this.LOCAL_STORAGE_KEY_AUTHENTICATED
        );
    }

    constructor(
        private router: Router,
        private http: HttpClient,
        private localStorageService: LocalStorageService
    ) {
    }
}
