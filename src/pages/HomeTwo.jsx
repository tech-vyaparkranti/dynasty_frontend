import React, { useEffect, useState } from 'react';
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BannerTwo from '../components/banner/BannerTwo'
import AdvanceForm from '../components/form/AdvanceForm'
import AboutTwo from '../components/about/AboutTwo'
import FacilitiesTwo from '../components/facilities/FacilitiesTwo'
import RoomTwo from '../components/room/RoomTwo'
import TestimonialTwo from '../components/testimonials/TestimonialTwo'
import VideoTwo from '../components/videos/VideoTwo'
import OfferTwo from '../components/offer/OfferTwo'
import GalleryTwo from '../components/gallery/GalleryTwo'
import FooterOne from '../components/footer/FooterOne'
import posts from '../components/data/data-room.json'
import HomeRoom from '../components/room-details/HomeRoom'
import BookingModal from '../components/header/BookingModal'
import AwardsSection from '../components/award/AwardsSection';
import GuestReviewHome from '../components/GuestExperience/GuestReviewHome';
 
 
 

function HomeTwo() {

  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
  const hasShown = sessionStorage.getItem('bookingShown');
  if (!hasShown) {
    const timer = setTimeout(() => {
      setShowBookingModal(true);
      sessionStorage.setItem('bookingShown', 'true');
    }, 15000);
    return () => clearTimeout(timer);
  }
}, []);
 
 

  const handleCloseBooking = () => {
    setShowBookingModal(false);
  };
  return (
    <div>
        <TopBar />
        <HeaderOne />
        <BannerTwo />
        <AdvanceForm />
        <AboutTwo />
        <FacilitiesTwo />
        <RoomTwo posts={posts}/>
        {/* <HomeRoom /> */}
         
        
        <TestimonialTwo />
        <GuestReviewHome />
        <VideoTwo />
        <OfferTwo />
        <GalleryTwo limit={4} />
        {/* <BookingModal show={showBookingModal} handleClose={handleCloseBooking} /> */}
        <BookingModal show={showModal} handleClose={setShowModal} autoShowTime={20000} />
        <AwardsSection />
        <FooterOne />
    </div>
  )
}

export default HomeTwo


// import React from 'react';
// import TopBar from '../components/header/TopBar';
// import HeaderOne from '../components/header/HeaderOne';
// import BannerTwo from '../components/banner/BannerTwo';
// import AdvanceForm from '../components/form/AdvanceForm';
// import AboutTwo from '../components/about/AboutTwo';
// import FacilitiesTwo from '../components/facilities/FacilitiesTwo';
// import RoomTwo from '../components/room/RoomTwo';
// import TestimonialTwo from '../components/testimonials/TestimonialTwo';
// import VideoTwo from '../components/videos/VideoTwo';
// import OfferTwo from '../components/offer/OfferTwo';
// import GalleryTwo from '../components/gallery/GalleryTwo';
// import FooterOne from '../components/footer/FooterOne';
// // import posts from '../components/data/data-room.json';
// import HomeRoom from '../components/room-details/HomeRoom';
// import FloatingButtons from './FloatingsButtons';
 

// function HomeTwo() {
//   // Configure your contact details and booking URL here
//   const phoneNumber = "+1234567890"; // Replace with your actual phone number
//   const whatsappNumber = "1234567890"; // Replace with your WhatsApp number (without the + sign)
//   const bookingEngineUrl = "/booking"; // Replace with your booking engine URL
  
//   return (
//     <div>
//       <TopBar />
//       <HeaderOne />
//       <BannerTwo />
//       <AdvanceForm />
//       <AboutTwo />
//       <FacilitiesTwo />
//       {/* <RoomTwo posts={posts}/> */}
//       <HomeRoom />
//       <TestimonialTwo />
//       <VideoTwo />
//       <OfferTwo />
//       <GalleryTwo limit={8} />
//        <FloatingButtons
//         phoneNumber={phoneNumber}
//         whatsappNumber={whatsappNumber}
//         bookingUrl={bookingEngineUrl}
//       />
//       <FooterOne />
      
//       {/* Floating contact and booking buttons */}
      
//     </div>
//   );
// }

// export default HomeTwo;