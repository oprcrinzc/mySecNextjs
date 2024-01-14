import React from 'react'
import styles from '/app/styles/page.module.css'
import {calcClass} from '/app/lib/components/calcClass'

export function GhostClass(props) {
  let addClass = calcClass(props)
    return (
        <div className={`${styles.ghost} ${addClass}`}>{props.children}</div>
    )
}
export function HomeClass(props) {
  let addClass = calcClass(props)
    return (
      <div className={`${styles.home} ${addClass}`}>{props.children}</div>
    )
}
export function PanelClass(props) {
  let addClass = calcClass(props)
    return (
      <div className={`${styles.panel} ${addClass}`}>{props.children}</div>
    )
}
export function MainClass(props) {
  let addClass = calcClass(props)
    return (
      <div className={`${styles.main} ${addClass}`}>{props.children}</div>
    )
}
export function ContentClass(props) {
  let addClass = calcClass(props)
    return (
        <div className={`${styles.content} ${addClass}`}>{props.children}</div>
    )
}
export function HeadClass(props) {
  let add = calcClass(props)
  return (
      <div className={`${styles.head} ${add}`} id={props.id}>{props.children}</div>
  )
}