import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import { Auth } from '../components/Auth'
import styles from '../styles/Home.module.css'
import UserInfo from 'components/UserInfo'
import { Main } from 'next/document'

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      
      <UserInfo />
    </Layout>
  )
}

export default Home
