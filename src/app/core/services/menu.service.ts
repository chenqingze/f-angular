import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Menu {
    /** Text of ui item, can be choose one of  `text` or `i18n` (Support HTML) */
    text?: string;
    /** I18n key of ui item, can be choose one of  `text` or `i18n` (Support HTML) */
    i18n?: string;
    /** Whether to display the group name, default: `true` */
    group?: boolean;
    /** Routing for the ui item, can be choose one of `link` or `externalLink` */
    link?: string;
    /** External link for the ui item, can be choose one of `link` or `externalLink` */
    externalLink?: string;
    /** Specifies `externalLink` where to display the linked URL */
    target?: '_blank' | '_self' | '_parent' | '_top';
    /** Icon for the ui item, only valid for the first level ui */
    icon?: string | null;
    /** Badget for the ui item when `group` is `true` */
    badge?: number;
    /** Whether to display a red dot instead of `badge` value */
    badgeDot?: boolean;
    /** Badge [color](https://ng.ant.design/components/badge/en#nz-badge) */
    badgeStatus?: 'success' | 'processing' | 'default' | 'error' | 'warning';
    /** Whether disable for the ui item */
    disabled?: boolean;
    /** Whether hidden for the ui item */
    hide?: boolean;
    /** Whether hide in breadcrumbs, which are valid when the `page-header` component automatically generates breadcrumbs */
    hideInBreadcrumb?: boolean;
    /** ACL configuration, it's equivalent to `ACLService.can(roleOrAbility: ACLCanType)` parameter value */
    // acl?: ACLCanType;
    /** Whether shortcut ui item */
    shortcut?: boolean;
    /** Whether shortcut ui root node */
    shortcutRoot?: boolean;
    /** Whether to allow reuse, need to cooperate with the `reuse-tab` component */
    reuse?: boolean;
    /**
     * Whether to expand, when `checkStrictly` is valid in `sidebar-nav` component
     */
    open?: boolean;
    /** Unique identifier of the ui item, can be used in `getItem`,` setItem` to update a ui */
    key?: string;
    /** Children ui of ui item */
    children?: Menu[];
}

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    constructor(private httpClient: HttpClient) {
    }
}
