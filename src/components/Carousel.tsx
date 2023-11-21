import Button from "@/common/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { RxArrowBottomRight } from "react-icons/rx";
import { RxDoubleArrowDown } from "react-icons/rx";

const links = [
  "Free Edit",
  "Interactive",
  "Easy Interface",
  "Compare to other",
];

const Carousel = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 mt-8">
      <div className="relative">
        <div>
          <img
            src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            loading="eager"
            className="object-cover lg:w-[24vw] w-full h-[36vh]"
          />
        </div>
        <div className="rounded-full border border-white px-3 py-1 text-sm absolute text-white mt-4 ml-1 top-0">
          01
        </div>
        <div className="absolute bottom-8 ml-1">
          <div className="flex">
            <Avatar className=" border border-white z-[1]">
              <AvatarImage src="https://github.com/kunal70006.png" />
              <AvatarFallback>OP</AvatarFallback>
            </Avatar>
            <Avatar className=" -ml-2 border border-white z-[2]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>OP</AvatarFallback>
            </Avatar>

            <Avatar className="-ml-2 border border-white z-[3]">
              <AvatarImage src="https://github.com/t3dotgg.png" />
              <AvatarFallback>OP</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-white text-lg mt-4">
            <p>Learn from the best mentors</p>
          </div>
          <Button className="uppercase text-white mt-4" icon="arrow">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              start learning
            </a>
          </Button>
        </div>
      </div>
      <div className="relative">
        <div>
          <img
            src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            loading="eager"
            className="object-cover lg:w-[24vw] w-full h-[36vh]"
          />
        </div>
        <div className="rounded-full border border-white px-3 py-1 text-sm absolute text-white mt-4 ml-1 top-0">
          02
        </div>
        <div className="absolute bottom-8 ml-1">
          <div className="flex flex-col lg:w-[22vw] w-full ml-4">
            {links.map((link) => (
              <div
                key={link}
                className="flex justify-between text-white border-b border-white mb-2"
              >
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                >
                  {link}
                </a>
                <RxArrowBottomRight />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <div>
          <img
            src="https://images.unsplash.com/photo-1506259091721-347e791bab0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            loading="eager"
            className="object-cover lg:w-[52vw] w-full h-[36vh]"
          />
        </div>
        <div className="rounded-full border border-white px-3 py-1 text-sm absolute text-white mt-4 ml-1 top-0">
          03
        </div>
        <div className="absolute bottom-8 ml-1 flex items-center text-white text-center lg:text-left ">
          <h2 className="lg:text-8xl text-4xl font-semibold tracking-wider lg:ml-24">
            +20K
          </h2>
          <p className="ml-8 lg:text-2xl text-base">
            Glass Pattern generated this
            <br />
            week in the first release.
          </p>
          <div className="ml-24 text-4xl ">
            <RxDoubleArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
