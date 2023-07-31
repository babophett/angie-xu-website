import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

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


export default () => {
  const currentListings = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      Address: "122 John St",
      title: "4 baths, 2 bathrooms in a beautiful culdesac",
      url: "https://zillow.com"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      Address: "122 John Street",
      title: "4 baths, 2 bathrooms in a beautiful culdesac",
      url: "https://zillow.com"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      Address: "122 John Street",
      title: "4 baths, 2 bathrooms in a beautiful culdesac",
      url: "https://zillow.com"
    }
  ];
  const pastListings = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      Address: "122 John St",
      title: "4 baths, 2 bathrooms in a beautiful culdesac",
      url: "https://zillow.com"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      Address: "122 John Street",
      title: "4 baths, 2 bathrooms in a beautiful culdesac",
      url: "https://zillow.com"
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
                <Address>{post.category}</Address>
                <Title>{post.title}</Title>
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
                <Address>{post.category}</Address>
                <Title>{post.title}</Title>
                <Link href={post.url}>Learn More</Link>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
    </AnimationRevealPage>
    
  );
};
