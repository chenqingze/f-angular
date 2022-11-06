import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";

/**
 * 目前的方案没用到跨域时使用此拦截器.
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        // add authorization token for full api requests
        if (request.url.includes('api') && this.auth.authenticated) {
            request = request.clone({
                setHeaders: {'X-Auth-Token': "登录的时候从header获取token"},
            });
        }
        return next.handle(request);
    }
}
