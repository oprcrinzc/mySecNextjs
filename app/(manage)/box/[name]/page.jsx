import React from 'react'

import {ButtonCompo, CardCompo, } from '/app/components/star'
import {HomeClass, GhostClass, HeadClass} from '/app/components/class/star'


export default function page({params}) {
  return (
    <GhostClass flexGrow={1} flexDirection="column">
        <HomeClass padding={0}>
            <HeadClass><h1>{params.name}</h1></HeadClass>
            <ButtonCompo bg="green" text="Add"/>
            <ButtonCompo bg="red" text="Delete"/>
        </HomeClass>
        <HomeClass flexGrow={1}>
            {/* <CardCompo><h1>{params.name}</h1></CardCompo> */}
        </HomeClass>
    </GhostClass>
  )
}
