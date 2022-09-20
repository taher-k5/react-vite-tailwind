import React from 'react'
import { Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Testimonials } from '../components'
import style from '../style'

const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden p-2">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home