import React from 'react';
import {Slider as MainSlider} from 'infinite-react-carousel';

const Slider = (props) => {
  const settings =  {
    arrows: false,
    arrowsBlock: !false,
    centerMode: true,
    dots: true,
    accessibility: false
  };
  return (
    <MainSlider {...settings}>
        {props.children}
    </MainSlider>
  );
};

export default Slider;
