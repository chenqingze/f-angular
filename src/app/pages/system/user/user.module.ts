import {NgModule} from '@angular/core';

import {UserRoutingModule} from './user-routing.module';
import {SharedModule} from "../../../shared/shared.module";
import {IndexComponent} from './index/index.component';
import {EditComponent} from './edit/edit.component';
import {AddComponent} from './add/add.component';
import {DetailComponent} from './detail/detail.component';


@NgModule({
    declarations: [
        IndexComponent,
        EditComponent,
        AddComponent,
        DetailComponent
    ],
    imports: [
        SharedModule,
        UserRoutingModule
    ]
})
export class UserModule {
}
