import React from 'react'
import './pope2.css'
import Webdesi from '../../../Images/webdesi.jpg'
import Goo from '../../../Images/Googleads.jpg'
import Seo from '../../../Images/seo.jpg'
import Pay from '../../../Images/payper.jpg'

function Pope2() {
  return (
    <div id='pmn'>

        <div id='lll'>
        <h1 id='rem'>Services</h1>
        </div>


        <div id='pmns'>
        <div className="box">
      <div className="inner">
        <div className="front">
          <img  className='pl' src={Webdesi} alt="" />
        </div>
        <div className="back">
          <h3 id='ppppp'>Web Design & Development</h3>
          <p className='wcs'> Effective web design is performance oriented. Our websites not only generate traffic, they convert that traffic for your bottom line. Not only that, our designers can emulate and produce any design or features that you require.</p>

          <button id='bbb'>Enroll Now</button>
        </div>
      </div>
    </div>

        <div className="box2">
      <div className="inner">
        <div className="front">
          <img className='pl' src={Goo} alt="" />
        </div>
        <div className="back">
        <h3 id='ppppp'>Google Ads</h3>
        <p className='wcs'>we manage your Google Ads (previously Google AdWords) account, targeting the keywords that will drive buyers to your site. Highly focused keyword research will determine the most cost-effective approach to obtaining customers searching for precisely what you offer.</p>
        <button id='bbb'>Enroll Now</button>

        </div>
      </div>
    </div>

        <div className="box3">
      <div className="inner">
        <div className="front">

          <img className='pl' src={Seo} alt="" />
        </div>
        <div className="back">
        <h3 id='ppppp'>Search Engine Optimization</h3>
        <p className='wcs'>Our SEO services help your website achieve top ranking on search engines.
            how? we help to improve on-page optimizations and off-site optimizations. we help improve HTML markup and backlinks.</p>
        <button id='bbb'>Enroll Now</button>
        </div>
      </div>
    </div>

        <div className="box4">
      <div className="inner">
        <div className="front">
          <img className='pl' src={Pay} alt="" />
        </div>
        <div className="back">
        <h3 id='ppppp'>Pay Per Click Marketing</h3>
        <p className='wcs'>We focus on improving the quality of your PPC leads. The idea is to make your campaign scaleable, and for that, we are here with lead-generation campaigns, proper planning, and an understanding of your target audience. </p>
        <button id='bbb'>Enroll Now</button>
        </div>
      </div>
    </div>
    </div>

    </div>
  )
}

export default Pope2
