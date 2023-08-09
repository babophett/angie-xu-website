import React, { useEffect } from "react";
import { Link} from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import ThreeColSlider from "components/cards/FeaturedListings";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import Testimonials from "components/testimonials/Testimonials";
import AngieXuImageSrc from "images/angie.png";
import PittsburghSrc from "images/pittsburgh-pennsylvania-usa-night-wallpaper-preview.jpg";

/* Hero */
const Row = tw.div`flex`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;

const Column = tw.div`flex-1`;


const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Heading = tw(HeadingBase)`text-center lg:text-left text-primary-900 leading-snug`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const Actions = tw.div`flex flex-col sm:flex-row justify-center lg:justify-start`;
const PrimaryButton = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const FeatureList = tw.ul`mt-6 leading-loose flex flex-wrap max-w-xl mx-auto lg:mx-0`;
const Feature = tw.li`mt-2 flex items-center flex-shrink-0 w-full sm:w-1/2 justify-center lg:justify-start`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full rounded-t sm:rounded `;

const SectionContainer = tw(Row)`flex-col lg:flex-row justify-between items-center pt-10 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;
const SectionHeading = tw(HeadingBase)`text-left text-primary-900`;
const SectionDescription = tw(DescriptionBase)`text-left text-base text-gray-600 max-w-4xl`;

export default ({
  features = null,
  primaryButtonUrl = "/properties",
  primaryButtonText = "Search All Homes",
  heading = "Find Your Dream Home",
  description = "Work with a Pittsburgh Real Estate Expert"
}) => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  useEffect(() => {
    window.gtag("js", new Date());
    window.gtag("config", "UA-45799926-9");
  }, [])



  features = features || [
    `Upper St. Clair`,
    `Mt Lebanon`, `Peters`,
    `North Allegheny`, `Bethel Park`, `Squirrel Hill`, `McCandless`,`Wexford`
  ];

  return (
    <AnimationRevealPage>
          
          <HeroRow>
            <TextColumn>
              <Heading as="h1">{heading}</Heading>
              <Description>{description}</Description>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
              <Actions>
                <Link to="/properties">
                <PrimaryButton to="/properties">
                  {primaryButtonText}
                </PrimaryButton>
                </Link>
              </Actions> 
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
              <Image src={PittsburghSrc}>
              </Image>
              </ImageContainer>
            </ImageColumn>
          </HeroRow>
          <SectionContainer>
          <img src={AngieXuImageSrc} alt="Angie"/>
            <TextColumn>
            <SectionHeading>Meet Angie</SectionHeading>
            <div className="flex items-center">
                <SectionDescription>
                    <SectionDescription>Angie Xu, an esteemed real estate professional, is your gateway to the vibrant Pittsburgh housing market. Fluent in both English and Mandarin, Angie's unique expertise empowers her to seamlessly connect with both clients. With a finger on the pulse of Pittsburgh's neighborhoods and market trends, Angie tailors her approach to each client, ensuring a smooth and successful real estate journey.</SectionDescription>
                    <SectionDescription>Angie's stellar reputation is built on her exceptional work ethic and commitment to excellence. Praised for integrity, professionalism, and delivering results, she leaves a lasting impression on buyers and sellers alike. Beyond real estate, Angie advocates for community growth and engagement, actively participating in local initiatives and philanthropy.</SectionDescription>
                    <SectionDescription>When not immersed in real estate, Angie explores Pittsburgh's culinary scene, hikes in its parks, and embraces its arts and culture. Her passion for the city shines through in her work as she helps clients find their place within Pittsburgh's dynamic real estate landscape.</SectionDescription>
                    <SectionDescription>With Angie Xu as your trusted advisor, turn your real estate dreams into reality with unwavering dedication and expertise.</SectionDescription>
                </SectionDescription>
                
            </div>
            </TextColumn>
          </SectionContainer>
          <ThreeColSlider/>
          <Testimonials/>
      
    </AnimationRevealPage>
  );
};



