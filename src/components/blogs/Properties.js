import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import walnutListing from "../../images/Listings/walnut.jpg"
import franklinListing from "../../images/Listings/franklin.jpg"
import stanton1Listing from "../../images/Listings/stanton1.jpg"
import Westminster from "../../images/Listings/westminster.jpg"
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
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
const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;
const Represented = tw.p`mt-2 text-sm text-primary-500 font-bold`;

export default () => {
  const currentListings = [
    {
      imageSrc: walnutListing,
      Address: "116 Walnut Dr, McKees Rock, PA 15136",
      description: "If you're looking for a very well-loved and immaculately maintained home, LOOK NO FURTHER! Located near the airport, major highways, Robinson Mall shops, and just a short drive from the city, this house has it all. The first floor features an entry, formal dining room, living room, and an expansive area with a chef-inspired kitchen. It boasts stainless steel appliances, ample counter space, custom cabinetry, and a large center island that can accommodate almost 8 people - perfect for hosting family and friends. From here, you can step out onto a spacious deck with an awning cover, providing the ideal setting for barbecues or simply relaxing in a serene outdoor space. Upstairs offers a large Master with a walk-in closet, three additional nice-sized bedrooms, two full baths, and a second floor laundry. A partially finished basement with rough-in plumbing awaits your personal touch. This home is ready for its new owners to move in and create lasting memories from day one.",
      locationText: "McKees Rock, PA",
      pricingText: "$428,900",
      House: "3 Beds, 4 Baths",
    },
    {
      imageSrc: franklinListing,
      Address: "113 Franklin Ave, Pittsburgh, PA 15221",
      description: "Calling all INVESTORS!!! Bring this beauty back to its glory! A Large covered porch welcome you. The first floor features spacious living room, dinning room, and eat-in kitchen. Upstairs, you will find 3 spacious bedrooms, and an attic space that could be a 4th bedroom. New electrical  panel and water meter installed. Lots of possibilities with this one.",
      locationText: "Pittsburgh, PA",
      pricingText: "$35,000",
      House: "4 Beds, 1 Bath",
    },
    {
      imageSrc: stanton1Listing,
      Address: "7709-7721 Stanton Ave, Pittsburgh, PA 15218",
      description: "A fantastic opportunity to purchase a FULLY OCCUPIED 7-unit brick row building in Swissvale. Each unit has a parcel ID number and an excellent rental history. The layout of all units is the same. The first floor features a living room with a fireplace, kitchen, formal dining room and high ceilings throughout the house. The second floor boasts two spacious bedrooms and a full bathroom. The third bedroom is located in the lower level, along with a half bath and a laundry area that has a walkout to a private patio. Units 7709, 7715, and 7721 have been completely remodeled, with granite countertops, modern cabinets, new paint, laminated flooring, new vanities and  showers , gas stoves, refrigerators, washers and dryers. These units also have a finished lower level with entrance. The other four units could use some TLC- some upgrades will go a long way here to drive rent and ARV. Convenient location minutes to downtown, public transportation and Edgewood Town Center.",
      locationText: "Pittsburgh, PA",
      pricingText: "$699,950",
      House: "21 Beds, 14 Baths",
    },
  ];
  const pastListings = [
    {
      imageSrc:
        Westminster,
      Address: "542 Westminster Dr, North Huntingdon, PA 15642",
      price: "$378,900",
      represented: "Buyer"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      Address: "122 John Street",
      title: "4 baths, 2 bathrooms in a beautiful culdesac",
      url: "https://zillow.com"
    }
  ]
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
                <Link href={post.url}>Learn More</Link>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Past Listings</HeadingTitle>
          <HeadingDescription>Check out my previous sales</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {pastListings.map((post, index) => (
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
      </Content>
    </Container>
    </AnimationRevealPage>
    
  );
};
