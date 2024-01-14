"use client"

import React, { useEffect, useState } from 'react'
import { getCookie, deleteCookie } from 'cookies-next';
import {user} from '/app/lib/user/get'

import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

// import Component
import {ButtonCompo, RegisterCompo, LoginCompo} from '/app/components/star'
import {HomeClass, GhostClass, PanelClass, MainClass} from '/app/components/class/star'


export default function page() {
    const [u, setU] = useState({})
    const router = useRouter()
    
    useEffect(()=>{
        // setInterval(()=>{
        //     alertHandler()
        // }, 1200)
        user().then((i)=>{
            setU(i)
        })
    }, [])
    // window.location = '/me'

    let content = (<></>)
    // if (u.isLogin){
    //     content = (
    //         <>
            // <HomeClass>
            //     <p>goto</p>
            //     <ButtonCompo text="me" onClick={()=>{router.push("me")}}/>
            // </HomeClass>
    //     </>
    //     )
    // } else {
    //     content = (
            // <>
            //     <HomeClass>
            //         <LoginCompo/>
            //     </HomeClass>
            //     <HomeClass>
            //         <RegisterCompo/>
            //     </HomeClass>
            // </>    
    //         )
    // }
    return (
        <GhostClass flexGrow={1}>
            {
                u.isLogin == true ? (<HomeClass flexGrow={1}>
                    <ButtonCompo text="me" onClick={()=>{router.push("me")}}/>
                </HomeClass>) : (<><HomeClass flexGrow={1}><LoginCompo /></HomeClass><HomeClass flexGrow={1}><RegisterCompo/></HomeClass></>)
            }
        </GhostClass>
    )
}
