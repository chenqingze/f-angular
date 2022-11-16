import {Component, Input, OnInit} from '@angular/core';
import {NavItem} from "../../../model/ui";

@Component({
    selector: 'app-vertical-nav',
    templateUrl: './vertical-nav.component.html',
    styleUrls: ['./vertical-nav.component.scss']
})
export class VerticalNavComponent implements OnInit {
    @Input() navItem!: NavItem;

    constructor() {

    }

    ngOnInit(): void {
        console.log('============>', this.navItem);
    }

}
