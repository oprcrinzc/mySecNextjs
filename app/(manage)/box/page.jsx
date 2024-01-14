import React from 'react'

// import Component
import {ButtonCompo, RegisterCompo, LoginCompo, CardCompo} from '/app/components/star'
import {HomeClass, GhostClass, PanelClass, MainClass} from '/app/components/class/star'


export default function page() {
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
          <CardCompo flexGrow={1} flexDirection="column">
            <h1>My Boxes</h1>
          </CardCompo>
        </HomeClass>
      </GhostClass>
  )
}
