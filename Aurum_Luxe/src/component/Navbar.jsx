import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function Navbar() {
  const navref = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(navref.current, {
      paddingTop: "12px",
      paddingBottom: "12px",
      minHeight: "60px",
      backgroundColor: "rgba(255,251,245,0.96)",
      boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
      duration: 0.45,
      ease: "power2.inOut",

      scrollTrigger: {
        trigger: document.body,
        start: "70px top",
        toggleActions: "play reverse play reverse"
      }
    });
  }, []);

  const menubar = useRef()
  const closebtn = () => {
    gsap.to(menubar.current, {
      right: "-100%",
      duration: 0.5,
      ease: "power3.inOut"
    });
  };

  const menubtn = () => {
    gsap.to(menubar.current, {
      right: "-8%",
      duration: 0.5,
      ease: "power3.inOut"
    });
  };

  return (
    <div
      ref={navref}
      className="w-full  z-100 top-0 left-0 sticky bg-[#fffbf5c0] p-8 lg:px-15 flex justify-between items-center"
    >
      <div className="logo mx-6 flex">
        <a href="#"> <h1 className="text-2xl lg:text-4xl font-cormorant">
          Aurum <span className="text-gold-light49">Luxe</span>
        </h1></a>
      </div>



      <ul className="hidden md:flex gap-6 lg:gap-20 mx-10  text-sm lg:text-lg items-center">
        <li className="cursor-pointer "><a href="#collections">Collections</a></li>
        <li className="cursor-pointer "><a href="#story">Our Story</a></li>
        <li className="cursor-pointer "><a href="#carftmanship">Craftsmanship</a></li>
        <li className="cursor-pointer "><a href="#contact">Visit Us</a></li>
        <li className="border p-3 px-6 lg:px-8 hover:bg-charcoal-soft79 hover:text-cream09 transition-all duration-300 ease-in-out hover:border-charcoal-soft79 cursor-pointer"><a href="#contact">Book Appointment</a></li>
      </ul>


      <ul ref={menubar} className="absolute  flex-col top-0 -right-[110%] pt-30 font-cormorant w-[75%] p-10 flex  -bottom-[2000%] bg-ivory19 md:hidden text-3xl gap-12  mx-10    items-start">

        <i onClick={closebtn} className="fa-solid fa-x cursor-pointer absolute top-15 right-15 text-lg"></i>


        <li onClick={closebtn} className="cursor-pointer hover:text-gold39 duration-300 "><a href="#collections">Collections</a></li>
        <li onClick={closebtn} className="cursor-pointer hover:text-gold39 duration-300 "><a href="#story">Our Story</a></li>
        <li onClick={closebtn} className="cursor-pointer hover:text-gold39 duration-300 "><a href="#carftmanship">Craftsmanship</a></li>
        <li onClick={closebtn} className="cursor-pointer hover:text-gold39 duration-300  "><a href="#contact">Visit Us</a></li>

        <li onClick={closebtn} className="border p-3 px-6 lg:px-8 bg-charcoal-soft79 text-cream09 transition-all duration-300 ease-in-out border-charcoal-soft79 cursor-pointer hover:bg-gold-dark59 hover:border-gold-dark59"><a href="#contact">Book Appointment</a></li>
      </ul>

      <i
        onClick={menubtn}
        className="fa-solid fa-bars menubtn text-2xl cursor-pointer md:hidden"
      ></i>
    </div >
  );
}

export default Navbar;