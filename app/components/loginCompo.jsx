import React from 'react'
import styles from '/app/styles/page.module.css'

export default function LoginCompo() {
  return (
    <div className={styles.card}>
        <h1>login</h1>
        <form action='api/login' method='post'>
            <label htmlFor="name">name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" required/>
            <input type="submit" value="login" />
        </form>
    </div>
  )
}
