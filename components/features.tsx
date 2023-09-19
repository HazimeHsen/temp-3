import React from "react";
import Animation from "./Animation";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const featureData: Feature[] = [
  {
    title: "Instant Features 1",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    icon: "/images/f-1.gif",
  },
  {
    title: "Instant Features 2",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    icon: "/images/f-2.gif",
  },
  {
    title: "Instant Features 3",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    icon: "/images/f-3.gif",
  },
];

const Card: React.FC<Feature> = ({ title, description, icon }) => (
  <Animation animationType="fade-bottom">
    <div className="relative flex flex-col items-center">
      <div className="bg-purple-600 rounded-full p-2 mb-5">
        <Image src={icon} alt="" width={55} height={55} />
      </div>
      <h4 className="h4 mb-2">{title}</h4>
      <p className="text-lg text-gray-400 text-center">{description}</p>
    </div>
  </Animation>
);

const Features: React.FC = () => {
  return (
    <section id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <Animation animationType="fade-left">
              <h2 className="h2 mb-4">
                The majority of our customers do not understand their workflows.
              </h2>
            </Animation>
            <Animation animationType="fade-right">
              <p className="text-xl text-gray-400">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </Animation>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks>
            {featureData.map((feature, index) => (
              <Card key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
