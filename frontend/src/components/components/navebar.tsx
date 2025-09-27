
import icon from '../../assets/icon2.png';
import { User, ShoppingCart, Heart, Bell, Menu } from "lucide-react";
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContex';


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const {user:_user,loading:_loading} = useAuth();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center rounded-b-3xl justify-between bg-yellow-400 h-20 px-6">
            <div className="flex items-center">
                <img src={icon} alt="FoodHop" className='h-16 w-auto' />
            </div>

            <div className='hidden lg:flex'>
                <ul className='flex space-x-8 text-lg font-medium'>
                    <li>
                        <Link to="/home" className='cursor-pointer hover:text-white'>Home</Link>
                    </li>
                    <li>
                        <Link to="/shop" className='cursor-pointer hover:text-white'>Shop</Link>
                    </li>
                    <li>
                        <Link to="/with_us" className='cursor-pointer hover:text-white' >With Us</Link>
                    </li>
                    <li >
                        <Link to="/contact" className='cursor-pointer hover:text-white' >Contact Us</Link>
                    </li>
                    <li >
                        <Link to="/About" className='cursor-pointer hover:text-white'>About Us</Link>
                    </li>
                </ul>
            </div>


            <div className='flex items-center space-x-6 md:absolute md:left-1/2 md:transform-x-1/2 lg:static'>
               {!_loading &&
               ( _user ?(
                    <>
                     <Link to="/profile"><User className='cursor-pointer hover:text-white' data-tooltip-id="myTooltip" data-tooltip-content="Profile" data-tooltip-place="top" /></Link>
                     <Link to="/cart"><ShoppingCart className='cursor-pointer hover:text-white ' data-tooltip-id="myTooltip" data-tooltip-content="Cart" data-tooltip-place="top" /></Link>
                     <Link to="/favourite"><Heart className='cursor-pointer hover:text-white' data-tooltip-id="myTooltip" data-tooltip-content="Favourite" data-tooltip-place="top" /></Link>
                     <Link to="/notifications"><Bell className='cursor-pointer hover:text-white' data-tooltip-id="myTooltip" data-tooltip-content="Notification" data-tooltip-place="top" /></Link>
                     <Tooltip id='myTooltip' place='top' />
                    </>
               ):
               <>
                <Link to="/login">SignUp</Link>
                <Link to="/cart"><ShoppingCart className='cursor-pointer hover:text-white ' data-tooltip-id="myTooltip" data-tooltip-content="Cart" data-tooltip-place="top" /></Link>
                <Link to="/favourite"><Heart className='cursor-pointer hover:text-white' data-tooltip-id="myTooltip" data-tooltip-content="Favourite" data-tooltip-place="top" /></Link>
                <Link to="/notifications"><Bell className='cursor-pointer hover:text-white' data-tooltip-id="myTooltip" data-tooltip-content="Notification" data-tooltip-place="top" /></Link>
                <Tooltip id='myTooltip' place='top' />
               </>
            )}
               
            </div>

            <div className='lg:hidden'>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    <Menu className='h-8 w-8 cursor-pointer hover:text-white' />
                </button>
            </div>

            {menuOpen && (
                <div className='absolute top-20 left-4 right-4 bg-yellow-300 shadow-lg p-4 lg:hidden'>
                    <ul className='flex flex-col space-x-4 text-lg font-medium'>
                        <li>
                            <Link to="/home" className='cursor-pointer p-4 hover:text-white'>Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" className='cursor-pointer hover:text-white'>Shop</Link>
                        </li>
                        <li>
                            <Link to="/with_us" className='cursor-pointer hover:text-white' >With Us</Link>
                        </li>
                        <li >
                            <Link to="/contact" className='cursor-pointer hover:text-white' >Contact Us</Link>
                        </li>
                        <li >
                            <Link to="/About" className='cursor-pointer hover:text-white'>About Us</Link>
                        </li>
                    </ul>
                </div>
            )}

        </nav>

    )


}

export default Navbar;
