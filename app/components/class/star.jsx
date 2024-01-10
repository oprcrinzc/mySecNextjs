import React from 'react'
import styles from '/app/styles/page.module.css'

export function GhostClass(props) {
    return (
        <div className={styles.ghost}>{props.children}</div>
    )
}
export function HomeClass(props) {
    return (
      <div className={styles.home}>{props.children}</div>
    )
}
export function PanelClass(props) {
    return (
      <div className={styles.panel}>{props.children}</div>
    )
}
export function MainClass(props) {
    return (
      <div className={styles.main}>{props.children}</div>
    )
}