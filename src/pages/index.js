import React from "react"

// Core
import * as Core from "./../../core/"

// Layout
import MainLayout from "./../layouts/main-layout"

// Custom Site Components
import SEO from "./../components/seo"
import ZipCode from "./../components/zipcode"
import PackageCard from "./../components/package-card"

// Images
import StarsBg from "../images/stars-bg.png"
import DevicesImg from "../images/devices.png"
import SatelliteImg from "../images/satellite.png"

// Theme
import { colors } from "../theme"

const hc = Core.HelperClasses

const IndexPage = () => (
  <MainLayout>
    <SEO
      title="Home"
      keywords={[`bruner`, `internet`, `high-speed`]}
    />
    <Core.Section bgImage={StarsBg}>
      <h1 className={`${hc.paddingTop45}`}>Discover Brüner Satellite<br/>Internet Bundles</h1>
      <p className={`${hc.textWhite} ${hc.textCenter} ${hc.marginBottom30}`}>Jimmy B is here to make the world a better place, one connection at a time.</p>
      <ZipCode btnText="Connect with the Bruner" />
    </Core.Section>
    <Core.Section>
      <h2 className={`${hc.marginBottom15}`}>Brüner’s Best Plans:</h2>
      <Core.Columns collapseMargin={true}>
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </Core.Columns>
      <div className="legal">
        <p>*Does not include The Patriot (2000) for obvious reasons. Independence Day and Red Dawn count, but not the re-makes. Each viewing of either Rocky IV, Iron Eagle, or Top Gun will result in a $5 credit to your account which will be applied to your subsequent bill.</p>
        <p>**Ralph can’t come on Tuesday nights. Bowling league.</p>
        <p>†Badminton match must be within a 45 mile radius of Ogden, UT.</p>
      </div>
    </Core.Section>
    <Core.Section bgColor={colors.gray}>
      <Core.Columns>
        <img src={DevicesImg} alt="Devices"/>
        <div>
          <h3>We’re Here to Brand Everything, Everywhere, Anytime</h3>
          <p>Flat screen tv? Wireless device? Tablet? Laptop? We can put our brand image on all of them. We can do it whenever we want, but mostly you’ll see our logo on your screen when you’re experiencing technical difficulties. This way, you will associate  our brand with some of your most emotional moments.</p>
        </div>
      </Core.Columns>
    </Core.Section>
    <Core.Section>
      <h2>It Is Possible to Pay Us More Money</h2>
      <Core.Columns>
        <Core.BorderCard color={colors.blue}>
          <h3>Easy Care</h3>
          <p>For only $5.99/mo, you can get priority customer support with annual dish relocation, free service calls, and a priority hotline which connects straight to Jimmy’s Pager – faster than a Led Zeppelin guitar solo.  Plus, you can add or cancel Easy Care at anytime.</p>
        </Core.BorderCard>
        <Core.BorderCard color={colors.blue}>
          <h3>Voice</h3>
          <p>The industry term for digital phone service is VoIP. We want to mention VoIP here a few times so that we sound legit and you will forefit your dollars to us. Voice is the only VoIP connection that doesn’t subtract from your internet data allowing more time for Strongbad emails and Battlestar Galactica chat rooms.</p>
        </Core.BorderCard>
        <Core.BorderCard color={colors.blue}>
          <h3>DIRECTV</h3>
          <p>If you can get Brüner at your home, you can get DIRECTV and vice versa. If you can get water in your home, you can quench your thirst and take baths. There is a hypothetical situation where you can take a bath, stream patriotic tunes, watch DIRECTV, and quench your thirst all at the same time.</p>
        </Core.BorderCard>
      </Core.Columns>
    </Core.Section>
    <Core.Section bgColor={colors.blue}>
      <h3 className={`${hc.textWhite} ${hc.textCenter}`}>Get Connected With Brüner Dynamics Today.</h3>
      <Core.Button />
    </Core.Section>
    <Core.Section>
      <Core.Columns>
        <img src={SatelliteImg} alt="Satellite" />
        <div>
          <h2 className={`${hc.textLeft} ${hc.marginBottom15}`}>What is a Brüner?</h2>
          <p>You might as well ask what salt tastes like or how water feels. Until you’ve interacted with a Brüner first hand, you can only imagine how great you’ll feel. A warm handshake, a compliment, a rubix cube coaching session, or just a chat about your weekend will leave you feeling better about your self and the world in general.</p>
          <p>Brüner Dynamics is on course to change the world:</p>
          <ul>
            <li>98% of Americans have never hung out with Jimmy. That’s about to change. With satellite technology, you can hang with him all day, every day.</li>
            <li>You’ve probably seen our ambiguous guerilla marketing stickers plasterd at various locations from laptops to street lamps.</li>
          </ul>
        </div>
      </Core.Columns>
    </Core.Section>
    <Core.Section bgColor={colors.gray}>
      <h2>Equipment</h2>
      <p>When you sign up for Brüner Dynamics, we make it easy to get connected. We’ll send a professional technician named Ralph to install your new dish in an optimal location and set up your wifi router inside your home.</p>
      <Core.Columns>
        <Core.Card headerColor={colors.blue}>
          <h3 className={hc.textWhite}>Brüner Satellite Dish</h3>
          <p>To access Brüner you’ll need a Brüner Satellite Dish. Jimmy’s cousin Ralph will test for the best installation location and install the dish on your abode. He’ll probably stay for dinner.</p>
        </Core.Card>
        <Core.Card headerColor={colors.blue}>
          <h3 className={hc.textWhite}>Brüner Wi-Fi Modem</h3>
          <p>The Brüner WiFi Modem gives you wireless internet throughout your home. It also includes a Voice service adapter so we can listen and see if anything cool is happening at your place.</p>
        </Core.Card>
      </Core.Columns>
    </Core.Section>
    <Core.Section>
      <h2>Brüner Dynamics FAQs</h2>
      <Core.Accordion headerColor={colors.blue} contentColor={colors.gray}>
        <h5>This is some text</h5>
        <p>Remember when you were a kid in the 80’s and you were obsessed with space and the future? Well, the future is upon us. We’re still waiting for a nuclear-powered flying Delorean that runs on refuse, but we do have satellites. Hi-tech space craft orbiting our planet, beaming down cat videos to an adoring public. Like the majestic Millennium Falcon from long ago, Brüner Dynamics will put you in touch with the future with a bad-ass satellite dish mounted directly onto your house. “Rogue Two checking in.”</p>
      </Core.Accordion>
      <Core.Accordion headerColor={colors.blue} contentColor={colors.gray}>
        <h5>This is some text</h5>
        <p>Remember when you were a kid in the 80’s and you were obsessed with space and the future? Well, the future is upon us. We’re still waiting for a nuclear-powered flying Delorean that runs on refuse, but we do have satellites. Hi-tech space craft orbiting our planet, beaming down cat videos to an adoring public. Like the majestic Millennium Falcon from long ago, Brüner Dynamics will put you in touch with the future with a bad-ass satellite dish mounted directly onto your house. “Rogue Two checking in.”</p>
      </Core.Accordion>
      <Core.Accordion headerColor={colors.blue} contentColor={colors.gray}>
        <h5>This is some text</h5>
        <p>Remember when you were a kid in the 80’s and you were obsessed with space and the future? Well, the future is upon us. We’re still waiting for a nuclear-powered flying Delorean that runs on refuse, but we do have satellites. Hi-tech space craft orbiting our planet, beaming down cat videos to an adoring public. Like the majestic Millennium Falcon from long ago, Brüner Dynamics will put you in touch with the future with a bad-ass satellite dish mounted directly onto your house. “Rogue Two checking in.”</p>
      </Core.Accordion>
      <Core.Accordion headerColor={colors.blue} contentColor={colors.gray}>
        <h5>This is some text</h5>
        <p>Remember when you were a kid in the 80’s and you were obsessed with space and the future? Well, the future is upon us. We’re still waiting for a nuclear-powered flying Delorean that runs on refuse, but we do have satellites. Hi-tech space craft orbiting our planet, beaming down cat videos to an adoring public. Like the majestic Millennium Falcon from long ago, Brüner Dynamics will put you in touch with the future with a bad-ass satellite dish mounted directly onto your house. “Rogue Two checking in.”</p>
      </Core.Accordion>
    </Core.Section>
  </MainLayout>
)

export default IndexPage
