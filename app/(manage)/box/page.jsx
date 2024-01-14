"use client"

import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'

// import Component
import {BoxCompo, CardCompo} from '/app/components/star'
import {HomeClass, GhostClass, ContentClass} from '/app/components/class/star'


export default function page() {
  const [boxes, setBoxes] = useState([])
  const router = useRouter()
  const updateBoxes = async() =>{
    try{
      fetch("/api/box/get")
    .then((r)=>{
      // console.log(r.text())
      r.text()
      .then((t)=>{
        let f = JSON.parse(t)
        if(f.msg=="none"){

        } else {
          setBoxes(f)
        }
      })
    })
    } catch(e){
      // console.log
    }
  }
  useEffect(()=>{
    updateBoxes()
  }, [])
  return (
      <GhostClass flexDirection="column" gap={0} flexGrow={1}>
        <HomeClass>
          <CardCompo flexGrow={0} flexDirection="column">
            <h1>Create Box</h1>
            <form action="api/box/create" method="post">
              <input type="text" name="name" id="name" />
              <input type="submit" value="Create" />
            </form>
          </CardCompo>
        </HomeClass>
        <HomeClass flexGrow={1} flexDirection="column">
          <CardCompo flexGrow={1} flexDirection="column" gap={1}>
            <h1>My Boxes</h1>
            <ContentClass flexGrow={0} flexDirection="row" gap={1}>
              {/* {boxes.forEach(i=>{
                return <h3>{i}</h3>
              })} */}
              {boxes.map((i, n)=>{
                return(
                  <BoxCompo flexGrow={0} cardBg={1} key={n} onClick={()=>{router.push(`box/${i.name}/`)}}>
                    <h3>{i.name}</h3>
                  </BoxCompo>
                )
              })}
            </ContentClass>
          </CardCompo>
        </HomeClass>
      </GhostClass>
  )
}
