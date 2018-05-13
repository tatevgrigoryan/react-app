import React, { Component } from 'react';
import Section from '../Section/Section';
import Title from '../Title/Title.js';
import Subtitle from '../Subtitle/Subtitle.js';
import Pin from '../Pin/Pin.js';
import SecondPin from '../SecondPin/SecondPin.js';
import Content from '../Content/Content.js';
import './App.css';


class App extends Component {
  render() {

    return (

      <div >

      <Section className="head-section">
          <div className="pin-section">
              <Pin letter="W"/>
          </div>
          <Title label="I am just another  creative guy" className="head-title">

          </Title>
          <Subtitle>
              <span>
                  who can build memorable creative
              </span>

              <span className="head-subtitle-tail">
                     experience for you
              </span>
          </Subtitle>
          <div className="pin-section">
              <Pin letter="A"/>
              <Pin letter="B"/>
              <Pin letter="C"/>
              <Pin letter="D"/>
          </div>
       </Section>

      <Section className="head-section second-section">
              <Title label="what i do" className="head-title">
              </Title>
                  <Subtitle className="second-section-info">
                      <span >
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                  </Subtitle>
          <div className="pin-section">
              <div className="pin-section-inner">
                  <SecondPin letter="A"/>
                  <Content title1="Websites" title2="Starts from $350" text="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, "></Content>
              </div>

             <div className="pin-section-inner">
                 <SecondPin letter="B"/>
                 <Content title1="Websites" title2="Starts from $350" text="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, "></Content>
             </div>

              <div className="pin-section-inner">
                  <SecondPin letter="C"/>
                  <Content title1="Websites" title2="Starts from $350" text="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, "></Content>
              </div>

              <div className="pin-section-inner">
                  <SecondPin letter="D"/>
                  <Content title1="Websites" title2="Starts from $350" text="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, "></Content>
             </div>



          </div>
          </Section>

      </div>
    );
  }
}

export default App;
