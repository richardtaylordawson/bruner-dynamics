import React from "react"

// Core
import * as Core from "./../../core/"

// Layout
import MainLayout from "./../layouts/main-layout"

import SEO from "./../components/seo"

// Images
import StarsBg from "../images/stars-bg.png"
import DevicesImg from "../images/devices.png"
import SatelliteImg from "../images/satellite.png"

// Theme
import { colors } from "../theme";

const IndexPage = () => (
  <MainLayout>
    <SEO
      title="Home"
      keywords={[`bruner`, `internet`, `high-speed`]}
    />
    <Core.BasicContent bgImage={StarsBg}>
      <h1>Discover Brüner Satellite<br/>Internet Bundles</h1>
      <p className={`${Core.HelperClasses.textWhite} ${Core.HelperClasses.textCenter}`}>Jimmy B is here to make the world a better place, one connection at a time.</p>
    </Core.BasicContent>
    <Core.SideBySide
      img={DevicesImg}
      imgAlt="Devices"
      bgColor={colors.gray}
    >
      <h3>We’re Here to Brand Everything, Everywhere, Anytime</h3>
      <p>Flat screen tv? Wireless device? Tablet? Laptop? We can put our brand image on all of them. We can do it whenever we want, but mostly you’ll see our logo on your screen when you’re experiencing technical difficulties. This way, you will associate  our brand with some of your most emotional moments.</p>
    </Core.SideBySide>
    <Core.BasicContent bgColor={colors.blue}>
      <h3 className={`${Core.HelperClasses.textWhite} ${Core.HelperClasses.textCenter}`}>Get Connected With Brüner Dynamics Today.</h3>
    </Core.BasicContent>
    <Core.SideBySide
      img={SatelliteImg}
      imgAlt="Satellite"
    >
      <h2 className={`${Core.HelperClasses.textLeft}`}>What is a Brüner?</h2>
      <p>You might as well ask what salt tastes like or how water feels. Until you’ve interacted with a Brüner first hand, you can only imagine how great you’ll feel. A warm handshake, a compliment, a rubix cube coaching session, or just a chat about your weekend will leave you feeling better about your self and the world in general.</p>
      <p>Brüner Dynamics is on course to change the world:</p>
      <ul>
        <li>98% of Americans have never hung out with Jimmy. That’s about to change. With satellite technology, you can hang with him all day, every day.</li>
        <li>You’ve probably seen our ambiguous guerilla marketing stickers plasterd at various locations from laptops to street lamps.</li>
      </ul>
    </Core.SideBySide>
    <Core.BasicContent bgColor={colors.gray}>
      <h2>Equipment</h2>
      <p>When you sign up for Brüner Dynamics, we make it easy to get connected. We’ll send a professional technician named Ralph to install your new dish in an optimal location and set up your wifi router inside your home.</p>
      <Core.Columns>
        <Core.Card headerColor={colors.blue}>
          <h3 className={Core.HelperClasses.textWhite}>Test</h3>
          <p>To access Brüner you’ll need a Brüner Satellite Dish. Jimmy’s cousin Ralph will test for the best installation location and install the dish on your abode. He’ll probably stay for dinner.</p>
        </Core.Card>
        <Core.Card headerColor={colors.blue}>
          <h3 className={Core.HelperClasses.textWhite}>test</h3>
          <p>To access Brüner you’ll need a Brüner Satellite Dish. Jimmy’s cousin Ralph will test for the best installation location and install the dish on your abode. He’ll probably stay for dinner.</p>
        </Core.Card>
      </Core.Columns>
    </Core.BasicContent>
    <Core.BasicContent>
      <h2>Brüner Dynamics FAQs</h2>
      <Core.Accordion>
        <h2>This is some text</h2>
        <div>
          <p>asdfads</p>
          <p>asdfads</p>
          <p>asdfads</p>
        </div>
      </Core.Accordion>
    </Core.BasicContent>
  </MainLayout>
)

export default IndexPage
