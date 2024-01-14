import { getCookie, deleteCookie } from 'cookies-next';
export function logout(){
    deleteCookie("name")
}