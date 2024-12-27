import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = ({ language = 'en' }) => {
  const translations = {
    companyName: {
      en: "Noor Travel",
      ru: "Нур Тревел",
      uz: "Nur Travel"
    },
    companyDescription: {
      en: "Your trusted partner for unforgettable travel experiences. Making your journey comfortable and memorable.",
      ru: "Ваш надежный партнер для незабываемых путешествий. Делаем ваше путешествие комфортным и запоминающимся.",
      uz: "Unutilmas sayohat tajribalari uchun ishonchli hamkoringiz. Sayohatingizni qulay va yodda qolarli qilamiz."
    },
    contactUs: {
      en: "Contact Us",
      ru: "Свяжитесь с нами",
      uz: "Biz bilan bog'laning"
    },
    quickLinks: {
      en: "Quick Links",
      ru: "Быстрые ссылки",
      uz: "Tezkor havolalar"
    },
    aboutUs: {
      en: "About Us",
      ru: "О нас",
      uz: "Biz haqimizda"
    },
    services: {
      en: "Services",
      ru: "Услуги",
      uz: "Xizmatlar"
    },
    destinations: {
      en: "Destinations",
      ru: "Направления",
      uz: "Yo'nalishlar"
    },
    contact: {
      en: "Contact",
      ru: "Контакты",
      uz: "Aloqa"
    },
    location: {
      en: "Andijan, Uzbekistan",
      ru: "Андижан, Узбекистан",
      uz: "Andijon, O'zbekiston"
    },
    rights: {
      en: "All rights reserved",
      ru: "Все права защищены",
      uz: "Barcha huquqlar himoyalangan"
    },
    privacyPolicy: {
      en: "Privacy Policy",
      ru: "Политика конфиденциальности",
      uz: "Maxfiylik siyosati"
    },
    terms: {
      en: "Terms of Service",
      ru: "Условия использования",
      uz: "Xizmat ko'rsatish shartlari"
    }
  };

  const t = (key) => translations[key][language] || translations[key]['en'];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">{t('companyName')}</h3>
            <p className="text-gray-400 max-w-md">
              {t('companyDescription')}
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">{t('contactUs')}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <a href="tel:+998902223490" className="hover:underline">
                  +998 90 222 34 90
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <a href="mailto:nooragencytravel@gmail.com" className="hover:underline">
                  nooragencytravel@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
                <span>{t('location')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  {t('aboutUs')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  {t('services')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  {t('destinations')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-400">
              © 2024 {t('companyName')}. {t('rights')}.
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  {t('privacyPolicy')}
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  {t('terms')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;