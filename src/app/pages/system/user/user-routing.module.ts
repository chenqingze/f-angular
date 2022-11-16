import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {AddComponent} from "./add/add.component";
import {DetailComponent} from "./detail/detail.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'add', component: AddComponent},
    {path: 'detail', component: DetailComponent},
    {path: 'edit', component: EditComponent},
    {path: 'index', component: IndexComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
