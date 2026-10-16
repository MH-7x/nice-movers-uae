import React from "react";
import { MobileNavbar } from "./MobileNavbar";
import DesktopNav from "./DesktopNav";

// Both navs are rendered and switched with CSS so the layout stays static
// (no per-request user-agent sniffing) and every crawler sees the same links.
const Navbar = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden md:block">
        <DesktopNav />
      </div>
    </>
  );
};

export default Navbar;
