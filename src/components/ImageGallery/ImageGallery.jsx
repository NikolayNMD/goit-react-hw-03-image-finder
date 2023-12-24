import React from 'react';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, handleOpenModal }) => {
  return (
    <List>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          handleOpenModal={handleOpenModal}
        />
      ))}
    </List>
  );
};
