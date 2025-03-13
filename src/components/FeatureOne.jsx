"use client";
import React from "react";
import Link from "next/link";
import Slider from "react-slick";

const FeatureOne = () => {
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
    speed: 1000,
    slidesToShow: 10,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1699,
        settings: {
          slidesToShow: 9,
        },
      },
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 359,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className='feature' id='featureSection'>
      <div className='container container-lg'>
        <div className='position-relative arrow-center'>
          <div className='flex-align'>
            <button
              type='button'
              id='feature-item-wrapper-prev'
              className='slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1'
            >
              <i className='ph ph-caret-left' />
            </button>
            <button
              type='button'
              id='feature-item-wrapper-next'
              className='slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1'
            >
              <i className='ph ph-caret-right' />
            </button>
          </div>
          <div className='feature-item-wrapper'>
            <Slider {...settings}>
              <div className='feature-item text-center'>
                <div className='feature-item__thumb rounded-circle'>
                  <Link href='/pooja' className='w-100 h-100 flex-center'>
                    <img src='assets/images/thumbs/pooja-ganesh.png' alt='' />
                  </Link>
                </div>
                <div className='feature-item__content mt-16'>
                  <h6 className='text-lg mb-8'>
                    <Link href='/pooja' className='text-inherit'>
                      Ganesh Pooja
                    </Link>
                  </h6>
                  <span className='text-sm text-gray-400'>Book Now</span>
                </div>
              </div>
              <div className='feature-item text-center'>
                <div className='feature-item__thumb rounded-circle'>
                  <Link href='/pooja' className='w-100 h-100 flex-center'>
                    <img src='assets/images/thumbs/pooja-lakshmi.png' alt='' />
                  </Link>
                </div>
                <div className='feature-item__content mt-16'>
                  <h6 className='text-lg mb-8'>
                    <Link href='/pooja' className='text-inherit'>
                      Lakshmi Pooja
                    </Link>
                  </h6>
                  <span className='text-sm text-gray-400'>Book Now</span>
                </div>
              </div>
              <div className='feature-item text-center'>
                <div className='feature-item__thumb rounded-circle'>
                  <Link href='/pooja' className='w-100 h-100 flex-center'>
                    <img src='assets/images/thumbs/pooja-shiva.png' alt='' />
                  </Link>
                </div>
                <div className='feature-item__content mt-16'>
                  <h6 className='text-lg mb-8'>
                    <Link href='/pooja' className='text-inherit'>
                      Shiva Abhishekam
                    </Link>
                  </h6>
                  <span className='text-sm text-gray-400'>Book Now</span>
                </div>
              </div>
              <div className='feature-item text-center'>
                <div className='feature-item__thumb rounded-circle'>
                  <Link href='/pooja' className='w-100 h-100 flex-center'>
                    <img src='assets/images/thumbs/pooja-navagraha.png' alt='' />
                  </Link>
                </div>
                <div className='feature-item__content mt-16'>
                  <h6 className='text-lg mb-8'>
                    <Link href='/pooja' className='text-inherit'>
                      Navagraha Pooja
                    </Link>
                  </h6>
                  <span className='text-sm text-gray-400'>Book Now</span>
                </div>
              </div>
              <div className='feature-item text-center'>
                <div className='feature-item__thumb rounded-circle'>
                  <Link href='/pooja' className='w-100 h-100 flex-center'>
                    <img src='assets/images/thumbs/pooja-satyanarayan.png' alt='' />
                  </Link>
                </div>
                <div className='feature-item__content mt-16'>
                  <h6 className='text-lg mb-8'>
                    <Link href='/pooja' className='text-inherit'>
                      Satyanarayan Pooja
                    </Link>
                  </h6>
                  <span className='text-sm text-gray-400'>Book Now</span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
