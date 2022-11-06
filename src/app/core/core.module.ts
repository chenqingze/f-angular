import {NgModule, Optional, SkipSelf} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule,} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {throwIfAlreadyLoaded} from "./guards/module-import.guard";
import {LoggingInterceptor} from "./interceptors/logging.interceptor";
import {ErrorInterceptor} from "./interceptors/error.interceptor";
import {XhrInterceptor} from "./interceptors/xhr.interceptor";
import {XsrfInterceptor} from "./interceptors/xsrf.interceptor";
import {LayoutsModule} from "./layouts/layouts.module";

const interceptors = [
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: XsrfInterceptor, multi: true}
];

@NgModule({
    declarations: [],
    imports: [
        // angular
        HttpClientModule,
        HttpClientXsrfModule,
        RouterModule,
        // the third party
        // custom
        LayoutsModule
    ],
    providers: [...interceptors],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
        throwIfAlreadyLoaded(parentModule, "CoreModule");
    }
}
