import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = ({images}) => {

  return (
      <Slide>
        {images && images.map((image, index) => (
            <img key={index} src={image} alt={`slide-${index}`} />
        ))}
      </Slide>
  );
};

export default Slideshow;
