import React from 'react'
import Nav from '../../components/Nav'
import Introduction from './components/introduction'
import Founder from './components/Founder'
import Establishment from './components/Establishment'
import Footer from '../../components/Footer'
export default function index() {
  return (
    <div>
        <div>
            <Nav name="about" />
        </div>
        <div>
            <Introduction />
            <Founder />
            <Establishment />
        </div>
        <Footer />
    </div>
  )
}
