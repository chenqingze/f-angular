import {NavItem} from "../../model/nav-item";
import {UiType} from "../../model/ui-type";

export const menu: NavItem[] = [
    {
        title: '仪表盘',
        icon: 'speed',
        path: 'dashboard',
        uiType: UiType.PAGE
    },
    {
        title: '系统管理',
        icon: 'settings',
        uiType: UiType.MODULE,
        children: [
            {
                title: '用户管理',
                icon: 'person',
                path: 'system/user',
                uiType: UiType.PAGE
            },
            {
                title: '角色管理',
                icon: 'people',
                path: 'system/role',
                uiType: UiType.PAGE
            },
            {
                title: '组织管理',
                icon: 'device_hub',
                path: 'system/org',
                uiType: UiType.PAGE
            },
            {
                title: '岗位管理',
                icon: 'assignment_ind',
                path: 'system/position',
                uiType: UiType.PAGE
            },
            {
                title: '字典管理',
                icon: 'library_books',
                path: 'system/dict',
                uiType: UiType.PAGE
            },
            {
                title: '任务调度',
                icon: 'manage_history',
                path: 'system/task',
                uiType: UiType.PAGE
            }
        ]
    },
    {
        title: '系统管理',
        icon: 'settings',
        uiType: UiType.MODULE,
        children: [
            {
                title: '用户管理',
                icon: 'person',
                path: 'system/user',
                uiType: UiType.PAGE
            },
            {
                title: '角色管理',
                icon: 'people',
                path: 'system/role',
                uiType: UiType.PAGE
            },
            {
                title: '组织管理',
                icon: 'device_hub',
                path: 'system/org',
                uiType: UiType.PAGE
            },
            {
                title: '岗位管理',
                icon: 'assignment_ind',
                path: 'system/position',
                uiType: UiType.PAGE
            },
            {
                title: '字典管理',
                icon: 'library_books',
                path: 'system/dict',
                uiType: UiType.PAGE
            },
            {
                title: '任务调度',
                icon: 'manage_history',
                path: 'system/task',
                uiType: UiType.PAGE
            }
        ]
    },
]
