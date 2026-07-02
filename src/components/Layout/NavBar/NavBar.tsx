import { useState } from "react";
import useDeviceDetect from "../../../features/hooks/useDeviceDetect";
import Logo from "./Logo";
import NavIcons from "./NavIcons";
import NavLinks from "./NavLinks";
import MobileSideBar from "../MobileSideBar/MobileSideBar";
import Overlay from "./Overlay";

type NavBarProps = {};

export default function NavBar({}: NavBarProps) {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);
  const isMobile = useDeviceDetect("mobile");
  const isTablet = useDeviceDetect("tablet");

  return (
    <nav className="relative z-1 bg-navbar-background border-b border-b-navbar-border py-5 px-10 flex justify-between items-center transition-colors duration-500 dark:bg-amber-600">
      {isMobile || isTablet ? (
        <>
          <span
            className="material-symbols-outlined cursor-pointer"
            onClick={() => setIsOpenMobileMenu(true)}
          >
            menu
          </span>
          <Logo to="/" />
          <span className="material-symbols-outlined">shopping_cart</span>
        </>
      ) : (
        <>
          <Logo to="/" />
          <NavLinks />
          <NavIcons />
        </>
      )}

      <MobileSideBar
        isOpen={isOpenMobileMenu}
        onClose={() => setIsOpenMobileMenu(false)}
      />

      <Overlay isOpen={isOpenMobileMenu} />
    </nav>
  );
}
