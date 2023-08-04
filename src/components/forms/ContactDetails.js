import React, {useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";

import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import {ReactComponent as WeChatIcon} from "../../images/wechat.svg"
import {ReactComponent as FacebookIcon} from "../../images/facebook-icon.svg"
import Angie from "../../images/angie.png"
import ImageModal from "../WechatModal";
import Kitchen from "../../images/kitchen.jpg";
const Container = tw.div`relative sm:mx-10`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const PrimaryBackgroundContainer = tw.div`w-[500px] bg-primary-900`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);
const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-10 h-10`}
  }
`;
const Wechat= styled.button`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-10 h-10`}
  }
`;
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`
const ContactHeading = tw(SectionHeading)` font-normal mt-4 text-left text-white text-xl sm:text-xl lg:text-xl`;
const Separator = tw.div` mt-2 mr-20 w-[400px] h-px bg-white`;
const ContactInformation = tw.p`text-white mt-2 `;
const AngieImage= tw.img`ml-16 justify-center`;
const KitchenImage = tw.img`mt-4`;
export default ({
  subheading = "Work with Angie",
  heading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr/> with me.</>,
  description = "Angie brings years worth of market knowledge and valuable insight into local school districts, property values, neighborhoods, and subdivisions.",
  submitButtonText = "Contact Me",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Container>
      <TwoColumn>
      <PrimaryBackgroundContainer>
            <TextColumn>
                <ContactHeading>
                  Contact Details
                </ContactHeading>
                <Separator/>
                <ContactInformation>
                    <a href="tel:4125643338" className="underline">Mobile: +1 412-564-3338</a>
                </ContactInformation>
                <ContactInformation>
                    <a href="mailto:angiexu@kw.com" className="underline">Email: angiexu@kw.com</a>
                </ContactInformation>
                <ContactInformation>
                    <p>1500 Oxford Drive, Suite 300 Pittsburgh, PA 15241</p>
                </ContactInformation>
                <SocialLinksContainer >
                  <Wechat onClick={handleButtonClick}>
                    {showModal && (
                                  <ImageModal
                                    onClose={handleCloseModal}
                                  />
                      )}
                      <WeChatIcon/>
                  </Wechat>
                  <SocialLink href="https://www.facebook.com/PittsburghRealEstateYuyingXu?hc_ref=ARRtEHi2PdWl5KjoyEY8rZPwfSCR4oco3-KBFyXoHF9as_uMfZPUlaB7tUSzV615oTY&fref=nf&__xts__[0]=68.ARAdyJBOzMjxx-wGbQb_Msxcx2WNWETbP-4ZPLqLoMhH8UpqpALcKuUkbYknCqU8SOZ1TtUfTdZf9EKJbxHO-9lSeMdV_qsXIKK3nqnTZT8NMYSs_l8BO7AfIH2ae6DNtwSApna8aTnW_XgJkpjQQRvKhUmj4ctX3GpKTBIKIjNBBaJw8vOGcDe2_4wW-GmnxaagqxmvoDIvqHXenrC5FyLN9-TWXjFPmr7p4KvtgC5TXaRmIG-Ye-M8xB829bZTJDyaRiRvncFDYfAY4msOaacofqecOXdtB0RZpUNV9BUYR9MO91E">
                      <FacebookIcon/>
                  </SocialLink>
                </SocialLinksContainer>
            </TextColumn>
            <AngieImage src={Angie}/>
      </PrimaryBackgroundContainer>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            
          </TextContent>
          <KitchenImage src={Kitchen} alt="kitchen"/>           
          
        </TextColumn>
        
        
      </TwoColumn>
    </Container>
  );
};
