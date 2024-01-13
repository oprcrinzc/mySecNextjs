
import React from 'react'
import styles from '/app/styles/page.module.css'
import {PanelClass} from '/app/components/class/star'


export function ButtonCompo(props) {
    let onClick = props.onClick
    if(props.onClick=="goHome"){
       onClick = ()=>{
        
        const router = useRouter()
        router.push('/')
       } 
    }
  return (
    <p className={styles.button} onClick={onClick}>{props.text}</p>
  )
}

export function LoginCompo() {
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

export  function RegisterCompo() {
    return (
        <div className={styles.card}>
            <h1>Register</h1>
            <form action='api/register' method='post'>
                <label htmlFor="name">name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" required/>
                <input type="submit" value="OK" />
            </form>
        </div>
    )
}
  
export function CardCompo(props) {
    
    return (
        <div className={styles.card}>{props.children}</div>
    )
}

export function NavCompo(){
    {user().then((i)=>{
        i.isLogin == false ? <Link className={styles.button} id='r' href="/login" scroll={true}>Login</Link> : <Link className={styles.button} id='r' href="/me" scroll={true}>me</Link>
    })}
    return(
        <PanelClass>
            
        </PanelClass>
    )
}