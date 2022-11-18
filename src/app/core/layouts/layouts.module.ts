import {NgModule} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {VerticalNavComponent} from "./vertical-nav/vertical-nav.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {BlankLayoutComponent} from './blank-layout/blank-layout.component';
import {CommonLayoutComponent} from './common-layout/common-layout.component';
import {RouterLink, RouterOutlet} from "@angular/router";


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        VerticalNavComponent,
        NotFoundComponent,
        BlankLayoutComponent,
        CommonLayoutComponent
    ],
    imports: [
        MatIconModule,
        MatExpansionModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        AsyncPipe,
        MatButtonModule,
        RouterOutlet,
        NgIf,
        RouterLink,
        NgForOf,
        RouterLink,
    ]
})
export class LayoutsModule {
}
