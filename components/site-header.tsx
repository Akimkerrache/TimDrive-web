"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import LocaleSwitcher from "./locale-switcher";
import { useTranslations, useLocale } from "next-intl";

export default function SiteHeader() {
  const t = useTranslations("Layout");
  const locale = useLocale(); // Get current locale
  const keys = ["PrivacyPolicy"];

  return (
    <div>
      <header className="flex items-center justify-between max-w-6xl mx-auto py-2 sm:py-4 px-2">
        <Link className="font-semibold" href="/" locale={locale}>
          <Image
            src="/tdlogo.jpeg"
            alt="image of delivery"
            width={65}
            height={65}
            className="rounded-xl sm:w-16 w-10"
          />
        </Link>
        <nav className="flex items-center justify-between gap-8 text-sm">
          {keys.map((key, i) => (
            <Link
              key={i}
              href={`${locale}${t(`Navigation.${key}.href`)}`}
              locale={locale}
            >
              {t(`Navigation.${key}.title`)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-3">
          <ModeToggle />
          <LocaleSwitcher />
        </div>
      </header>
    </div>
  );
}
