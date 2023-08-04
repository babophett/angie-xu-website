import React, {useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/kellerwilliams.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import {ReactComponent as WeChatIcon} from "../../images/wechat.svg"
import ImageModal from "../WechatModal";
const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`
const Wechat= styled.button`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-10 h-10`}
  }
`;
const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-12`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-10 h-10`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>Keller Williams Realty</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="/properties">Properties</Link>
            <Link href="a">Home Search</Link>
            <Link href="/contact">Contact</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <Wechat onClick={handleButtonClick}>
                    {showModal && (
                                  <ImageModal
                                    onClose={handleCloseModal}
                                  />
                      )}
                      <WeChatIcon/>
            </Wechat>

            <SocialLink href="https://www.facebook.com/PittsburghRealEstateYuyingXu?hc_ref=ARRtEHi2PdWl5KjoyEY8rZPwfSCR4oco3-KBFyXoHF9as_uMfZPUlaB7tUSzV615oTY&fref=nf&__xts__[0]=68.ARAdyJBOzMjxx-wGbQb_Msxcx2WNWETbP-4ZPLqLoMhH8UpqpALcKuUkbYknCqU8SOZ1TtUfTdZf9EKJbxHO-9lSeMdV_qsXIKK3nqnTZT8NMYSs_l8BO7AfIH2ae6DNtwSApna8aTnW_XgJkpjQQRvKhUmj4ctX3GpKTBIKIjNBBaJw8vOGcDe2_4wW-GmnxaagqxmvoDIvqHXenrC5FyLN9-TWXjFPmr7p4KvtgC5TXaRmIG-Ye-M8xB829bZTJDyaRiRvncFDYfAY4msOaacofqecOXdtB0RZpUNV9BUYR9MO91E">
              <FacebookIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            Powered by Isaac Yap. &copy; Copyright 2023. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
