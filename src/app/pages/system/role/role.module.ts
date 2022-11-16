import {NgModule} from '@angular/core';

import {RoleRoutingModule} from './role-routing.module';
import {SharedModule} from "../../../shared/shared.module";
import {DetailComponent} from './detail/detail.component';
import {AddComponent} from './add/add.component';
import {IndexComponent} from './index/index.component';
import {EditComponent} from './edit/edit.component';


@NgModule({
    declarations: [
        DetailComponent,
        AddComponent,
        IndexComponent,
        EditComponent
    ],
    imports: [
        SharedModule,
        RoleRoutingModule
    ]
})
export class RoleModule {
}
