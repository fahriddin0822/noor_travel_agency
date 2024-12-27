// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import { places } from "../../api/data";
import About from "../about/About";
import Info from "../../components/info/Info";

const Home = ({ translate }) => {
  const navigate = useNavigate();

  return (
    <>
      <Carousel places={places} translate={translate} />      

      <Info translate={translate} />
      <div className="flex flex-col items-center justify-center mb-[100px]">
        <div className="w-[70%] h-[2px] bg-gray-300 mb-2"></div>
        <p className="text-[40px] font-sans text-gray-900 mb-4 px-4 text-center">
          {translate({
            en: "The official website of «Noor» LLC",
            ru: "Официальный сайт ООО «Noor»",
            uz: "«Noor» MCHJ rasmiy sayti.",
          })}
        </p>
      </div>

      <div className="flex justify-center">
        <p className="text-lg font-sans text-black mb-4 px-4">
          {translate({
            en: "Welcome to our travel website. We provide the best flights and hotels for your next vacation.",
            ru: "Добро пожаловать на наш сайт. Мы предоставляем лучшие рейсы и отели для вашего следующего отпуска.",
            uz: "Saytimizga xush kelibsiz. Keyingi dam olishingiz uchun eng yaxshi parvozlarni va mehmonxonalarni taqim eteamiz.",
          })}
        </p>
      </div>
      <div className="flex justify-center mt-8">
      <h2 className="text-2xl font-sans mb-12 px-4">
        {translate({
          en: "Popular Destinations",
          ru: "Популярные направления",
          uz: "Mashhur yo'nalishlar",
        })}
      </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mb-[100px]">
        {places.map((place) => (
          <div
            key={place.id}
            className="cursor-pointer bg-white shadow-sm rounded-sm overflow-hidden transform transition-transform hover:scale-105 bg-[F3F4F6]"
            onClick={() => {
              navigate(`/destination/${(place.name.en)}`, "_blank");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={place.image}
              alt={translate(place.name)}
              className="w-full h-48 sm:h-64 md:h-72 object-cover"
            />
            <h3 className="text-xl font-bold p-4 bg-[F3F4F6]">{translate(place.name)}</h3>
          </div>
        ))}
      </div>
      <About language={translate} />
    </>
  );
};

export default Home;
