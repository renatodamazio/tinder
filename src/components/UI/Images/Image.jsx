/* eslint-disable react/prop-types */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Image = ({ src, width, height, className, style, id, alt }) => {
  return (
    <LazyLoadImage
      effect="opacity"
      src={src}
      width={width}
      height={height}
      className={className}
      style={style}
      id={id}
      alt={alt}
    />
  );
};

export default Image;
