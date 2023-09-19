import Image from "next/image";
import FeatImage01 from "@/public/images/features-03-image-01.png";
import Animation from "./Animation";

// Define an array of objects for repeated data
const featuresData = [
  {
    title: "New Feature Title",
    subtitle: "New Feature Subtitle",
    description: "This is a description of the new feature.",
    bulletPoints: [
      "Bullet point 1 for the new feature",
      "Bullet point 2 for the new feature",
      "Bullet point 3 for the new feature",
    ],
  },
  // Add more objects for additional features as needed
];

export default function AboutSection() {
  return (
    <section id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <Animation animationType="fade">
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
                Learn More About Us
              </div>
            </Animation>
            <Animation animationType="fade-left">
              <h1 className="h2 mb-4">Discover Our Story</h1>
            </Animation>
            <Animation animationType="fade-right">
              <p className="text-xl text-gray-400">
                We are a team of dedicated individuals passionate about what we
                do — creating innovative solutions that make a difference.
              </p>
            </Animation>
          </div>

          {/* Items */}
          <div className="grid ">
            {/* Use map to render items dynamically */}
            {featuresData.map((feature, index) => (
              <div
                className="lg:flex items-center justify-between md:flex-nowrap flex-wrap gap-8"
                key={index}>
                {/* Image */}
                <Animation animationType="fade-bottom">
                  <div
                    className="lg:w-1/2 w-full mb-5 lg:md-0"
                    data-aos="fade-up">
                    <Image
                      className="max-w-full mx-auto lg:max-w-none h-auto"
                      src={FeatImage01}
                      width={540}
                      height={405}
                      alt={`Features ${index + 1}`}
                    />
                  </div>
                </Animation>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                  data-aos="fade-right">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <Animation animationType="fade-bottom">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                        {feature.title}
                      </div>
                    </Animation>

                    <Animation animationType="fade-bottom">
                      <h3 className="h3 mb-3">{feature.subtitle}</h3>
                    </Animation>
                    <Animation animationType="fade-bottom">
                      <p className="text-xl text-gray-400 mb-4">
                        {feature.description}
                      </p>
                    </Animation>

                    <ul className="text-lg text-gray-400 -mb-2">
                      {feature.bulletPoints.map((point, i) => (
                        <Animation animationType="fade-bottom">
                          <li className="flex items-center mb-2" key={i}>
                            <svg
                              className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>{point}</span>
                          </li>
                        </Animation>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
