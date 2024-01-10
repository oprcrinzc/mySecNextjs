"use client"

import React, { useEffect, useState } from 'react'
import { FormEvent } from 'react'
// import Alert from './app/components/alert'
import AlertHandler from '../components/alertHandler'
import styles from '/app/styles/page.module.css'
import { getCookie, deleteCookie } from 'cookies-next';
import user from '../lib/user'

import clsx from 'clsx'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

// import Component
import {ButtonCompo, RegisterCompo, LoginCompo} from '/app/components/star'
import {HomeClass, GhostClass, PanelClass, MainClass} from '/app/components/class/star'

export default function page() {
    const router = useRouter()
    const [hasAlert, setHasAlert] = useState(false)
    const alertHandler = async () => {
        let getc = getCookie("alert")
        try {
            if (typeof(getc) == "string"){
                let json = await (JSON.parse(getc))
                let iconx
                console.log(json.code)
                switch (json.code){
                    case 0:
                        iconx = "success"
                        break;
                    case 1:
                        iconx = "warning"
                        break;
                    default:
                        iconx = "question"
                }
                console.log(JSON.parse(getc))
                await Swal.fire({
                    title: json.title,
                    text: json.text,
                    icon: iconx ,
                    confirmButtonText: 'ok'
                })
                await deleteCookie('alert')
            }
        } catch (e){
            console.log('errorrrr')
            setHasAlert(false)
        }
    }
    useEffect(()=>{
        setInterval(()=>{
            alertHandler()
            if(user.isLogin == true) router.push('/me')
        }, 1000)
    })
    return (
    <MainClass>
        <PanelClass>
            <ButtonCompo text='Home' onClick={()=>{router.push("/")}}/>
        </PanelClass>
        <GhostClass>
            <HomeClass>
                <LoginCompo/>
            </HomeClass>
            <HomeClass>
                <RegisterCompo/>
            </HomeClass>
        </GhostClass>
    </MainClass>
    )
}
