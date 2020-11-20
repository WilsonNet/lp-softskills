import React from 'react'
import '../styles/global.css'
import Header from '../components/Header'
import Meat from '../components/Meat'

export default function Home() {
  return (
    <div className="min-h-screen flex-col  bg-hero-pattern bg-cover bg-gray-900">
      <Header />
      <Meat />
    </div>
  )
}
