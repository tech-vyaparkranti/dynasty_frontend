import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Baby } from 'lucide-react';

const RoomCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const rooms = [
    {
      id: 1,
      title: "Super Deluxe lake view Room",
      roomsLeft: 6,
      maxAdults: 4,
      maxChildren: 1,
      price: 5500,
      description: "The Deluxe rooms at Dynasty resort, Nainital consists all room facility that make the stay comfortable. Coloured Tv along with Cable facility, a big...",
      image: "/assets/images/roomTarrif/suerduluxLakev.png"
    },
    {
      id: 2,
      title: "Super Deluxe Valley View Room",
      roomsLeft: 6,
      maxAdults: 4,
      maxChildren: 1,
      price: 5700,
      description: "Super Deluxe Rooms at dynasty resort, Nainital consists of a well laid out room with bay type windows facing towards lush green valley. The room is...",
      image: "/assets/images/roomTarrif/superDLV.png"
    },
    {
      id: 3,
      title: "Executive Suite",
      roomsLeft: 27,
      maxAdults: 4,
      maxChildren: 1, 
      price: 5000,
      description: "Each of the Rooms have been designed and furnished in unique themes and style with the finest in luxury accommodation. All Rooms have a Luxury sitting...",
      image: "/assets/images/roomTarrif/ExcutiveRoomWithBalcony.jpeg"
    },
    {
      id: 4,
      title: "Pent House",
      roomsLeft: 6,
      maxAdults: 4,
      maxChildren: 1,
      price: 5800,
      description: "The Penthouse Suite offers the very definition of luxury with 900 square feet of gorgeous, elegant space with living area. The Penthouse features...",
      image: "/assets/images/roomTarrif/pentHouse.png"
    },
    {
      id: 5,
      title: "Family Suite",
      roomsLeft: 4,
      maxAdults: 6,
      maxChildren: 1,
      price: 10000,
      description: "The rooms are quite spacious, airy and furnished with high quality furnishings. We aim at delivering comfort that can make your stay in Nainital...",
      image: "/assets/images/roomTarrif/familyRommWithBalcony.jpeg"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : rooms.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < rooms.length - 1 ? prev + 1 : 0));
  };

  const containerStyle = {
    maxWidth: '1400px', 
    margin: '0 auto', 
    padding: isMobile ? '30px 15px' : '50px 20px',
    background: '#f5f5f5'
  };

  const headerStyle = {
    marginBottom: isMobile ? '25px' : '40px',
    textAlign: isMobile ? 'center' : 'left'
  };

  const titleStyle = {
    fontSize: isMobile ? '24px' : '36px',
    fontWeight: '400',
    color: '#333',
    margin: '0 0 8px 0',
    fontFamily: 'Georgia, serif'
  };

  const subtitleStyle = {
    fontSize: isMobile ? '14px' : '16px',
    color: '#666',
    margin: 0
  };

  const sliderWrapperStyle = {
    position: 'relative',
    padding: isMobile ? '0 45px' : '0 80px'
  };

  const navButtonStyle = (isLeft) => ({
    position: 'absolute',
    left: isLeft ? (isMobile ? '0' : '10px') : 'auto',
    right: isLeft ? 'auto' : (isMobile ? '0' : '10px'),
    top: isMobile ? '120px' : '140px',
    transform: 'translateY(-50%)',
    background: 'white',
    border: '2px solid #ddd',
    width: isMobile ? '40px' : '50px',
    height: isMobile ? '40px' : '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10,
    transition: 'all 0.3s ease'
  });

  const cardContainerStyle = {
    background: 'white',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
    height: isMobile ? 'auto' : '280px',
    overflow: 'hidden'
  };

  const imageContainerStyle = {
    width: isMobile ? '100%' : '32%',
    height: isMobile ? '220px' : '100%',
    flexShrink: 0,
    position: 'relative',
    overflow: 'hidden'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const badgeStyle = {
    position: 'absolute',
    top: '12px',
    left: '12px',
    background: 'rgba(255, 255, 255, 0.95)',
    padding: isMobile ? '3px 10px' : '4px 12px',
    borderRadius: '4px',
    fontSize: isMobile ? '11px' : '13px',
    fontWeight: '500',
    color: '#ff6347'
  };

  const contentStyle = {
    flex: 1,
    padding: isMobile ? '20px' : '30px 35px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const headerRowStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'flex-start' : 'flex-start',
    marginBottom: isMobile ? '12px' : '18px',
    gap: isMobile ? '10px' : '0'
  };

  const roomTitleStyle = {
    fontSize: isMobile ? '20px' : '26px',
    fontWeight: '400',
    color: '#333',
    margin: 0,
    fontFamily: 'Georgia, serif',
    lineHeight: '1.3',
    maxWidth: isMobile ? '100%' : '60%'
  };

  const priceContainerStyle = {
    textAlign: isMobile ? 'left' : 'right'
  };

  const priceStyle = {
    fontSize: isMobile ? '26px' : '32px',
    fontWeight: '700',
    color: '#333',
    lineHeight: '1'
  };

  const priceLabelStyle = {
    fontSize: isMobile ? '11px' : '13px',
    color: '#888',
    marginTop: '4px'
  };

  const metaContainerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '8px' : '30px',
    marginBottom: isMobile ? '12px' : '16px'
  };

  const metaItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#666',
    fontSize: isMobile ? '13px' : '15px'
  };

  const descriptionStyle = {
    fontSize: isMobile ? '14px' : '15px',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: isMobile ? '15px' : '20px'
  };

  const buttonStyle = {
    background: 'linear-gradient(to right, #ff7755, #ff9966)',
    color: 'white',
    border: 'none',
    padding: isMobile ? '12px 24px' : '14px 32px',
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: '500',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    maxWidth: isMobile ? '100%' : '320px',
    transition: 'all 0.3s ease'
  };

  const dotsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: isMobile ? '8px' : '10px',
    marginTop: isMobile ? '25px' : '35px'
  };

  const dotStyle = (isActive) => ({
    width: isMobile ? '8px' : '10px',
    height: isMobile ? '8px' : '10px',
    borderRadius: '50%',
    background: isActive ? '#ff7755' : '#d0d0d0',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  });

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h2 style={titleStyle}>Available Rooms</h2>
        <p style={subtitleStyle}>Choose from our exclusive selection of rooms</p>
      </div>

      {/* Slider */}
      <div style={sliderWrapperStyle}>
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          style={navButtonStyle(true)}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f9f9f9';
            e.currentTarget.style.borderColor = '#999';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.borderColor = '#ddd';
          }}
        >
          <ChevronLeft size={isMobile ? 18 : 22} strokeWidth={2.5} />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          style={navButtonStyle(false)}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f9f9f9';
            e.currentTarget.style.borderColor = '#999';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.borderColor = '#ddd';
          }}
        >
          <ChevronRight size={isMobile ? 18 : 22} strokeWidth={2.5} />
        </button>

        {/* Current Slide */}
        <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
          <div style={cardContainerStyle}>
            {/* Image Section */}
            <div style={imageContainerStyle}>
              <img
                src={rooms[currentIndex].image}
                alt={rooms[currentIndex].title}
                style={imageStyle}
              />
              <div style={badgeStyle}>
                ( Only {rooms[currentIndex].roomsLeft} Room(s) left)
              </div>
            </div>

            {/* Content Section */}
            <div style={contentStyle}>
              <div>
                {/* Title and Price Row */}
                <div style={headerRowStyle}>
                  <h3 style={roomTitleStyle}>
                    {rooms[currentIndex].title}
                  </h3>
                  <div style={priceContainerStyle}>
                    <div style={priceStyle}>
                      ₹ {rooms[currentIndex].price.toLocaleString('en-IN')}/-
                    </div>
                    <div style={priceLabelStyle}>
                      Avg. Per Room/Night
                    </div>
                  </div>
                </div>

                {/* Capacity Info */}
                <div style={metaContainerStyle}>
                  <div style={metaItemStyle}>
                    <Users size={isMobile ? 16 : 18} color="#888" />
                    <span>Max Adults - {rooms[currentIndex].maxAdults}</span>
                  </div>
                  <div style={metaItemStyle}>
                    <Baby size={isMobile ? 16 : 18} color="#888" />
                    <span>Max Child - {rooms[currentIndex].maxChildren}</span>
                  </div>
                </div>

                {/* Description */}
                <p style={descriptionStyle}>
                  {rooms[currentIndex].description}{' '}
                  <a 
                    href="https://www.asiatech.in/booking_engine/index3.php?token=MTY=" 
                    style={{
                      color: '#f5a623',
                      textDecoration: 'none',
                      fontWeight: '500'
                    }}
                  >
                    Read More
                  </a>
                </p>
              </div>

              {/* Button */}
              <button
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #ff6644, #ff8855)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 119, 85, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #ff7755, #ff9966)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onClick={() => {
                  window.location.href = 'https://www.asiatech.in/booking_engine/index3.php?token=MTY=';
                }}
              >
                View Other Available Rates
              </button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={dotsContainerStyle}>
          {rooms.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={dotStyle(index === currentIndex)}
              onMouseEnter={(e) => {
                if (index !== currentIndex) {
                  e.currentTarget.style.background = '#aaa';
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentIndex) {
                  e.currentTarget.style.background = '#d0d0d0';
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomCardSlider;