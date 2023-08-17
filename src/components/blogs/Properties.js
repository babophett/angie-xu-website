import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import walnutListing from "../../images/Listings/walnut.jpg"
import franklinListing from "../../images/Listings/franklin.jpg"
import stanton1Listing from "../../images/Listings/stanton1.jpg"
import Westminster from "../../images/Listings/westminster.jpg"
import Murray from "../../images/Listings/murray.jpg";
import Canonsburg from "../../images/Listings/canonsburg.jpg";
import buehner from "../../images/Listings/buehner.jpg";
import Wyncotte from "../../images/Listings/wyncotte.jpg";
import Chestnut from "../../images/Listings/Chestnut.jpg";
import Adams from "../../images/Listings/Adams.jpg";
import Realty from "../../images/Listings/Realty.jpg";
import Winterburn from "../../images/Listings/Winterburn.jpg";
import Moreland from "../../images/Listings/Moreland.jpg";
import Allegheny from "../../images/Listings/Alllegheny.jpg";
import Midway from "../../images/Listings/Midway.jpg";
import Honey from "../../images/Listings/Honey.jpg";
import Carmell from "../../images/Listings/Carmell.jpg";
import Lexington from "../../images/Listings/Lexington.jpg"
import Stratford from "../../images/Listings/Strabane.jpg";
import Lorlita from "../../images/Listings/Lorlita.jpg";
import Bryn from "../../images/Listings/Bryn.jpg";
import Cardinal from "../../images/Listings/Cardinal.jpg";
import Morton from "../../images/Listings/Morton.jpg";
import PropertyModal from "./Property.js";
const Container = tw.div`relative`;
const Content = tw.div`flex flex-col items-center max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-primary-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`
]);
const Address = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;
const Learn = tw.button`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;
const Represented = tw.p`mt-2 text-sm text-primary-500 font-bold`;
const PaginationButton = tw.button`mx-1 px-3 py-2 text-white bg-primary-300 rounded-lg transition-colors duration-300 hover:bg-gray-400 focus:outline-none focus:ring`
const Pagination = tw.div`justify-center items-center mt-8`
export default () => {
  // eslint-disable-next-line no-unused-vars
  const [showModal, setShowModal] = useState(false);
  const [clickedPropertyIndex, setClickedPropertyIndex] = useState(null);
  const handleButtonClick = (index) => {
    setShowModal(true);
    setClickedPropertyIndex(index);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setClickedPropertyIndex(null);
  };
  
  const currentListings = [
    {
      imageSrc: walnutListing,
      Address: "116 Walnut Dr McKees Rock, PA 15136",
      description: "If you're looking for a very well-loved and immaculately maintained home, LOOK NO FURTHER! Located near the airport, major highways, Robinson Mall shops, and just a short drive from the city, this house has it all. The first floor features an entry, formal dining room, living room, and an expansive area with a chef-inspired kitchen. It boasts stainless steel appliances, ample counter space, custom cabinetry, and a large center island that can accommodate almost 8 people - perfect for hosting family and friends. From here, you can step out onto a spacious deck with an awning cover, providing the ideal setting for barbecues or simply relaxing in a serene outdoor space. Upstairs offers a large Master with a walk-in closet, three additional nice-sized bedrooms, two full baths, and a second floor laundry. A partially finished basement with rough-in plumbing awaits your personal touch. This home is ready for its new owners to move in and create lasting memories from day one.",
      locationText: "McKees Rock, PA",
      pricingText: "$428,900",
      House: "4 Beds, 2.5 Baths",
    },
    {
      imageSrc: franklinListing,
      Address: "113 Franklin Ave Pittsburgh, PA 15221",
      description: "Calling all INVESTORS!!! Bring this beauty back to its glory! A Large covered porch welcome you. The first floor features spacious living room, dinning room, and eat-in kitchen. Upstairs, you will find 3 spacious bedrooms, and an attic space that could be a 4th bedroom. New electrical  panel and water meter installed. Lots of possibilities with this one.",
      locationText: "Pittsburgh, PA",
      pricingText: "$35,000",
      House: "4 Beds, 1 Bath",
    },
    {
      imageSrc: stanton1Listing,
      Address: "7709-7721 Stanton Ave Pittsburgh, PA 15218",
      description: "A fantastic opportunity to purchase a FULLY OCCUPIED 7-unit brick row building in Swissvale. Each unit has a parcel ID number and an excellent rental history. The layout of all units is the same. The first floor features a living room with a fireplace, kitchen, formal dining room and high ceilings throughout the house. The second floor boasts two spacious bedrooms and a full bathroom. The third bedroom is located in the lower level, along with a half bath and a laundry area that has a walkout to a private patio. Units 7709, 7715, and 7721 have been completely remodeled, with granite countertops, modern cabinets, new paint, laminated flooring, new vanities and  showers , gas stoves, refrigerators, washers and dryers. These units also have a finished lower level with entrance. The other four units could use some TLC- some upgrades will go a long way here to drive rent and ARV. Convenient location minutes to downtown, public transportation and Edgewood Town Center.",
      locationText: "Pittsburgh, PA",
      pricingText: "$699,950",
      House: "21 Beds, 14 Baths",
    },
  ];
  const pastListings = [
    {
      imageSrc:
        Morton,
      Address: "2521 Morton Rd, Pittsburgh, PA 15241",
      price: "$800,000",
      represented: "Buyer"
    },
    
    {
      imageSrc:
        Westminster,
      Address: "542 Westminster Dr North Huntingdon, PA 15642",
      price: "$378,900",
      represented: "Buyer"
    },
    {
      imageSrc:
        Murray,
      Address: "304 Rainprint Ln Murrysville, PA, 15668",
      price: "$230,000",
      represented: "Buyer"
    },
    {
      imageSrc:
        Canonsburg,
      Address: "137 Demar Blvd Canonsburg, PA, 15317",
      price: "$289,900",
      represented: "Seller"
    },
    {
      imageSrc:
        buehner,
      Address: "145 Buehner Dr Pittsburgh, PA, 15237",
      price: "$230,000",
      represented: "Seller"
    },
    {
      imageSrc:
        franklinListing,
      Address: "113 Franklin Ave Pittsburgh, PA 15221",
      price: "$26,000",
      represented: "Buyer"
    },
    {
      imageSrc:
        Wyncotte,
      Address: "523 Wyncotte St Pittsburgh, PA, 15204",
      price: "$70,000",
      represented: "Seller"
    },
    {
      imageSrc:
        Chestnut,
      Address: "637 Chestnut St Irwin, PA, 15642 ",
      price: "$167,000",
      represented: "Buyer"
    },
    {
      imageSrc:
        Adams,
      Address: "88 Adams Dr Pittsburgh, PA, 15241",
      price: "$242,500",
      represented: "Seller"
    },
    {
      imageSrc:
        Allegheny,
      Address: "35 Allegheny Ave Oakmont, PA, 15139",
      price: "507,000",
      represented: "Seller"
    },
    {
      imageSrc:
        Realty,
      Address: "1841 Realty Ave Pittsburgh, PA, 15216",
      price: "200,000",
      represented: "Seller"
    },
    {
      imageSrc:
        Midway,
      Address: "713 Midway Dr Pittsburgh, PA, 15215",
      price: "$325,000",
      represented: "Buyer"
    },
    {
      imageSrc:
        Winterburn,
      Address: "4353 Winterburn Ave Pittsburgh, PA, 15217",
      price: "$200,000",
      represented: "Buyer"
    },
    {
      imageSrc:
        Moreland,
      Address: "669 Moreland Dr Pittsburgh, PA, 15243",
      price: "$183,000",
      represented: "Seller"
    },
    {
      imageSrc:
        Honey,
      Address: "400 Honey Locust Dr Cranberry Township, PA, 16066",
      price: "$715,000",
      represented: "Buyer"
    },
    {
      imageSrc:
        Carmell,
      Address: "407 Carmell Dr Pittsburgh, PA, 15241",
      price: "$475,000",
      represented: "Seller"
    },
    {
      imageSrc:
        Lexington,
      Address: "211 N Lexington St Pittsburgh, PA, 15208",
      price: "$125,000",
      represented: "Buyer"
    },
    {
      imageSrc:
        Stratford,
      Address: "2445 Stratford Ave Coraopolis, PA, 15108",
      price: "$68,000",
      represented: "Buyer"
    },
    {
      imageSrc:
        Lorlita,
      Address: "381 Lorlita Ln Pittsburgh, PA, 15241",
      price: "$353,000",
      represented: "Seller"
    },
    {
      imageSrc:
        Bryn,
      Address: "748 Bryn Mawr Rd Pittsburgh, PA, 15219",
      price: "$62,000",
      represented: "Seller"
    },
    {
      imageSrc:
        Cardinal,
      Address: "1229 Cardinal Dr Pittsburgh, PA, 15243",
      price: "$271,000",
      represented: "Seller"
    },
  ]
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(pastListings.length / 6);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;

  const visibleListings = pastListings.slice(startIndex, endIndex);
  return (
    <AnimationRevealPage>
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Current Listings</HeadingTitle>
          <HeadingDescription>Find your Dream Home</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {currentListings.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Address>{post.Address}</Address>
                <Title>{post.pricingText}</Title>
                <Title>{post.House}</Title>
                <Learn onClick={() => handleButtonClick(index)}>
                
                 Learn More
                  </Learn>
              </Card>
            </Column>
          ))}
          {clickedPropertyIndex !== null && (
        <PropertyModal
          imageSrc={currentListings[clickedPropertyIndex].imageSrc}
          address={currentListings[clickedPropertyIndex].Address}
          description={currentListings[clickedPropertyIndex].description}
          location={currentListings[clickedPropertyIndex].locationText}
          pricing={currentListings[clickedPropertyIndex].pricingText}
          bedsBaths={currentListings[clickedPropertyIndex].House}
          onClose={handleCloseModal}
        />
      )}
        </ThreeColumn>
      </Content>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Past Listings</HeadingTitle>
          <HeadingDescription>Check out my previous sales</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
            {visibleListings.map((post, index) => (
              <Column key={index}>
                <Card>
                  <Image imageSrc={post.imageSrc} />
                  <Address>{post.Address}</Address>
                  <Title>Sold for: {post.price}</Title>
                  <Represented>Represented: {post.represented}</Represented>
                </Card>
              </Column>
            ))}
        </ThreeColumn>
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationButton key={index} onClick={() => handleClick(index + 1)}>
              {index + 1}
            </PaginationButton>
          ))}
        </Pagination>
      </Content>
    </Container>
    </AnimationRevealPage>
    
  );
};
