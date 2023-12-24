import React from 'react';
import { Image, Item, ImageButton } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, handleOpenModal }) => {
  const tags = image.tags;
  const largeImageURL = image.largeImageURL;
  return (
    <Item>
      <ImageButton onClick={() => handleOpenModal({ tags, largeImageURL })}>
        <Image src={image.webformatURL} alt={image.tags} />
      </ImageButton>
    </Item>
  );
};
