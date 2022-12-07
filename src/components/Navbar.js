import React, { useEffect, useState, useContext} from "react";
import {blogLinks} from '../Data'
import {userLinks} from '../Data'
import {useLogout}  from '../hooks/useLogout'
import {useAuthContext} from '../context/useAuthContext'
import {NavbarContext} from '../context/NavbarContext'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const { isOpen: open, setIsOpen : setOpen} = useContext(NavbarContext);
  const {logout} = useLogout()
  const {user} = useAuthContext()
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
    //   const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const handleLogOut = () =>{
    logout()
  }
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-gray-300  text-white" : "bg-white"}`}>
      <div className="flex items-center justify-between lg:px-16 md:py-2">
        <div className="mx-4 md:mx-7">
          <h4 className="text-2xl md:text-3xl capitalize font-bold text-red-800">
            Tech<span className="text-red-600">stuff</span>
          </h4>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-transparent"
          } text-gray-900 md:block hidden px-7 py-2  font-medium  rounded-bl-full`}
        >{user ?
          <ul className="flex items-center gap-1 py-2 text-2xl font-semibold lg:font-bold lg:text-2xl">
            {blogLinks?.map((menu, i) => (
              <li key={i} className={`px-5 lg:px-6 font-bold ${ sticky ? "text-white" : "text-red-800"} hover:text-red-700`}>
                
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
            <div className="">
              {/* <p className="text-xl text-green-500">{user.user.name.slice(0, 5)}</p> */}
              <button onClick={handleLogOut} className="text-xl lg:text-2xl text-red-400 cursor-pointer">LOGOUT</button>
            </div>
          </ul>
            : ""}
          {!user ?
            <ul className="flex items-center gap-1 py-2 text-2xl font-semibold lg:font-bold lg:text-2xl">
                {userLinks?.map((menu, i) => (
                  <li key={i} className={`px-4 font-bold ${ sticky ? "text-white" : "text-red-800"} hover:text-red-700`}>
                    
                    <a href={menu?.link}>{menu?.name}</a>
                  </li>
                ))}
            </ul>
            : ""}
        </div>
        <div onClick={() => setOpen(!open)} className={`z-[999]  ${open ? "text-gray-900" : "text-red-700"} text-3xl md:hidden m-5`}>
          <ion-icon name="menu" size="large"></ion-icon>
        </div>
        <div className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"}`}>
          {user ?
          <ul className="flex flex-col justify-center h-full space-y-4 py-2 text-lg">
            {blogLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-red-800"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
            <li className="px-6 hover:text-red-800">
              <button onClick={handleLogOut} className="text-lg text-red-600 cursor-pointer">LOGOUT</button>
            </li>
          </ul>
          : ""}
          {!user ? <ul className="flex flex-col justify-center h-full space-y-4 py-2 text-lg">
            {userLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-red-800"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>: ""}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
