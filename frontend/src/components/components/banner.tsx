
import burgur from '../../assets/burgur.png';
import wave from '../../assets/wave.svg'
const Banner = () => {

    return (
<div className="sticky overflow-hidden">
  <div className="sticky flex flex-col md:flex-row items-center justify-between w-full min-h-[600px] md:h-[800px] border-b shadow-lg px-6 md:px-12 pt-24 md:pt-0">
    {/* Burger Image */}
    <div className="flex-shrink-0 z-10 mt-6 md:mt-16 md:w-1/2 flex justify-center">
      <img 
        src={burgur} 
        alt="burger" 
        className="w-56 sm:w-56 md:w-80 lg:w-[620px]" 
      />
    </div>

    {/* Text Content */}
    <div className="z-10 flex-1 text-center md:text-left mt-6 md:mt-0 px-2 md:px-8">
      <h1
        className="text-black text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp"
        style={{ animationDelay: "0.5s" }}
      >
        Hopping Flavors to Your Door
      </h1>
      <h6
        className="text-base sm:text-lg md:text-xl animate-fadeInUp"
        style={{ animationDelay: "0.8s" }}
      >
        Fresh meals, fast delivery, and flavors you’ll love — anytime, anywhere.
      </h6>
    </div>

    {/* Wave Image */}
    <img
      src={wave}
      alt="wave"
      className="absolute bottom-0 left-0 w-full h-auto object-cover"
    />
  </div>
</div>



    )
}

export default Banner;