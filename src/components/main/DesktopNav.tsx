import { ListOrderedIcon, MessageCircle, SmartphoneIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import logo from "../../../public/Picture1.png";
import { NavItems } from "../NavItems";
const DesktopNav = () => {
  return (
    <header className="fixed top-0 left-0 bg-white py-2 w-full z-50">
      <nav
        id="top-contact-section"
        className="w-11/12 mx-auto flex items-center justify-between"
      >
        <div id="phone-number-section" className="flex items-center gap-x-2">
          <SmartphoneIcon size={20} />
          <p className="text-sm">+971 50345432</p>
        </div>
        <div className="w-64 h-16 relative">
          <Image
            src={logo}
            fill
            className="object-contain object-center absolute"
            alt="Nice Movers Company Logo"
            priority
            loading="eager"
            quality={90}
          />
        </div>
        <div id="whatsapp-number-section" className="">
          <Button size={"sm"} className="text-sm" variant={"outline"}>
            WhatsApp Now
            <MessageCircle />
          </Button>
        </div>
      </nav>
      <nav className="mt-2 w-11/12 mx-auto flex items-center justify-center">
        <NavItems />
      </nav>
    </header>
  );
};

export default DesktopNav;
