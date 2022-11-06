import {CONFIG} from "./config";

const baseUrl = CONFIG.API_BASE_URL;
export const HttpApi = {
    testGet: `${baseUrl}/demo/getTest`,
    testPost: `${baseUrl}/demo/postTest`,
    signup: `${baseUrl}/signup`,
    login: `${baseUrl}/login`,
    me: `${baseUrl}/iam/me`,
    logout: `${baseUrl}/logout`,
    menus: `${baseUrl}/menus`,
    permission: `${baseUrl}/permissions`,
    dept: `${baseUrl}/depts`,
    role: `${baseUrl}/roles`,
};
