import React from "react";
import ServiceFeatureCard from "./ServiceFeatureCard";

// Example data for different sections
const exampleServices = [
  {
    id: "feature1",
    title: "Custom Feature One",
    description:
      "This is a custom feature description that can be used in any section with the same styling.",
  },
  {
    id: "feature2",
    title: "Custom Feature Two",
    description:
      "Another custom feature with different content but maintaining the same visual style and animations.",
  },
  {
    id: "feature3",
    title: "Custom Feature Three",
    description:
      "A third feature demonstrating the reusability of the component across different sections.",
  },
];

const ServiceFeaturesExample = () => {
  return (
    <div className="bg-black p-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Example Usage of ServiceFeatureCard
        </h2>

        <div className="space-y-6">
          {exampleServices.map((service, index) => (
            <ServiceFeatureCard
              key={service.id}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFeaturesExample;
