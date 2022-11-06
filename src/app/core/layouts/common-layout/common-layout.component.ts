import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable, shareReplay} from "rxjs";
import {map} from "rxjs/operators";
import {NavItem} from "../../../model/nav-item";
import {menu} from "../../constants/menu";

@Component({
    selector: 'app-common-layout',
    templateUrl: './common-layout.component.html',
    styleUrls: ['./common-layout.component.scss']
})
export class CommonLayoutComponent implements OnInit {
    menu: NavItem[] = menu;
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => {
                console.log('========', result);
                return result.matches
            }),
            shareReplay()
        );

    constructor(private breakpointObserver: BreakpointObserver) {
    }

    ngOnInit(): void {
        this.isHandset$.subscribe(re => console.log(re));
    }

    // @HostListener('window:resize', ['$event.target.innerWidth'])
    // onResize(width: number, height: number) {
    //
    // }

}
