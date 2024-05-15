import styles from "./authLink.module.css"
import React from 'react'
import Link from 'next/link'

const AuthLink = () =>
{
  const status = "notauthenticated"
  return (
  <>
    {status ==="notauthenticated" ? (
      <Link href="/login">Login</Link>
    ) : (
      <>
        <Link href="/write">Write</Link>
        <span className={styles.link}> Logout </span>
      </>
    )}
  </>
  );
    
  
}

export default AuthLink