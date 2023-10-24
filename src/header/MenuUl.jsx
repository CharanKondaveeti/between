function MenuUl() {
  const navStyles = "text-base flex items-center gap-7";

  return (
    <ul className={navStyles}>
      <li>Our story</li>
      <li>Membership</li>
      <li>Write</li>
      <li>SignIn</li>
      <li className="px-3 py-2 text-white bg-stone-950 rounded-full">
        Get started
      </li>
    </ul>
  );
}

export default MenuUl;
