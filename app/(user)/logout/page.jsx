'use client'

import { useRouter } from "next/navigation"
import { deleteCookie } from 'cookies-next';
import { useEffect } from "react";

export default function GET(){
    useEffect(()=>{
        deleteCookie('name')
    },[])
    const r = useRouter()
    r.push('/')
}