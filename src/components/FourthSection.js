// import React from 'react'
// import "../styles/FourthSection.css"
// import { MdStar } from "react-icons/md";
// import clean from "../images/clean.jpeg"
// import { BiSolidQuoteAltLeft } from "react-icons/bi";



// const FourthSection = () => {
//   return (
//     <div className='fourth'>
//       <div className='fourth-first'>
//         <h1>Testimonials That <br></br> speak to Our Results</h1>
//         <p>
//           Explore the positive experiences of our customers with Spid Solutions.
//           Road their stories about the reliability and satisfaction they`ve found in ourservives. Your trust is our motivation, and we`re delighted
//           to share what people are saying about us.
//         </p>
//       </div>
//       <div className='fourth-second'>
//            <div className='fourth-subcontainer'>
//                 <div className='fourth-heading'>
//                   <img src={clean} />

//                   <div className='fourth-subheading'>
//                        <MdStar />
//                        <MdStar />
//                        <MdStar />
//                        <MdStar />

//                      <h1>Daniel Cimanuka</h1>
//                      <h5>Home service client</h5>
//                   </div>
//                   <div className='quote'>
//                   <BiSolidQuoteAltLeft />
//                   </div>
//                 </div>

//                 <div className='testmony'>
//                     <p>
//                     I cannot express how grateful I am to Spid Solutions for transforming 
//                     my daily life. From the ease of booking services on their platform to the 
//                     exceptional housemaid they connected me with, every step was seamless. The
//                      relationship manager ensured that my specific needs were understood and met. Now, my
//                       home is not just clean; it's a haven of comfort. Thank you, Domestic 
//                     Agents, for making domestic services so accessible and reliable.
//                     </p>
//                 </div>
//            </div>
//       </div>
//     </div>
//   )
// }

// export default FourthSection

import React from 'react'
import "../styles/FourthSection.css"
import { MdStar } from "react-icons/md";
import clean from "../images/clean.jpeg"
import { BiSolidQuoteAltLeft } from "react-icons/bi";
// swipper



import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true}}
      // scrollbar={{ draggable: false}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{ delay: 3000}}

      breakpoints={{
        0:{
          slidesPerView:1,
        },
        768:{
             slidesPerView:2
        },
        1200:{
          slidesPerView:2
        }
      }}

    >
      <SwiperSlide>
        <div className='fourth-second'>
                  <div className='fourth-subcontainer'>
                       <div className='fourth-heading'>
                         <img src={clean} />

                         <div className='fourth-subheading'>
                              <MdStar />
                              <MdStar />
                              <MdStar />
                              <MdStar />

                            <h1>Daniel Cimanuka</h1>
                            <h5>Home service client</h5>
                         </div>
                         <div className='quote'>
                         <BiSolidQuoteAltLeft />
                         </div>
                       </div>

                       <div className='testmony'>
                           <p>
                           I cannot express how grateful I am to Spid Solutions for transforming
                           my daily life. From the ease of booking services on their platform to the
                           exceptional housemaid they connected me with, every step was seamless. The
                            relationship manager ensured that my specific needs were understood and met. Now, my
                             home is not just clean; it's a haven of comfort. Thank you, Domestic
                           Agents, for making domestic services so accessible and reliable.
                           </p>
                       </div>
                  </div>
              </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='fourth-second'>
                   <div className='fourth-subcontainer'>
                        <div className='fourth-heading'>
                          <img src={clean} />

                          <div className='fourth-subheading'>
                               <MdStar />
                               <MdStar />
                               <MdStar />
                               <MdStar />

                             <h1>Daniel Cimanuka</h1>
                             <h5>Home service client</h5>
                          </div>
                          <div className='quote'>
                          <BiSolidQuoteAltLeft />
                          </div>
                        </div>

                        <div className='testmony'>
                            <p>
                            I cannot express how grateful I am to Spid Solutions for transforming
                            my daily life. From the ease of booking services on their platform to the
                            exceptional housemaid they connected me with, every step was seamless. The
                             relationship manager ensured that my specific needs were understood and met. Now, my
                              home is not just clean; it's a haven of comfort. Thank you, Domestic
                            Agents, for making domestic services so accessible and reliable.
                            </p>
                        </div>
                   </div>
              </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='fourth-second'>
                  <div className='fourth-subcontainer'>
                       <div className='fourth-heading'>
                         <img src={clean} />

                         <div className='fourth-subheading'>
                              <MdStar />
                              <MdStar />
                              <MdStar />
                              <MdStar />

                            <h1>Daniel Cimanuka</h1>
                            <h5>Home service client</h5>
                         </div>
                         <div className='quote'>
                         <BiSolidQuoteAltLeft />
                         </div>
                       </div>

                       <div className='testmony'>
                           <p>
                           I cannot express how grateful I am to Spid Solutions for transforming
                           my daily life. From the ease of booking services on their platform to the
                           exceptional housemaid they connected me with, every step was seamless. The
                            relationship manager ensured that my specific needs were understood and met. Now, my
                             home is not just clean; it's a haven of comfort. Thank you, Domestic
                           Agents, for making domestic services so accessible and reliable.
                           </p>
                       </div>
                  </div>
             </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='fourth-second'>
                  <div className='fourth-subcontainer'>
                       <div className='fourth-heading'>
                         <img src={clean} />

                         <div className='fourth-subheading'>
                              <MdStar />
                              <MdStar />
                              <MdStar />
                              <MdStar />

                            <h1>Daniel Cimanuka</h1>
                            <h5>Home service client</h5>
                         </div>
                         <div className='quote'>
                         <BiSolidQuoteAltLeft />
                         </div>
                       </div>

                       <div className='testmony'>
                           <p>
                           I cannot express how grateful I am to Spid Solutions for transforming
                           my daily life. From the ease of booking services on their platform to the
                           exceptional housemaid they connected me with, every step was seamless. The
                            relationship manager ensured that my specific needs were understood and met. Now, my
                             home is not just clean; it's a haven of comfort. Thank you, Domestic
                           Agents, for making domestic services so accessible and reliable.
                           </p>
                       </div>
                  </div>
             </div>
      </SwiperSlide>

      ...
    </Swiper>
  );
};