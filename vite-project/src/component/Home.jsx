import ImageSlider from "./Slider";

const sliderImages = [
  "https://i.ibb.co.com/dsDyjxp1/ANAK-PANAH.jpg",
  "https://i.ibb.co.com/XZY1bjZY/ANAK-PANAH-VIEW.jpg",
  "https://i.ibb.co.com/27BCrV1P/APK-foodview2.png",
  "https://i.ibb.co.com/p6WrHJkH/APK2.jpg",
  "https://i.ibb.co.com/27BCrV1P/APK-foodview2.png",
];

const Home = () => {
    return (
      <section
        id="home"
        className="relative bg-cover bg-center py-24 px-6 md:px-20"
        style={{ backgroundImage: "url('https://i.ibb.co.com/RTdF4z3X/backgroundarrow.png')" }}
      >
  
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <ImageSlider images = {sliderImages} />
        </div>

        <div className="relative z-10 mt-10 max-w-4xl mx-auto bg-white/80 p-6 md:p-10 rounded-lg shadow-lg">
          <h2 className="text-center text-xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Welcome to Anak Panah Coffee
          </h2>
          <p className="text-lg md:text-xl font-sans font-light leading-relaxed text-gray-800 text-justify">
          Anak Panah Kopi (APK), yes it is Anak Panah! If you all wondering about how’s our social café named because I want to make this social café served in a priority-sharpened
          in a best quality with our archers (re: chefs and barista). Our all best service quality to customers is the first point above all,
          we and not to forget within our commitment and consistency that’s made us one of the best social café in Central Java.
          </p>
          <p className="text-lg md:text-xl font-sans font-light leading-relaxed text-gray-800 text-justify mt-4">
                This social café not only segmented for millennials, gen-z, professionals, or students, this social café built for everyone or might be if you’re lone-wolf will be fully energized with our menu and our cozy place that didn’t scared your bills.    
            </p>
            <p className="text-lg md:text-xl font-sans font-semibold text-gray-900 text-center mt-6">
                ☕ Your perfect experience waits at Anak Panah Coffee! ☕
            </p>
        </div>
      </section>
    );
  }

  export default Home