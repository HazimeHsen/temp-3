import Image, { StaticImageData } from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";
import Animation from "./Animation";

interface Testimonial {
  name: string;
  position: string;
  imageSrc: StaticImageData;
  quote: string;
}

// Define an array of testimonial data
const testimonialsData: Testimonial[] = [
  {
    name: "Anastasia Dan",
    position: "UX Board",
    imageSrc: TestimonialImage01,
    quote:
      "Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
  },
  {
    name: "John Smith",
    position: "Product Manager",
    imageSrc: TestimonialImage02,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Emily Brown",
    position: "Designer",
    imageSrc: TestimonialImage03,
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

// Define the TestimonialCard component
function TestimonialCard({ name, position, imageSrc, quote }: Testimonial) {
  return (
    <Animation animationType="fade-bottom">
      <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
        <div>
          <div className="relative inline-flex flex-col mb-4">
            <Image
              className="rounded-full"
              src={imageSrc}
              width={48}
              height={48}
              alt={`${name}'s Testimonial`}
            />
            <svg
              className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
              viewBox="0 0 24 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
            </svg>
          </div>
        </div>
        <blockquote className="text-gray-400 grow">— {quote}</blockquote>
        <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
          <cite className="text-gray-200 not-italic">{name}</cite> -{" "}
          <a
            className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
            href="#0">
            {position}
          </a>
        </div>
      </div>
    </Animation>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <Animation animationType="fade-left">
              <h2 className="h2 mb-4">Don't take our word for it</h2>
            </Animation>
            <Animation animationType="fade-right">
              <p className="text-xl text-gray-400">
                Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
                semper quis lectus nulla at volutpat diam ut venenatis tellus—in
                ornare.
              </p>
            </Animation>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
