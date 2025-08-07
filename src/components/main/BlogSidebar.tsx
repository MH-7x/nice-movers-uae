import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CalendarPlus } from "lucide-react";

const BlogSidebar = () => {
  return (
    <aside className="md:px-0 px-3 md:mt-0 mt-20">
      <div className="b-red-bg py-10 px-5 rounded-lg" id="quote-section">
        <h3 className="font-bold text-lg b-white text-center">
          <Link href={"/"}>Looking For Best Movers?</Link>
        </h3>
        <p className="text-sm text-center mt-2 b-white">
          Enter you phone number and we will contact you within 5 minutes!
        </p>
        <Input
          type="number"
          name="Phone"
          placeholder="type your phone number"
          className="mt-6 py-6 b-white-bg"
        />
        <Button className="b-white-bg py-6 w-full mt-2" variant={"secondary"}>
          Send Now
        </Button>
      </div>
      <div className="mt-16" id="latest-articles">
        <h3 className="font-bold text-xl b-text">Latest Posts</h3>
        <div className="w-32 b-red-bg h-1 rounded-4xl mt-1 mb-5"></div>
        <div className="grid grid-cols-4 items-center gap-x-3 mb-5">
          <div className="col-span-1 md:h-20 h-16 relative rounded-full bg-gray-300 mr-2"></div>
          <div className="col-span-3">
            <h4 className="line-clamp-2 font-medium b-text leading-5">
              Moving from sharjah to dubai, follow these tips and tricks for
              smooth move
            </h4>
            <div className="mt-2 flex items-center justify-between">
              <Link className="b-red text-sm" href={"/"}>
                read more..
              </Link>
              <div className="flex items-center gap-x-2">
                <CalendarPlus className="b-red" width={17} height={17} />
                <p className="b-red text-sm">18 july 2025</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-x-3 mb-5">
          <div className="col-span-1 md:h-20 h-16 relative rounded-full bg-gray-300 mr-2"></div>
          <div className="col-span-3">
            <h4 className="line-clamp-2 font-medium b-text leading-5">
              Moving from sharjah to dubai, follow these tips and tricks for
              smooth move
            </h4>
            <div className="mt-2 flex items-center justify-between">
              <Link className="b-red text-sm" href={"/"}>
                read more..
              </Link>
              <div className="flex items-center gap-x-2">
                <CalendarPlus className="b-red" width={17} height={17} />
                <p className="b-red text-sm">18 july 2025</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-x-3 mb-5">
          <div className="col-span-1 md:h-20 h-16 relative rounded-full bg-gray-300 mr-2"></div>
          <div className="col-span-3">
            <h4 className="line-clamp-2 font-medium b-text leading-5">
              Moving from sharjah to dubai, follow these tips and tricks for
              smooth move
            </h4>
            <div className="mt-2 flex items-center justify-between">
              <Link className="b-red text-sm" href={"/"}>
                read more..
              </Link>
              <div className="flex items-center gap-x-2">
                <CalendarPlus className="b-red" width={17} height={17} />
                <p className="b-red text-sm">18 july 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
