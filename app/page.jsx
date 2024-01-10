"use client"

import Image from 'next/image'
import styles from '/app/styles/page.module.css'
import { useRouter } from 'next/navigation'

import {ButtonCompo} from '/app/components/star'
import {HomeClass, GhostClass, PanelClass, MainClass} from '/app/components/class/star'

export default function Home() {
  const router = useRouter()
  return (
    <MainClass>
      <HomeClass>
        <ButtonCompo text="Login" onClick={()=>{router.push("/login")}}/>
      </HomeClass>
    </MainClass>
  )
}
