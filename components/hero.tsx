import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("HomePage");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-hidden items-center mt-10">
      <div className="p-8">
        <h2 className="text-4xl font-sans lg:text-5xl">{t("Hero.title")}</h2>
        <p className="py-6">{t("Hero.description")}</p>
        <Button className="bg-[#5ce1e6] hover:bg-yellow-400">
          <a href="/timdrive.apk" download>
            {t("Hero.enrollNow")}
          </a>
        </Button>
      </div>
      <div className="">
        <Image
          src={"/home.png"}
          alt="image of delivery"
          width={826}
          height={541}
          className=""
        />
      </div>
    </div>
  );
}
