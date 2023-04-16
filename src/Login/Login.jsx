import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Login.css?inline";


export function Login() {
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Login</h1>
            <div className={styles.footer}>
                <b className={styles.error}>Error</b>
                <button>Login btn</button>
                <p>Crear cuenta
                <span><Link to='/registro'>Ir</Link></span>
                </p>

            </div>
        </div>

    
    </div>
  )
}
