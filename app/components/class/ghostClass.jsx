import React from 'react'
import styles from '/app/styles/page.module.css'

export default function GhostClass(props) {
  return (
    <div className={styles.ghost}>{props.children}</div>
  )
}
