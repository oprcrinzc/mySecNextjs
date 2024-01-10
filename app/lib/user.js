import { getCookie, deleteCookie } from 'cookies-next';
import { useSession } from 'next-auth/react';

const user = async () =>{
    const [ session, loading ] = useSession()
    // let cookie = getCookie('alert')
    // let isLogin = false
    
    console.log(loading)
    if(session){
        console.log(session.user.name)
    }

    // return {
    //     isLogin: isLogin
    // }
}

export default user