import React from 'react'
import styles from '/app/styles/page.module.css'

export default function homeClass(props) {
  return (
    <div className={styles.home}>{props.children}</div>
  )
}
