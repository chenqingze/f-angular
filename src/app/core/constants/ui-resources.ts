import {NavItem, UiType} from "../../model/ui";

const menu: NavItem[] = [
    {
        title: '仪表盘',
        icon: 'speed',
        path: 'dashboard',
        uiType: UiType.PAGE,
        permit: ''
    },
    {
        title: '系统管理',
        icon: 'settings',
        uiType: UiType.MODULE,
        permit: '',
        children: [
            {
                title: '用户管理',
                icon: 'person',
                path: 'system/user',
                uiType: UiType.PAGE,
                permit: ''
            },
            {
                title: '角色管理',
                icon: 'people',
                path: 'system/role',
                uiType: UiType.PAGE,
                permit: ''
            },
            {
                title: '组织管理',
                icon: 'device_hub',
                path: 'system/org',
                uiType: UiType.PAGE,
                permit: ''
            },
            {
                title: '岗位管理',
                icon: 'assignment_ind',
                path: 'system/position',
                uiType: UiType.PAGE,
                permit: ''
            },
            {
                title: '字典管理',
                icon: 'library_books',
                path: 'system/dict',
                uiType: UiType.PAGE,
                permit: ''
            },
            {
                title: '任务调度',
                icon: 'manage_history',
                path: 'system/task',
                uiType: UiType.PAGE,
                permit: ''
            }
        ]
    }
];
const element: [] = []

export {menu, element}
