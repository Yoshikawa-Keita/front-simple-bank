import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import {Auth} from "../components/Auth"
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
   <Layout title="Home">
     <Auth />
   </Layout>
  )
}

export default Home
