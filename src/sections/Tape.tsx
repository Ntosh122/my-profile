import React, { Fragment } from "react";
import StarIcon from "@/assets/icons/star.svg";
const words = [
  "Performance",
  "Accessible",
  "Secure",
  "Interactive",
  "Agile",
  "Reliable",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Responsive",
  "Security",
  "Design"
];
const Tape = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div className="flex" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
          {[...new Array(2)].fill(0).map((_,index)=>(
            <Fragment key={index}>
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm ">{word}</span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
            </Fragment>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Tape;