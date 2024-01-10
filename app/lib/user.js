import { getCookie, deleteCookie } from 'cookies-next';
import { useSession } from 'next-auth/react';

const user = async () =>{
    const { data, status } = useSession()
    let cookie = getCookie('alert')
    let isLogin = false
    
    return {
        isLogin: isLogin
    }
}

export default user