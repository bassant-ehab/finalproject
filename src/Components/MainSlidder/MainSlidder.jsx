import React from 'react'
import slide1 from '../../Assets/images/41nN4nvKaAL._AC_SY200_.jpg';
import slide2 from '../../Assets/images/61cSNgtEISL._AC_SY200_.jpg';
import blog1 from '../../Assets/images/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg';
import blog2 from '../../Assets/images/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg';
import Slider from "react-slick";

export default function MainSlider() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return <>
      <div className="container mt-5 m-auto justify-content-center">
        <div className="row mt-6">
          <div className="col-md-4">
          <Slider {...settings}>
            <img height={400} className='w-75' src={slide1} alt="" />
            <img height={400} className='w-75' src={slide2} alt="" />
      
  
      </Slider>
          </div>
          <div className="col-md-4">
          <img height={200} className='w-75' src={blog1} alt="" />
          <img height={200} className='w-75' src={blog2} alt="" />
          </div>
        </div>
      </div>
    </>
  }
  