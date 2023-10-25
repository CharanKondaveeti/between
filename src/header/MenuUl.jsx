import { useRef, useState } from "react";
import CloseMenu from "../assets/SVG/closeMenu-outline.jsx";
import OpenMenu from "../assets/SVG/openMenu-outline.jsx";

function MenuUl() {
  const elementRef = useRef(null);

  // state is only useful before 640 sm width
  const [IsMenuOpen, setISmenuOpen] = useState(false);
  //

  const navStyles =
    " hidden text-white text-base flex-col gap-7 absolute h-[100%] top-0 right-0 z-[1] bg-black px-10 pt-20 md:flex md:flex-row md:static md:h-auto md:pt-0 py-10 md:bg-transparent md:text-black md:z-0 md:top-auto md:pb-0 md:right-auto md:items-center";

  const toggleDisplay = () => {
    if (elementRef.current) {
      setISmenuOpen(!IsMenuOpen);
      const menu = elementRef.current;
      menu.classList.toggle("flex");
      menu.classList.toggle("hidden");
    }
  };

  return (
    <>
      <div className="text-3xl z-10 md:hidden " onClick={toggleDisplay}>
        {IsMenuOpen ? <CloseMenu w="30" h="30" /> : <OpenMenu w="30" h="30" />}
      </div>
      <ul ref={elementRef} className={navStyles}>
        <li>Our story</li>
        <li>Membership</li>
        <li>Write</li>
        <li>SignIn</li>
        <li className=" ">
          {/* <li className="px-3 py-2 text-white bg-stone-950 rounded-full "> */}
          Get started
        </li>
      </ul>
    </>
  );
}

export default MenuUl;
