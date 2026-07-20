import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/home/Hero";
import { WhyChoose } from "../components/home/WhyChoose";
import { Stats } from "../components/home/Stats";
import { EquipmentPreview } from "../components/home/EquipmentPreview";
import { Facilities } from "../components/home/Facilities";
import { TrainersPreview } from "../components/home/TrainersPreview";
import { Plans } from "../components/home/Plans";
import { Gallery } from "../components/home/Gallery";
import { Testimonials } from "../components/home/Testimonials";
import { BmiCalculator } from "../components/home/BmiCalculator";
import { Programs } from "../components/home/Programs";
import { Nutrition } from "../components/home/Nutrition";
import { Timetable } from "../components/home/Timetable";
import { Faq } from "../components/home/Faq";
import { CtaBanner } from "../components/home/CtaBanner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Stats />
      <EquipmentPreview />
      <Facilities />
      <TrainersPreview />
      <Plans />
      <Programs />
      <BmiCalculator />
      <Nutrition />
      <Timetable />
      <Gallery />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  );
}
