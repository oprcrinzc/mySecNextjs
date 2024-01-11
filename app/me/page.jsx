"use client"

import React, { useEffect , useState} from 'react'
import { useRouter } from 'next/navigation'
import {user} from '../lib/user'
import styles from '/app/styles/page.module.css'

// import Component
import {ButtonCompo, RegisterCompo, LoginCompo, CardCompo} from '/app/components/star'
// const [ButtonCompo, RegisterCompo, LoginCompo, CardCompo] = dynamic(()=>import('/app/components/star'), {ssr:false}) 
import {HomeClass, GhostClass, PanelClass, MainClass} from '/app/components/class/star'


export default function page() {
  const [u, setU] = useState({})
  const router = useRouter()
  const [name, setName] = useState('');
  useEffect(()=>{
    user().then((i)=>{
      setU(i)
  })
  },[])
  return (
    <HomeClass>
      <CardCompo>
        <h1>Information</h1>
        <div className="content">
          <h3>name</h3><p>{u.name}</p>
        </div>
        <div className={styles.actions}>
          <ButtonCompo text="Logout" onClick={()=>{router.push('/logout')}}/>
        </div>
      </CardCompo>
    </HomeClass>
    
  )
}
