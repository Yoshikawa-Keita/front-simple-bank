import { RegisterUser } from "components/RegisterUser"
import { Layout } from "components/Layout"
import { NextPage } from "next"
import React from "react"

const register: NextPage = () => {
    return (
      <Layout title="Register">
        <RegisterUser />
      </Layout>
    )
  }
  
  export default register
  