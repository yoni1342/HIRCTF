import React from 'react'
import Nav from '../../../components/Nav'
import Founder from './components/Founder'
import Establishment from './components/Establishment'
import ScrollToTop from '../../../components/ScrollTop'
import Footer from '../../../components/Footer'

function Index() {
  return (
    <div>
        <div>
            <Nav name="about" />
        </div>
        <div>
            <Founder />
            <Establishment />
        </div>
        <Footer />
        <div>
        <ScrollToTop /> 
      </div>
    </div>
  )
}

export default Index