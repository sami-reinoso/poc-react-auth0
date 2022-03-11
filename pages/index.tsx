import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { useAuth0 } from "@auth0/auth0-react"
import Profile from './Profile'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      { <LoginButton></LoginButton> }
      { <LogoutButton></LogoutButton> }
      { <Profile></Profile> }
    </div>
  )
}

export default Home
