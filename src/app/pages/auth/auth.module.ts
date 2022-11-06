import {NgModule} from '@angular/core';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {SharedModule} from "../../shared/shared.module";
import {ResetPasswordComponent} from './reset-password/reset-password.component';


@NgModule({
    declarations: [
        LoginComponent,
        SignUpComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent
    ],
    imports: [
        SharedModule,
        AuthRoutingModule
    ]
})
export class AuthModule {
}
