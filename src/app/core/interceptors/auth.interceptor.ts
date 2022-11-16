import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";

/**
 * 目前的方案没用到此拦截器.跨域时使用此拦截器增加身份验证token.
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        // add authorization token for full api requests
        if (request.url.includes('api') && this.auth.authenticated && this.auth.xAuthToken) {
            request = request.clone({
                // 根据着急的方案增加身份验证token,这里使用的是spring session 默认的"X-Auth-Token"作为key
                setHeaders: {'X-Auth-Token': this.auth.xAuthToken},
            });
        }
        return next.handle(request);
    }
}
