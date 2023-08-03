import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import walnutListing from "../../images/Listings/walnut.jpg"
import franklinListing from "../../images/Listings/franklin.jpg"
import stanton1Listing from "../../images/Listings/stanton1.jpg"

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;


const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div` py-6 sm:px-10 sm:py-6 flex flex-col items-center justify-center`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-xl font-bold`;
const Inquire = tw.a`w-full`
const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const House = tw.span`ml-2 font-bold`;

const Description = tw.p`mt-3`
const ExpandButton = tw.button`self-start mt-2 text-primary-500 font-bold`
const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: walnutListing,
      title: "116 Walnut Dr",
      description: "If you're looking for a very well-loved and immaculately maintained home, LOOK NO FURTHER! Located near the airport, major highways, Robinson Mall shops, and just a short drive from the city, this house has it all. The first floor features an entry, formal dining room, living room, and an expansive area with a chef-inspired kitchen. It boasts stainless steel appliances, ample counter space, custom cabinetry, and a large center island that can accommodate almost 8 people - perfect for hosting family and friends. From here, you can step out onto a spacious deck with an awning cover, providing the ideal setting for barbecues or simply relaxing in a serene outdoor space. Upstairs offers a large Master with a walk-in closet, three additional nice-sized bedrooms, two full baths, and a second floor laundry. A partially finished basement with rough-in plumbing awaits your personal touch. This home is ready for its new owners to move in and create lasting memories from day one.",
      locationText: "McKees Rock, PA",
      pricingText: "428,900",
      House: "3 Beds, 4 Baths",
    },
    {
      imageSrc: franklinListing,
      title: "113 Franklin Ave",
      description: "Calling all INVESTORS!!! Bring this beauty back to its glory! A Large covered porch welcome you. The first floor features spacious living room, dinning room, and eat-in kitchen. Upstairs, you will find 3 spacious bedrooms, and an attic space that could be a 4th bedroom. New electrical  panel and water meter installed. Lots of possibilities with this one.",
      locationText: "Pittsburgh, PA",
      pricingText: "35,000",
      House: "4 Beds, 1 Bath",
    },
    {
      imageSrc: stanton1Listing,
      title: "7709-7721 Stanton Ave.",
      description: "A fantastic opportunity to purchase a FULLY OCCUPIED 7-unit brick row building in Swissvale. Each unit has a parcel ID number and an excellent rental history. The layout of all units is the same. The first floor features a living room with a fireplace, kitchen, formal dining room and high ceilings throughout the house. The second floor boasts two spacious bedrooms and a full bathroom. The third bedroom is located in the lower level, along with a half bath and a laundry area that has a walkout to a private patio. Units 7709, 7715, and 7721 have been completely remodeled, with granite countertops, modern cabinets, new paint, laminated flooring, new vanities and  showers , gas stoves, refrigerators, washers and dryers. These units also have a finished lower level with entrance. The other four units could use some TLC- some upgrades will go a long way here to drive rent and ARV. Convenient location minutes to downtown, public transportation and Edgewood Town Center.",
      locationText: "Pittsburgh, PA",
      pricingText: "699,950",
      House: "21 Beds, 14 Baths",
    },
    
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Featured Listings</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  <RatingsInfo>
                    
                    <House>{card.House}</House>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{card.locationText}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>{card.pricingText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>
                {isExpanded ? card.description: `${card.description.substring(0,200)}`}
                    
                </Description>
                <ExpandButton
                          css={tw`text-blue-500 mt-2 cursor-pointer`}
                          onClick={handleToggleExpand}
                        >
                          {isExpanded ? 'See Less' : 'See More'}
                    </ExpandButton>
              </TextInfo>
              <PrimaryButton>
                <Inquire href="contact">Inquire</Inquire>
              </PrimaryButton>     
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
