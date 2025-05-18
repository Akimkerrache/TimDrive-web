import Hero from "@/components/hero";
import WhyUs from "@/components/why-us";
import Image from "next/image";
import { useTranslations } from "next-intl";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <WhyUs />
    </div>
  );
}
