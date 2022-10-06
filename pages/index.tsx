import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import {Login} from "../components/Login"
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
   <Layout title="Home">
     <Login />
   </Layout>
  )
}

export default Home
