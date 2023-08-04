import React from 'react';
import tw from 'twin.macro';
import WechatQR from 'images/IMG_8640 (2).png'
const ModalOverlay = tw.div`fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50`;

const ModalContent = tw.div`flex bg-white p-6 justify-end rounded shadow-lg`;
const QRCode = tw.img`max-w-full max-h-full`
const CloseButton = tw.button`flex items-center justify-center absolute p-4
bg-primary-500 rounded-full text-white
hover:bg-red-300 hover:text-white transition
h-12 w-12`;

const ImageModal = ({onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
      <CloseButton onClick={onClose}>X</CloseButton>
        <QRCode src={WechatQR} alt="Modal" />
      </ModalContent>
    </ModalOverlay>
  );
};

export default ImageModal;