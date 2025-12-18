
import Navbar from "../components/components/navebar";
import Banner from "../components/components/banner";
import Footer from "../components/components/footer";
import biriyani from "../assets/biriyani.jpg";



const Home = () => {

  return (
    <>
      <Navbar />
      <Banner />
      {/* --- Second Slide --- */}
<section className="sticky top-0  w-full flex flex-col md:flex-row items-center justify-evenly min-h-[400px] md:h-[500px] bg-white ">
  
  {/* Left Side - Image */}
  <div   className="w-full h-full md:w-1/2 flex justify-center border rounded-r-full items-center mb-0 md:mb-0 bg-slate-100">
    <div className="bg-slate-50 shadow-lg rounded-lg p-3 border-2 border-gray-200 transform hover:scale-105 transition-transform duration-300">
      <img
        src={biriyani}
        alt="Delicious Biryani"
        className="rounded w-[200px] h-[400px] sm:w-[350px] md:w-[420px] object-contain"
      />
    </div>
  </div>

  {/* Right Side - Yellow Box */}
  <div className="w-full h-full md:w-1/2 bg-yellow-400 rounded-l-[60px] flex flex-col justify-center px-8 sm:px-16 md:px-12 lg:px-16 py-8 text-gray-900">
    <p className="text-base md:text-2xl leading-relaxed text-center md:text-left">
      We partner only with trusted restaurants, serving you delicious meals with quality, care, and speedy delivery
      <br />
      <br />
      Our recommended restaurants are handpicked for their quality, freshness,
      and flavor, making your dining experience unforgettable.
    </p>
  </div>
</section>



     


      <div className="sticky top-0  min-h-[600px] md:h-[600px] lg:h-[700px] flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
        <h2 className="text-4xl font-bold">The Third slide</h2>
        <p className="mt-2">Scroll Down</p>
      </div>

      <Footer/>

    </>
  )
}


export default Home