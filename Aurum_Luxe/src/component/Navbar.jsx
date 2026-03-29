function Navbar() {
  return (
    <div className="w-full z-20 top-0 left-0 sticky bg-[#fffbf5c0] p-8 lg:px-15  flex justify-between items-center ">
      <div className="logo mx-6   flex">
        <h1 className="text-2xl lg:text-4xl font-cormorant">
          Aurum <span className="font-cormorant text-gold-light49">Luxe</span>
        </h1>
      </div>

      <ul className="flex gap-6 lg:gap-20 mx-10 font-semibold text-sm lg:text-lg  lg:font-normal items-center">
        <li>Collections</li>
        <li>Our Story</li>
        <li>Craftsmanship</li>
        <li>Visit Us</li>
        <li className="border p-3 lg:px-5">Book Appointment</li>
      </ul>
    </div>
  );
}

export default Navbar;
