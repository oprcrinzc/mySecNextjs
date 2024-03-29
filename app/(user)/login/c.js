"use client"

import React, { useEffect, useState } from 'react'
import styles from '/app/styles/page.module.css'
import { getCookie, deleteCookie } from 'cookies-next';
import {user} from '../lib/user'

import clsx from 'clsx'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

// import Component
import {ButtonCompo, RegisterCompo, LoginCompo} from '/app/components/star'
import {HomeClass, GhostClass, PanelClass, MainClass} from '/app/components/class/star'


export default function page() {
    const [u, setU] = useState({})
    const router = useRouter()
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
                setTimeout(()=>{deleteCookie('alert')}, 0)
            }
        } catch (e){
            console.log('errorrrr')
            setHasAlert(false)
        }
    }
    useEffect(()=>{
        setInterval(()=>{
            alertHandler()
        }, 1000)
        user().then((i)=>{
            setU(i)
        })
    }, [])
    return (
        <GhostClass>
            <HomeClass></HomeClass>
        </GhostClass>
    )
}
