import Logo from "./Logo";
import MenuUl from "./MenuUl";

function Navbar() {
  const navStyles =
    " py-5 px-10 text-xl border-b border-solid border-black flex items-center justify-between md:relative";
  return (
    <nav className={navStyles}>
      <Logo />
      <MenuUl />
    </nav>
  );
}

export default Navbar;
