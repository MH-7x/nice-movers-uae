import { MessageCircle, SmartphoneIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import logo from "../../../public/Picture1.png";
import { NavItems } from "../NavItems";
import Link from "next/link";
const DesktopNav = () => {
  return (
    <header className="fixed top-0 left-0 bg-white py-2 w-full z-50">
      <nav
        id="top-contact-section"
        className="w-11/12 mx-auto flex items-center justify-between"
      >
        <div id="phone-number-section" className="flex items-center gap-x-2">
          <SmartphoneIcon className="b-red" size={20} />
          <Link
            href={"tel:+971563560017"}
            className="hover:underline underline-offset-2 "
          >
            <p className="text-sm b-red">+971 563560017</p>
          </Link>
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
          <Button
            wtBtn
            size={"sm"}
            className="text-sm bg-green-600 hover:bg-green-500"
          >
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
