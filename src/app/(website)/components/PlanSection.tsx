import { PlanProps, PlanSectionProps } from "@/types/plane.type";

import PlanCard from "./PlanCard";

const PlanSection = ({ plans }: PlanSectionProps) => {
  return (
    <section className="container w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">
            Choose Your Plan
          </h2>
          <p className="max-w-[900px] text-gray-400">
            Select the perfect plan to boost your Instagram engagement
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
