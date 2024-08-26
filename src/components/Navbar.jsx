import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

import Logo from '../assets/logo.png';

const NavItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-left items-center">
        <img src={Logo} alt="logo" className="w-16 cursor-pointer" />
      </div>
      <ul className="hidden text-white md:flex list-none justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavItem key={item + index} title={item} />
        ))}
        <li className="bg-[#505050] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#bbbbbb] hover:color-[#000000]">
          Login
        </li>
      </ul>
      <div className="flex relative md:hidden">
        {toggleMenu
          ? <AiOutlineClose fontSize={28} className="text-white cursor-pointer" onClick={() => setToggleMenu(false)} />
          : <HiMenuAlt4 fontSize={28} className="text-white cursor-pointer" onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
            <ul
                className="z-10 fixed top-0 -right-2 p-3 w-[50vw] h-screen shadow-2xl md:hidden list-none
                flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
              <NavItem key={item + index} title={item} classProps="my-2 text-lg" />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;