import React from 'react';
import { graphql } from "gatsby";
// import Img from "gatsby-image";
import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import logo from '../assets/images/gabler_logo_wht.png';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';


const IndexPage = () => {
  return(


  <Layout>
    <section id="banner">
        <div className="image1">
        {/* <img src={logo} alt="" /> */}
        </div>
      <div className="inner">
        {/* <h2>{config.heading}</h2> */}
        <img className="action_logo" src={logo} alt="" />
        <p>{config.subHeading}</p>
        
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Construction Services
          </h2>
          <p>
          Gabler Brothers provides personalized construction services for your construction project or Real Estate Development. For over 20 years, we have completed 
          multiple new construction projects, building upgrades, renovations and tenant improvements. We pride ourselves on meeting our customers goals by providing a hands on, full service approach to your project requirements.
          </p>
        </header>
        {/* <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul> */}
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Residential Rehab
          </h2>
          <p>
          Gabler Brothers are the premier remodeling contractors in town, offering the most complete and comprehensive residential construction and remodeling service in Tampa.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Commercial
          </h2>
          <p>
            We also have extensive knowledge of Commercial building.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Pre-Construction
            <br />
            Services
          </h2>
          <p>
            More about what you do
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Gabler Brothers</h2>
          <p>
           I need some text here and for the 5 topics below. Also can you add one more topic so their is an even number?
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-drafting-compass">
            <h3>Pre-Design</h3>
            <p>
              Please provide a short description
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Design & Pre-Construction Management</h3>
            <p>
            Please provide a short description
            </p>
          </li>
          <li className="icon solid fa-tools">
            <h3>Total Project Management</h3>
            <p>
            Please provide a short description
            </p>
          </li>
          <li className="icon solid fa-hard-hat">
            <h3>Construction Project Management</h3>
            <p>
            Please provide a short description
            </p>
          </li>
          <li className="icon solid fa-hammer">
            <h3>Design Build</h3>
            <p>
            Please provide a short description
            </p>
          </li>
          <li className="icon solid fa-truck-pickup">
            <h3>?</h3>
            <p>
            Please provide a short description
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Contact</h2>
          
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/contact" className="button fit primary">
              Contact
            </a>
          </li>
          {/* <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li> */}
        </ul>
      </div>
    </section>
  </Layout>
  )
};

export default IndexPage;

export const query = graphql`
  query {
    background: file(relativePath: {eq: "banner.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
