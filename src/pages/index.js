import React from "react"
import {
  Columns,
  Section,
  Accordion,
  BorderContent,
  Button,
  Card,
  CardContent,
  CardHeader,
} from "easy-as-pie-ui"

// Layout
import { MainLayout } from "./../layouts/mainLayout"

// Custom Site Components
import SEO from "./../components/gatsby/seo"
import { Image } from "./../components/gatsby/image"
import { Hero } from "./../components/hero"
import { PackageCard } from "../components/packageCard"

const IndexPage = () => (
  <MainLayout>
    <SEO
      title="Bruner Dynamics"
      keywords={[`bruner`, `internet`, `high-speed`]}
    />
    <Hero />
    <Section>
      <h2 className="text-black">Brüner’s Best Plans:</h2>
      <Columns collapseMargin={true}>
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </Columns>
      <div className="content-sm center-block mt-md">
        <p className="legal">
          *Does not include The Patriot (2000) for obvious reasons. Independence
          Day and Red Dawn count, but not the re-makes. Each viewing of either
          Rocky IV, Iron Eagle, or Top Gun will result in a $5 credit to your
          account which will be applied to your subsequent bill.
        </p>
        <p className="legal">
          **Ralph can’t come on Tuesday nights. Bowling league.
        </p>
        <p className="legal">
          †Badminton match must be within a 45 mile radius of Ogden, UT.
        </p>
      </div>
    </Section>
    <Section color="grey">
      <Columns>
        <Image imgName="devices" className="side-by-side" />
        <div>
          <h3 className="text-black">
            We’re Here to Brand Everything, Everywhere, Anytime
          </h3>
          <p>
            Flat screen tv? Wireless device? Tablet? Laptop? We can put our
            brand image on all of them. We can do it whenever we want, but
            mostly you’ll see our logo on your screen when you’re experiencing
            technical difficulties. This way, you will associate our brand with
            some of your most emotional moments.
          </p>
        </div>
      </Columns>
    </Section>
    <Section>
      <h2 className="text-black">It Is Possible to Pay Us More Money</h2>
      <Columns>
        <BorderContent>
          <h3 className="text-left text-blue">Easy Care</h3>
          <p>
            For only $5.99/mo, you can get priority customer support with annual
            dish relocation, free service calls, and a priority hotline which
            connects straight to Jimmy’s Pager – faster than a Led Zeppelin
            guitar solo. Plus, you can add or cancel Easy Care at anytime.
          </p>
        </BorderContent>
        <BorderContent>
          <h3 className="text-left text-blue">Voice</h3>
          <p>
            The industry term for digital phone service is VoIP. We want to
            mention VoIP here a few times so that we sound legit and you will
            forefit your dollars to us. Voice is the only VoIP connection that
            doesn’t subtract from your internet data allowing more time for
            Strongbad emails and Battlestar Galactica chat rooms.
          </p>
        </BorderContent>
        <BorderContent>
          <h3 className="text-left text-blue">DIRECTV</h3>
          <p>
            If you can get Brüner at your home, you can get DIRECTV and vice
            versa. If you can get water in your home, you can quench your thirst
            and take baths. There is a hypothetical situation where you can take
            a bath, stream patriotic tunes, watch DIRECTV, and quench your
            thirst all at the same time.
          </p>
        </BorderContent>
      </Columns>
    </Section>
    <Section color="blue" padding="md md" notch="top blue">
      <div className="text-center d-none-md-down">
        <h3 className="text-center">
          Get Connected With Brüner Dynamics Today.
        </h3>
        <Button color="white">Call 1.888.888.8888</Button>
      </div>
      <h3 className="text-center d-none-lg-up">Call 1.888.888.8888</h3>
    </Section>
    <Section>
      <Columns>
        <Image imgName="satellite" className="side-by-side" />
        <div>
          <h2 className="text-black">What is a Brüner?</h2>
          <p>
            You might as well ask what salt tastes like or how water feels.
            Until you’ve interacted with a Brüner first hand, you can only
            imagine how great you’ll feel. A warm handshake, a compliment, a
            rubix cube coaching session, or just a chat about your weekend will
            leave you feeling better about your self and the world in general.
          </p>
          <p>Brüner Dynamics is on course to change the world:</p>
          <ul>
            <li>
              98% of Americans have never hung out with Jimmy. That’s about to
              change. With satellite technology, you can hang with him all day,
              every day.
            </li>
            <li>
              You’ve probably seen our ambiguous guerilla marketing stickers
              plasterd at various locations from laptops to street lamps.
            </li>
          </ul>
        </div>
      </Columns>
    </Section>
    <Section color="grey">
      <h2 className="text-black">Equipment</h2>
      <p className="content-xs center-block-lg text-lg-center">
        When you sign up for Brüner Dynamics, we make it easy to get connected.
        We’ll send a professional technician named Ralph to install your new
        dish in an optimal location and set up your wifi router inside your
        home.
      </p>
      <Columns>
        <Card>
          <CardHeader>
            <h3>Brüner Satellite Dish</h3>
          </CardHeader>
          <CardContent>
            <p>
              To access Brüner you’ll need a Brüner Satellite Dish. Jimmy’s
              cousin Ralph will test for the best installation location and
              install the dish on your abode. He’ll probably stay for dinner.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h3>Brüner Wi-Fi Modem</h3>
          </CardHeader>
          <CardContent>
            <p>
              The Brüner WiFi Modem gives you wireless internet throughout your
              home. It also includes a Voice service adapter so we can listen
              and see if anything cool is happening at your place.
            </p>
          </CardContent>
        </Card>
      </Columns>
    </Section>
    <Section>
      <h2 className="text-black text-center">Brüner Dynamics FAQs</h2>
      <Accordion>
        <h5>Is James listening to my conversation?</h5>
        <p>
          Brüner Dynamics is commited to privacy, autonomy, transparency, and
          idiosyncrasies. In order to maintain our high standard of product,
          James reserves the right to listen in to conversations in your home.
          In exceptional circumstances, we reserve the right to have James join
          your conversation with a really great zinger, joke, quip, or comeback.
        </p>
      </Accordion>
      <Accordion>
        <h5>Why should I get Brüner Dynamics?</h5>
        <p>
          Remember when you were a kid in the 80’s and you were obsessed with
          space and the future? Well, the future is upon us. We’re still waiting
          for a nuclear-powered flying Delorean that runs on refuse, but we do
          have satellites. Hi-tech space craft orbiting our planet, beaming down
          cat videos to an adoring public. Like the majestic Millennium Falcon
          from long ago, Brüner Dynamics will put you in touch with the future
          with a bad-ass satellite dish mounted directly onto your house. “Rogue
          Two checking in.”
        </p>
      </Accordion>
      <Accordion>
        <h5>
          Who is the guy who keeps walking in front of my place? Is that Ralph?
        </h5>
        <p>
          Ralph doesn’t believe in GPS, so he locates the homes where he
          performs dish installations via a complicated combination of smell,
          instinct, a divining rod, quantum mathematics, and a form of West
          African witchcraft. If you hear a strange, oddly-loud humming noise,
          and you look out the window and see a man with a hand-crafted
          robo-helmet in your front yard, you have likely been found by Ralph.
        </p>
      </Accordion>
      <Accordion>
        <h5>Where does space start?</h5>
        <p>
          An excellent question. At bruner dynamics, we generally see space as
          any matter, atmosphere, or void not currently occupied by James
          Bruner. Therefore, space starts and ends with Mr. Bruner.
        </p>
      </Accordion>
    </Section>
  </MainLayout>
)

export default IndexPage
