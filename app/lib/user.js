import { getCookie, deleteCookie } from 'cookies-next';
// import { useSession } from 'next-auth/react';

// const usera = async () =>{
//     const [ session, loading ] = useSession()
//     let cookie = getCookie('name')
//     let isLogin = cookie.name == true ? true : false
    
//     // console.log(loading)
//     // if(session){
//     //     console.log(session.user.name)
//     // }

//     // return {
//     //     isLogin: isLogin
//     // }
// }

// const user = class {
//     constructor(){
//         this.cookieName = getCookie('name')
//         let isLogin = this.cookieName != null ? true : false
//         this.name = isLogin == true ? this.cookieName : null
//         this.isLogin = isLogin
//     }
//     async logout(){
//         console.log("logout")
//         this.isLogin = false
//         this.cookieName = null
//         await deleteCookie('name')
//         console.log(this.name)
//         console.log(this.isLogin)
//     }
// }

// const u = new user()



export const user = async() => {
    const cookie = getCookie('name')
    let name = cookie
    let isLogin = name != null ? true : false
    
    return {
        name: name,
        isLogin: isLogin
    }
}

export function logout(){
    deleteCookie("name")
}