enum UiType {
    /** 功能模块. */
    MODULE,
    /** 页面. */
    PAGE,
    /** 页面元素：button、slider etc. */
    ELEMENT
}

/**
 * UI展现配置
 */
interface Ui {
    id?: string; // id
    uiType: UiType; // UI类型
    permit: string; // 权限
    title: string; // 页面显示标题/菜单显示标题
    cached?: boolean; // 是否支持路由器复用/是否缓存
}

interface NavItem extends Ui {
    icon?: string; // 图标
    path?: string; // 路由路径/外部链接地址
    externalLink?: boolean;// 是否时外部链接
    target?: string; // 外部链接打开方式：_blank | _self | _parent | _top
    shownInMenu?: boolean; // 是否在导航菜单中显示
    showInBreadcrumb?: boolean; // 是否在面包屑导航中显示
    expandable?: boolean; // 是否有子节点/是否可展开
    children?: NavItem[]; // 子节点
}

interface ElementItem extends Ui {
    icon?: string; // 图标
    path?: string; // 请求地址
}

export {UiType, Ui, NavItem, ElementItem}
