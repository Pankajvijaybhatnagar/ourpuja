"use client";
import React from "react";
import Link from "next/link";
import Slider from "react-slick";
const BannerOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        type='button'
        onClick={onClick}
        className={` ${className} slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1`}
      >
        <i className='ph ph-caret-right' />
      </button>
    );
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;

    return (
      <button
        type='button'
        onClick={onClick}
        className={`${className} slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1`}
      >
        <i className='ph ph-caret-left' />
      </button>
    );
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className='banner'>
      <div className='container container-lg'>
        <div className='banner-item rounded-24 overflow-hidden position-relative arrow-center'>
          <a
            href='#featureSection'
            className='scroll-down w-84 h-84 text-center flex-center bg-main-600 rounded-circle border border-5 text-white border-white position-absolute start-50 translate-middle-x bottom-0 hover-bg-main-800'
          >
            <span className='icon line-height-0'>
              <i className='ph ph-caret-double-down' />
            </span>
          </a>
          <img
            src='/assets/images/bg/banner-bg.png'
            alt=''
            className='banner-img position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1 object-fit-cover rounded-24'
          />
          <div className='flex-align'></div>
          <div className='banner-slider'>
            <Slider {...settings}>
              <div className='banner-slider__item'>
                <div className='banner-slider__inner flex-between position-relative'>
                  <div className='banner-item__content'>
                    <h1 className='banner-item__title bounce'>
                      Book Your Online Pooja and Get Divine Blessings
                    </h1>
                    <Link
                      href='/pooja'
                      className='btn btn-main d-inline-flex align-items-center rounded-pill gap-8'
                    >
                      Explore Pooja
                      <span className='icon text-xl d-flex'>
                        <i className='ph ph-hands-praying' />
                      </span>
                    </Link>
                  </div>
                  <div className='banner-item__thumb'>
                    <img src='assets/images/thumbs/pooja-banner1.png' alt='' />
                  </div>
                </div>
              </div>
              <div className='banner-slider__item'>
                <div className='banner-slider__inner flex-between position-relative'>
                  <div className='banner-item__content'>
                    <h1 className='banner-item__title'>
                      Experience Sacred Rituals with Expert Priests
                    </h1>
                    <Link
                      href='/pooja'
                      className='btn btn-main d-inline-flex align-items-center rounded-pill gap-8'
                    >
                      Explore Pooja
                      <span className='icon text-xl d-flex'>
                        <i className='ph ph-hands-praying' />
                      </span>
                    </Link>
                  </div>
                  <div className='banner-item__thumb'>
                    <img src='assets/images/thumbs/pooja-banner2.png' alt='' />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );

};

export default BannerOne;
