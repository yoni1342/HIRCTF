import React from 'react'
import Nav from '../../../components/Nav'
import Introduction from './components/introduction'
import Footer from '../../../components/Footer'
import ScrollToTop from '../../../components/ScrollTop'
export default function index() {
  return (
    <div>
        <div>
            <Nav name="about" />
        </div>
        <div>
            <Introduction />
        </div>
        <Footer />
        <div>
        <ScrollToTop /> 
      </div>
    </div>
  )
}
