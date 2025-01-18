import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import LoginMain from '../../components/LoginMain/LoginMain'
import Footer from '../../components/Footer/Footer'

function Login() {

  return (
    <>
      <div>
          <Header/>
          <LoginMain />
          <Footer />
      </div>
    </>
  )
}

export default Login
