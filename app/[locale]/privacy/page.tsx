import { useTranslations, useLocale } from "next-intl";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

export default function Privacy() {
  const t = useTranslations("PrivacyPolicy.Section");
  const locale = useLocale();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-6 sm:px-10 lg:px-8 mt-10 mb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-6">
          {t("title")}
        </h1>
        <p className="text-md text-gray-600 dark:text-gray-300 text-center mb-8">
          {t("lastUpdated")}
        </p>
        <p className="sm:text-md text-sm text-gray-700 dark:text-gray-200 mb-12 text-center">
          {t("introduction")}
        </p>

        {/* Information We Collect */}
        <section
          className={`mb-10 ${locale === "ar" ? "text-right" : "text-left"} `}
        >
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t("informationCollected.title")}
          </h2>
          <p className="text-sm sm:text-md text-gray-700 dark:text-gray-200 mb-6">
            {t("informationCollected.description")}
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {t("informationCollected.personalInformation.title")}
              </h3>
              <ul className="list-disc pl-5 text-base text-gray-700 dark:text-gray-200">
                {t
                  .raw("informationCollected.personalInformation.items")
                  .map((item: string, index: number) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {t("informationCollected.transactionInformation.title")}
              </h3>
              <ul className="list-disc pl-5 text-base text-gray-700 dark:text-gray-200">
                {t
                  .raw("informationCollected.transactionInformation.items")
                  .map((item: string, index: number) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {t("informationCollected.usageData.title")}
              </h3>
              <ul className="list-disc pl-5 text-base text-gray-700 dark:text-gray-200">
                {t
                  .raw("informationCollected.usageData.items")
                  .map((item: string, index: number) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {t("informationCollected.communications.title")}
              </h3>
              <ul className="list-disc pl-5 text-base text-gray-700 dark:text-gray-200">
                {t
                  .raw("informationCollected.communications.items")
                  .map((item: string, index: number) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t("howWeUseInformation.title")}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-200 mb-6">
            {t("howWeUseInformation.description")}
          </p>
          <ul className="list-disc pl-5 text-base text-gray-700 dark:text-gray-200">
            {t
              .raw("howWeUseInformation.items")
              .map((item: string, index: number) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
          </ul>
        </section>

        {/* How We Share Your Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t("howWeShareInformation.title")}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-200 mb-6">
            {t("howWeShareInformation.description")}
          </p>
          <ul className="list-disc pl-5 text-base text-gray-700 dark:text-gray-200">
            {t
              .raw("howWeShareInformation.items")
              .map((item: string, index: number) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
          </ul>
        </section>

        {/* Data Security */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t("dataSecurity.title")}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-200 mb-6">
            {t("dataSecurity.description")}
          </p>
          <ul className="list-disc pl-5 text-base text-gray-700 dark:text-gray-200">
            {t.raw("dataSecurity.items").map((item: string, index: number) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Your Choices and Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t("yourChoicesAndRights.title")}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-200 mb-6">
            {t("yourChoicesAndRights.description")}
          </p>
          <ul className="list-disc pl-5 text-base text-gray-700 dark:text-gray-200">
            {t
              .raw("yourChoicesAndRights.items")
              .map((item: string, index: number) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
          </ul>
        </section>

        {/* Data Retention */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t("dataRetention.title")}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-200 mb-6">
            {t("dataRetention.description")}
          </p>
          <ul className="list-disc pl-5 text-base text-gray-700 dark:text-gray-200">
            {t.raw("dataRetention.items").map((item: string, index: number) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Children’s Privacy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t("childrensPrivacy.title")}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-200">
            {t("childrensPrivacy.description")}
          </p>
        </section>

        {/* International Data Transfers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t("internationalDataTransfers.title")}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-200">
            {t("internationalDataTransfers.description")}
          </p>
        </section>

        {/* Cookies and Tracking */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t("cookiesAndTracking.title")}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-200">
            {t("cookiesAndTracking.description")}
          </p>
        </section>

        {/* Changes to This Privacy Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t("changesToPolicy.title")}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-200">
            {t("changesToPolicy.description")}
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t("contactUs.title")}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-200 mb-6">
            {t("contactUs.description")}
          </p>
          <ul className="list-disc pl-5 text-base text-gray-700 dark:text-gray-200">
            {t.raw("contactUs.items").map((item: string, index: number) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a
              href="mailto:support@timdrive.dz"
              className="inline-flex items-center px-4 py-2 bg-[#5ce1e6] hover:bg-yellow-400 text-gray-600 rounded-md transition-colors"
            >
              <FaEnvelope className="mr-2 w-5 h-5" />
              Contact Us
            </a>
          </div>
        </section>

        {/* Governing Law */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t("governingLaw.title")}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-200">
            {t("governingLaw.description")}
          </p>
        </section>

        {/* Closing */}
        <p className="text-base text-gray-700 dark:text-gray-200 text-center">
          {t("closing")}
        </p>
      </div>
    </div>
  );
}
