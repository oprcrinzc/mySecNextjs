import { getCookie, deleteCookie } from 'cookies-next';
// import { useSession } from 'next-auth/react';

const usera = async () =>{
    const [ session, loading ] = useSession()
    let cookie = getCookie('name')
    let isLogin = cookie.name == true ? true : false
    
    // console.log(loading)
    // if(session){
    //     console.log(session.user.name)
    // }

    // return {
    //     isLogin: isLogin
    // }
}

const user = class {
    constructor(){
        let cookieName = getCookie('name')
        let isLogin = cookieName != null ? true : false
        this.name = isLogin == true ? cookieName : null
        this.isLogin = isLogin
    }
}

export default user