import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PropTypes from "prop-types";

function ImageSlider({ images = [] }) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    infinite: true,
    fade: true,
    cssEase: "linear",
  };

  return (
    <Slider {...settings} className="flex justify-center">
      {images.map((image, index) => (
        <div key= {index} className ="flex justify-center"> 
        <img src= {image}
        alt= {`Slide ${index + 1}`} 
        className="w-full h-auto mx-auto rounded-lg shadow-md" />
        </div>
      ))}
    </Slider>


    // <Slider {...settings}>
    //   <img src="https://i.ibb.co.com/27BCrV1P/APK-foodview2.png" alt="Slide 1" />
    //   <img src="https://i.ibb.co.com/XZY1bjZY/ANAK-PANAH-VIEW.jpg" alt="Slide 2" />
    //   <img src="https://i.ibb.co.com/dsDyjxp1/ANAK-PANAH.jpg" alt="Slide 3" />
    // </Slider>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};


export default ImageSlider;