import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";


const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Ntokozo was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Ntokozo was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Ntokozo's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Ntokozo is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Ntokozo's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];
import React from "react";
import Card from "@/components/Card";

const Testimonials = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="Testimonials"
          description="Don't` just take my word for it. Here what my clients have to say about me."
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="flex gap-8 pr-8 flex-none  animate-move-left [animation-duration:90s] hover:[animation-play-state:paused] py-4 ">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
              <div className="flex items-center gap-4">
                <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full"/>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-white/40">{testimonial.position}</div>
                </div>
              </div>
              <p className="mt-4 text-sm md:text-base md:mt-6">{testimonial.text}</p>
            </Card>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
