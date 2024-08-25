import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import {useState} from 'react';

import Logo from '../assets/logo.png';

const NavItem = ({title, classProps}) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={Logo} alt="logo" className="w-16 cursor-pointer"/>
            </div>
            <ul className="hidden md:flex list-none justify-between items-center flex-initial">
                {["Market","Exchange","Tutorials","Wallets"].map((item, index) => {
                    <NavItem key={item+index} title={item} />
                })}
                <li className="bg-[#2592e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    Login
                </li>
            </ul>
            <div className="flex relative md:hidden">
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className="text-white md-hidden cursos-pointer" onClick={() => setToggleMenu(false)}/>
                    : <HiMenuAlt4 fontSize={28} className="text-white md-hidden cursos-pointer" onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <ul>
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)}/>
                        </li>
                    </ul>
                )
                }
            </div>
        </nav>
    )
}

export default Navbar;