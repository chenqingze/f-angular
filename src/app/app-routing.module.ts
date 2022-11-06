import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonLayoutComponent} from "./core/layouts/common-layout/common-layout.component";
import {BlankLayoutComponent} from "./core/layouts/blank-layout/blank-layout.component";
import {NotFoundComponent} from "./core/layouts/not-found/not-found.component";

const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {
        path: '',
        component: CommonLayoutComponent,
        // canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
            },
            {path: 'system', loadChildren: () => import('./pages/system/system.module').then(m => m.SystemModule)},

            {path: '**', component: NotFoundComponent}
        ]
    },
    {
        path: "auth",
        component: BlankLayoutComponent,
        loadChildren: () => import("./pages/auth/auth.module").then((m) => m.AuthModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
