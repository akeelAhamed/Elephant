import React from 'react';
import {Slider as MainSlider} from 'infinite-react-carousel';

const Slider = (props) => {
  const settings =  {
    arrows: props.arrow !== undefined,
    arrowsBlock: !false,
    centerMode: props.full === undefined,
    dots: props.nodots === undefined,
    accessibility: false
  };
  
  return (
    <MainSlider {...settings}>
      {props.children}
    </MainSlider>
  );
};

export default Slider;
