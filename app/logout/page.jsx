'use client'

import { useRouter } from "next/navigation"
import {u, logout} from '/app/lib/user'
import { getCookie, deleteCookie } from 'cookies-next';
import { useEffect } from "react";

export default function GET(){
    useEffect(()=>{
        deleteCookie('name')
    },[])
    const r = useRouter()
    r.push('/')
}