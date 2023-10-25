/* eslint-disable react/prop-types */
function Header({ children }) {
  const headerStyles =
    "px-0 flex flex-col h-[70vh] md:h-[85vh] bg-custom-yellow relative ";
  return <div className={headerStyles}>{children}</div>;
}

export default Header;
