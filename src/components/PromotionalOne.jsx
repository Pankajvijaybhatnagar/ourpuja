import React from "react";
import Link from "next/link";

const PromotionalOne = () => {
  return (
    <section className='promotional-banner pt-80'>
      <div className='container container-lg'>
        <div className='row gy-4'>
          <div className='col-xl-3 col-sm-6 col-xs-6'>
            <div className='promotional-banner-item position-relative rounded-24 overflow-hidden z-1'>
              <img
                src='assets/images/thumbs/pooja-banner1.png'
                alt=''
                className='position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1'
              />
              <div className='promotional-banner-item__content'>
                <h6 className='promotional-banner-item__title text-32'>
                  Book a Special Pooja
                </h6>
                <Link
                  href='/pooja'
                  className='btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24'
                >
                  Book Now
                  <span className='icon text-xl d-flex'>
                    <i className='ph ph-hands-praying' />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-sm-6 col-xs-6'>
            <div className='promotional-banner-item position-relative rounded-24 overflow-hidden z-1'>
              <img
                src='assets/images/thumbs/pooja-banner2.png'
                alt=''
                className='position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1'
              />
              <div className='promotional-banner-item__content'>
                <h6 className='promotional-banner-item__title text-32'>
                  Perform Personalized Rituals
                </h6>
                <Link
                  href='/pooja'
                  className='btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24'
                >
                  Book Now
                  <span className='icon text-xl d-flex'>
                    <i className='ph ph-hands-praying' />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-sm-6 col-xs-6'>
            <div className='promotional-banner-item position-relative rounded-24 overflow-hidden z-1'>
              <img
                src='assets/images/thumbs/pooja-banner3.png'
                alt=''
                className='position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1'
              />
              <div className='promotional-banner-item__content'>
                <h6 className='promotional-banner-item__title text-32'>
                  Receive Divine Blessings
                </h6>
                <Link
                  href='/pooja'
                  className='btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24'
                >
                  Book Now
                  <span className='icon text-xl d-flex'>
                    <i className='ph ph-hands-praying' />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-sm-6 col-xs-6'>
            <div className='promotional-banner-item position-relative rounded-24 overflow-hidden z-1'>
              <img
                src='assets/images/thumbs/pooja-banner4.png'
                alt=''
                className='position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1'
              />
              <div className='promotional-banner-item__content'>
                <h6 className='promotional-banner-item__title text-32'>
                  Connect with Expert Priests
                </h6>
                <Link
                  href='/pooja'
                  className='btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24'
                >
                  Book Now
                  <span className='icon text-xl d-flex'>
                    <i className='ph ph-hands-praying' />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalOne;
