import { useState, useEffect } from 'react';
import placeholderSrc from 'assets/images/preLoading.png';

const ProgressiveImg = ({ src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  const customClass =
    placeholderSrc && imgSrc === placeholderSrc
      ? 'loading-image'
      : 'loaded-image';

  return (
    <img
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ''}
      className={`${props.className} image ${customClass}`}
    />
  );
};
export default ProgressiveImg;
