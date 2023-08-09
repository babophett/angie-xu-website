// HouseModal.js
import React from 'react';
import tw from 'twin.macro';

const Overlay = tw.div`fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50`;

const ModalContainer = tw.div`flex bg-white p-6 rounded-md shadow-lg`;

const HouseImage = tw.img`w-full h-auto rounded-md mb-2`;


const Address = tw.h2`text-xl font-semibold`;

const Description = tw.p`text-sm text-gray-700 mb-2`;

const Location = tw.p`text-sm text-gray-500 mb-2`;

const Pricing = tw.p`text-lg font-semibold mb-2`;

const BedsBaths = tw.p`text-sm text-gray-500`;

const CloseButton = tw.button`flex items-center justify-center absolute p-4
bg-primary-500 rounded-full text-white
hover:bg-red-300 hover:text-white transition
h-12 w-12`;

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