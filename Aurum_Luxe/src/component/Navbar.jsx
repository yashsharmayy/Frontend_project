function Navbar() {
  return (
    <div className="w-full top-0 left-0 sticky bg-[#fffbf58f] p-8  flex justify-between items-center border border-red-900">
      <div className="logo mx-6  flex">
        <h1 className="text-2xl font-cormorant">
          Aurum <span className="font-cormorant text-gold-light49">Luxe</span>
        </h1>
      </div>

      <ul className="flex gap-6 lg:gap-10 mx-10 font-semibold text-sm items-center">
        <li>Collections</li>
        <li>Our Story</li>
        <li>Craftsmanship</li>
        <li>Visit Us</li>
        <li className="border p-3">Book Appointment</li>
      </ul>
    </div>
  );
}

export default Navbar;
