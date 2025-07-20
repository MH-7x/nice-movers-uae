import { headers } from "next/headers";
import React from "react";
import { MobileNavbar } from "./MobileNavbar";
import DesktopNav from "./DesktopNav";

const Navbar = async () => {
  const reqHeaders = await headers();

  const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(
    reqHeaders.get("user-agent") || ""
  );

  if (isMobile) {
    return <MobileNavbar />;
  }
  return <DesktopNav />;
};

export default Navbar;
