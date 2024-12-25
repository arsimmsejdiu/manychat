import { PLANS as plans } from "@/constants/pages";

import Header from "./components/Header";
import Hero from "./components/Hero";
import PlanSection from "./components/PlanSection";

export default function Home() {
  return (
    <main>
      <section className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-bg">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative">
          <div className="container px-4 py-8">
            <Header />
            <Hero />
            <PlanSection plans={plans} />
          </div>
        </div>
      </section>
    </main>
  );
}
