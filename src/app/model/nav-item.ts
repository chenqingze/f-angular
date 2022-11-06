import {UiType} from "./ui-type";

export interface NavItem {
    uiType: UiType; // 导航类型
    title: string; // 页面显示标题/菜单显示标题
    icon?: string; // 图标
    path?: string; // 路由路径/外部链接地址
    externalLink?: boolean;// 是否时外部链接
    target?: string;// 外部链接打开方式：_blank | _self | _parent | _top
    children?: NavItem[];
}
