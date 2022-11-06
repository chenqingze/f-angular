import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
    {path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)},
    {path: 'role', loadChildren: () => import('./role/role.module').then(m => m.RoleModule)},
    {path: 'org', loadChildren: () => import('./org/org.module').then(m => m.OrgModule)},
    {
        path: 'position',
        loadChildren: () => import('./position/position.module').then(m => m.PositionModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule {
}
