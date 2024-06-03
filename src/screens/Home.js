import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Craousel from '../components/Craousel'

export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Craousel/></div>
      <div><Cards /></div>
      <div><Footer /></div>
    </div>
  )
}
