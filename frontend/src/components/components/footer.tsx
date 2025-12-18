// import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
// import logo from "../../assets/icon2.png";
// import wave from "../../assets/wave.svg";

// const Footer = () => {
//   return (
//     <footer className="relative bg-white overflow-hidden min-h-[320px] md:h-[320px]">
//       {/* --- Top Section --- */}
//       <div className="relative z-20 flex flex-col md:flex-row justify-evenly items-start px-8 md:px-20 pt-10 md:pt-14 pb-20 gap-12">
//         {/* Left: Logo + Tagline */}
//         <div className="flex flex-col items-start space-y-5 md:w-1/3">
//           <p className="text-lg md:text-xl text-gray-900 italic">
//             Delivering happiness, Fresh flavors, fast delivery
//           </p>
//           <img
//             src={logo}
//             alt="FoodHop Logo"
//             className="w-40 md:w-48" // bigger logo
//           />
//         </div>

//         {/* Middle: Links */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 sm:gap-24 text-gray-700">
//           <div>
//             <h4 className="font-semibold text-base mb-3 text-gray-800"></h4>
//             <ul className="space-y-3 text-md">
//               <li><a href="#" className="hover:text-yellow-500 transition">Home</a></li>
//               <li><a href="#" className="hover:text-yellow-500 transition">Shop</a></li>
//               <li><a href="#" className="hover:text-yellow-500 transition">Join Our Network</a></li>
//               <li><a href="#" className="hover:text-yellow-500 transition">Contact Us</a></li>
//               <li><a href="#" className="hover:text-yellow-500 transition">About Us</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold text-base mb-3 text-gray-800"></h4>
//             <ul className="space-y-3 text-md">
//               <li><a href="#" className="hover:text-yellow-500 transition">Cart</a></li>
//               <li><a href="#" className="hover:text-yellow-500 transition">Favourite</a></li>
//               <li><a href="#" className="hover:text-yellow-500 transition">Profile</a></li>
//               <li><a href="#" className="hover:text-yellow-500 transition">Notifications</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold text-base mb-3 text-gray-800"></h4>
//             <ul className="space-y-3 text-md">
//               <li><a href="#" className="hover:text-yellow-500 transition">Help</a></li>
//               <li><a href="#" className="hover:text-yellow-500 transition">Terms And Conditions</a></li>
//               <li><a href="#" className="hover:text-yellow-500 transition">Privacy Policy</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* --- Bottom Section --- */}
//       <div className="relative z-20 pb-8 bottom-24 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6">
//         <p className="font-medium text-gray-800">You Can Reach Us Through</p>
//         <div className="flex space-x-4 text-gray-800 text-xl">
//           <FaInstagram className="cursor-pointer hover:scale-110 transition-transform" />
//           <FaTwitter className="cursor-pointer hover:scale-110 transition-transform" />
//           <FaFacebook className="cursor-pointer hover:scale-110 transition-transform" />
//         </div>
//       </div>

//       {/* --- Wave Background --- */}
//       <img
//         src={wave}
//         alt="wave"
//         className="absolute bottom-0 left-0 w-full h-[340px] object-cover z-10"
//       />
//     </footer>
//   );
// };

// export default Footer;


import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import logo from "../../assets/icon2.png";
import wave from "../../assets/wave.svg";

const Footer = () => {
  return (
    <footer className="relative bg-white overflow-hidden min-h-[380px] md:h-[380px]">
      {/* --- Top Section --- */}
      <div className="relative z-20 flex flex-col md:flex-row justify-evenly items-start px-6 sm:px-10 md:px-20 pt-10 md:pt-14 pb-24 gap-10 md:gap-12">
        {/* Left: Logo + Tagline */}
        <div className="flex flex-col items-center md:items-start space-y-5 md:w-1/3 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl text-gray-900 italic leading-snug">
            Delivering happiness, Fresh flavors, fast delivery
          </p>
          <img
            src={logo}
            alt="FoodHop Logo"
            className="w-32 sm:w-40 md:w-48"
          />
        </div>

        {/* Middle: Links */}
        <div className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16 text-gray-700 text-center md:text-left">
          <div>
            <h4 className="font-semibold text-base mb-3 text-gray-800"></h4>
            <ul className="space-y-2 sm:space-y-3 text-md">
              <li><a href="#" className="hover:text-yellow-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Shop</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Join Our Network</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-3 text-gray-800"></h4>
            <ul className="space-y-2 sm:space-y-3 text-md">
              <li><a href="#" className="hover:text-yellow-500 transition">Cart</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Favourite</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Profile</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Notifications</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-3 text-gray-800"></h4>
            <ul className="space-y-2 sm:space-y-3 text-md">
              <li><a href="#" className="hover:text-yellow-500 transition">Help</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Terms And Conditions</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- Bottom Section --- */}
      <div className="relative z-20 pb-8 bottom-14 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6">
        <p className="font-medium text-gray-800 text-sm sm:text-base">
          You Can Reach Us Through
        </p>
        <div className="flex space-x-4 text-gray-800 text-xl">
          <FaInstagram className="cursor-pointer hover:scale-110 transition-transform" />
          <FaTwitter className="cursor-pointer hover:scale-110 transition-transform" />
          <FaFacebook className="cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* --- Wave Background --- */}
      <img
        src={wave}
        alt="wave"
        className="absolute bottom-0 left-0 w-full h-[250px] sm:h-[300px] md:h-[340px] object-cover z-10"
      />
    </footer>
  );
};

export default Footer;
