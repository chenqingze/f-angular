import {NgModule} from '@angular/core';

import {OrgRoutingModule} from './org-routing.module';
import {OrgComponent} from './org.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
    declarations: [
        OrgComponent
    ],
    imports: [
        SharedModule,
        OrgRoutingModule
    ]
})
export class OrgModule {
}
