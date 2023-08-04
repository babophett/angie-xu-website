import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line



import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";
import Properties from "components/blogs/Properties";
import Contact from "components/forms/ContactDetails";
import tw from "twin.macro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LogoLink } from "components/headers/light.js";
import logo from "images/logo.png";
import { Container, Content2Xl } from "components/misc/Layouts";
import Footer from "components/footers/AngieFooter";
const Row = tw.div`flex sm:items-center`;
const NavRow = tw(Row)` mx-8 mt-4 flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-[#FD665E]`;
const HomeNavLink = tw.a`lg:mt-0 sm:text-sm transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-[#FD665E]`;
export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (
    <>
      <GlobalStyles />
      <Container tw="bg-gray-100 mx-8 mt-8 pt-8 px-8">
        <Content2Xl>
            <NavRow>
                  <LogoLink href="/">
                    <img src={logo} alt="" />
                    
                  </LogoLink>
                  <div tw="flex flex-wrap justify-center lg:justify-end items-center -mr-12">
                    <NavLink href="/properties">
                      Properties
                    </NavLink>
                    <HomeNavLink href="https://angiexu.kw.com/">
                      Home Search
                    </HomeNavLink>
                    <NavLink href="/contact">
                      Contact
                    </NavLink>
                    
                    
                    
                  </div>
                </NavRow>
          <Router>
              <Routes>
                  <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} />
                  <Route path="/components/:type/:name" element={<ComponentRenderer />} />
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/properties" element={<Properties />} />
                  <Route path="/" element={<MainLandingPage />} />
              </Routes>
          </Router>
        </Content2Xl>
      </Container>
      <Footer/>
    </>
  );
}


