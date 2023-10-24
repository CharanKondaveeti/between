/* eslint-disable react/prop-types */
function Header({ children }) {
  const headerStyles = "flex flex-col h-[85vh] bg-custom-yellow";
  return <div className={headerStyles}>{children}</div>;
}

export default Header;
