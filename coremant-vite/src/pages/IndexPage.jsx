import React from 'react'
import { AboutUs } from '../components/aboutUs/AboutUs'
import { Banner } from '../components/banner/Banner'
import { Personal } from '../components/personal/Personal'

export const IndexPage = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Personal />
    </div>
  )
}