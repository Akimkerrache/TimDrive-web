import { cn } from "@/lib/utils";
import React from "react";
import {
  FaGasPump,
  FaTruck,
  FaMapMarkerAlt,
  FaUserCheck,
} from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function WhyUs() {
  const t = useTranslations("HomePage");

  const points = [
    { key: "point1", Icon: FaGasPump },
    { key: "point2", Icon: FaTruck },
    { key: "point3", Icon: FaMapMarkerAlt },
    { key: "point4", Icon: FaUserCheck },
  ];

  return (
    <div className="min-h-screen py-40 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="scroll-m-20 text-2xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl text-balance text-center py-4 text-gray-900 dark:text-white">
        {t("WhyUs.title")}
      </h2>
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {points.map(({ key, Icon }, index) => (
            <div
              key={key}
              className="rounded-md shadow p-6 flex gap-4 dark:border-slate-600 dark:border dark:bg-slate-700 bg-white dark:bg-slate-800"
            >
              <div
                className={cn(
                  "bg-[#5ce1e6] hover:bg-yellow-400 w-16 h-16 rounded-lg text-gray-600 flex items-center justify-center flex-shrink-0"
                )}
              >
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {t(`WhyUs.points.${key}.title`)}
                </h3>
                <p className="pt-3 text-gray-600 dark:text-gray-300">
                  {t(`WhyUs.points.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button size="lg" className="bg-[#5ce1e6] hover:bg-yellow-400">
          <a href="/timdrive.apk" download>
            {t("Hero.enrollNow")}
          </a>
        </Button>
      </div>
    </div>
  );
}
