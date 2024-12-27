import React from "react";

const Info = ({ translate }) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 mt-[80px] mb-[40px]">
      <div className="flex flex-wrap items-center justify-center h-auto bg-gray-100 w-full py-6 gap-y-6 gap-x-4 ">
        {/* Card Section 1 */}
        <div className="w-full sm:w-[45%] md:w-[30%] h-auto flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 text-center sm:text-left">
          <div className="w-[60px]">
            <img
              src="./images/beach.svg"
              className="object-contain max-w-full"
              alt="Beach"
            />
          </div>
          <div className="flex flex-col items-center sm:items-start justify-center">
            <p className="font-bold text-lg font-sans">
              {translate({
                en: "Best Places",
                ru: "Лучшие места",
                uz: "Eng yaxshi manzillar",
              })}
            </p>
            <p className="text-sm text-gray-600 font-thin">
              {translate({
                en: "Best places around the world",
                ru: "Лучшие места по всему миру",
                uz: "Dunyo bo'ylab eng yaxshi maskanlar",
              })}
            </p>
          </div>
        </div>

        {/* Card Section 2 */}
        <div className="w-full sm:w-[45%] md:w-[30%] h-auto flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 text-center sm:text-left">
          <div className="w-[60px]">
            <img
              src="./images/wallet.svg"
              className="object-contain max-w-full"
              alt="Wallet"
            />
          </div>
          <div className="flex flex-col items-center sm:items-start justify-center">
            <p className="font-bold text-lg font-sans">
              {translate({
                en: "Best Prices",
                ru: "Лучшие цены",
                uz: "Eng yaxshi narxlar",
              })}
            </p>
            <p className="text-sm text-gray-600 font-thin">
              {translate({
                en: "Affordable for everyone",
                ru: "Доступно для всех",
                uz: "Xamma uchun xamyonbop",
              })}
            </p>
          </div>
        </div>

        {/* Card Section 3 */}
        <div className="w-full sm:w-[45%] md:w-[30%] h-auto flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 text-center sm:text-left">
          <div className="w-[60px]">
            <img
              src="./images/suitcase.svg"
              className="object-contain max-w-full"
              alt="Suitcase"
            />
          </div>
          <div className="flex flex-col items-center sm:items-start justify-center">
            <p className="font-bold text-lg font-sans">
              {translate({
                en: "Amazing Services",
                ru: "Удивительные услуги",
                uz: "Ajoyib xizmatlar",
              })}
            </p>
            <p className="text-sm text-gray-600 font-thin">
              {translate({
                en: "Our services are suitable for everyone",
                ru: "Наши услуги подходят для всех",
                uz: "Xizmatlarimiz barcha uchun maqbul",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
