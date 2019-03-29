import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ImageGallery from 'react-image-gallery';
import Img from 'gatsby-image'
import "react-image-gallery/styles/css/image-gallery.css";

const getImages = (en, it, langKey) => {
  let images;
  switch(langKey){
    case('en'):
      images = en;
    break;
    case('it'):
      images = it;
    break;
  }
  return images;
}

function renderImage(item) {

  return (
    <div className='image-gallery-image'>
    {
      item.imageSet ?
        <picture>
          {
            item.imageSet.map((source, index) => (
              <source
                key={index}
                media={source.media}
                srcSet={source.srcSet}
                type={source.type}
              />
            ))
          }
          <img
            alt={item.originalAlt}
            src={item.original}
          />
        </picture>
      :
        <img
          src={item.original}
          alt={item.originalAlt}
          srcSet={item.srcSet}
          sizes={item.sizes}
          title={item.originalTitle}
        />
    }

    {
      item.description &&
        <span className='image-gallery-description'>
          {item.description}
        </span>
    }
  </div>

  );
}

const Gallery = ( { en, it, langKey, display } ) => {
  if (display==false) {
    return null;
  };
  const images = getImages(en, it, langKey);
  return (

     <ImageGallery lazyLoad={true} showBullets={true} renderItem={renderImage} items={images} />

);
}


Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery;
