// HouseModal.js
import React from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';

const Overlay = styled.div`
  ${tw`fixed inset-0 bg-black opacity-50 z-50`}
`;

const ModalContainer = styled.div`
  ${tw`fixed bg-white p-4 rounded-md shadow-lg z-50`}
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 400px;
`;

const HouseImage = styled.img`
  ${tw`w-full h-auto rounded-md mb-2`}
`;

const Address = styled.h2`
  ${tw`text-xl font-semibold`}
`;

const Description = styled.p`
  ${tw`text-sm text-gray-700 mb-2`}
`;

const Location = styled.p`
  ${tw`text-sm text-gray-500 mb-2`}
`;

const Pricing = styled.p`
  ${tw`text-lg font-semibold mb-2`}
`;

const BedsBaths = styled.p`
  ${tw`text-sm text-gray-500`}
`;

const CloseButton = styled.button`
  ${tw`absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700`}
`;

const HouseModal = ({ imageSrc, address, description, location, pricing, bedsBaths, onClose }) => {
  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <HouseImage src={imageSrc} alt="House" />
        <Address>{address}</Address>
        <Description>{description}</Description>
        <Location>{location}</Location>
        <Pricing>{pricing}</Pricing>
        <BedsBaths>{bedsBaths}</BedsBaths>
      </ModalContainer>
    </>
  );
};

export default HouseModal;