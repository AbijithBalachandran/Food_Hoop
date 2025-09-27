
import Navbar from "../components/components/navebar";
import Banner from "../components/components/banner";
import Footer from "../components/components/footer";

const Home = () => {

  return (
    <>
      <Navbar />
      <Banner />
      <div className="sticky top-0 min-h-[300px] md:h-[500px] flex flex-col items-center justify-center bg-gradient-to-b shadow-lg text-black">
        <h2 className="text-4xl font-bold ">The Second slide</h2>
        <p className="mt-2">Scroll Down for next slide</p>
      </div>
      <div className="sticky top-0  min-h-[600px] md:h-[600px] lg:h-[700px] flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
        <h2 className="text-4xl font-bold">The Third slide</h2>
        <p className="mt-2">Scroll Down</p>
      </div>
      <Footer/>

    </>
  )
}


export default Home