import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { flightsAndHotels, places } from '../../api/data';

export const DestinationDetails = ({ language, translate }) => {
  const navigate = useNavigate();
  const { place } = useParams();
  const placeData = places.find(p => (p.name.en) === place);
  const sortedHotels = [...(flightsAndHotels[place]?.hotels || [])].sort((a, b) => a.price - b.price);

  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Destination Image */}
      <div className="mb-8 rounded-lg overflow-hidden h-[400px]">
        <img src={placeData?.image} alt={place} className="w-full h-full object-cover" />
      </div>

      {/* Welcome Message */}
      <h2 className="text-3xl font-bold mb-6">
        {translate({
          en: `Welcome to ${place}`,
          ru: `Добро пожаловать в ${place}`,
          uz: `${place}ga xush kelibsiz`,
        })}
      </h2>

      {/* Flights Section */}
      <h3 className="text-2xl font-semibold mb-4">
        {translate({ en: "Flights", ru: "Рейсы", uz: "Reyslar" })}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {flightsAndHotels[place]?.flights.map((flight) => (
          <div key={flight.id} className="bg-white rounded-lg shadow-md p-6">
            <h4 className="font-bold text-xl mb-3">{translate(flight.airline)}</h4>
            <p className="text-lg text-indigo-600 font-medium">
              {`${translate({ en: "Price", ru: "Цена", uz: "Narx" })}: $${flight.price}`}
            </p>
          </div>
        ))}
      </div>

      {/* Hotels Section */}
      <h3 className="text-2xl font-semibold mb-4">
        {translate({ en: "Hotels", ru: "Отели", uz: "Mehmonxonalar" })}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedHotels.map((hotel) => (
          <div key={hotel.id} className="bg-white shadow-sm hover:-translate-y-2 rounded-sm overflow-hidden">
            <img src={hotel.image} alt={translate(hotel.name)} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="font-bold text-xl mb-2">{translate(hotel.name)}</h4>
              <p className="text-lg text-indigo-600 font-medium">
                {`${translate({ en: "Price per night", ru: "Цена за ночь", uz: "Bir kunlik narx" })}: $${hotel.price}`}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Form */}
      <h3 className="text-2xl font-semibold mt-8 mb-4">
        {translate({ en: "Book a Hotel", ru: "Забронировать отель", uz: "Joy band qilish" })}
      </h3>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-sm shadow-md">
        <div className="mb-4">
          <label className="block font-medium mb-2">
            {translate({ en: "Name", ru: "Имя", uz: "Ism" })}
          </label>
          <input
            type="text"
            name="name"
            outline="none"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">
            {translate({ en: "Phone Number", ru: "Номер телефона", uz: "Telefon raqami" })}
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-lime-700 text-white rounded hover:bg-lime-600"
        >
          {translate({ en: "Submit", ru: "Отправить", uz: "Yuborish" })}
        </button>
      </form>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
            <h3 className="text-2xl font-bold mb-4">
              {translate({ en: "Thank You!", ru: "Спасибо!", uz: "Rahmat!" })}
            </h3>
            <p className="text-lg mb-6">
              {translate({
                en: "Your information has been received. We will contact you soon.",
                ru: "Ваша информация получена. Мы свяжемся с вами в ближайшее время.",
                uz: "Ma'lumotlaringiz qabul qilindi. Tez orada siz bilan bog'lanamiz.",
              })}
            </p>
            <button
              onClick={() => {setShowModal(false); navigate('/')}}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
            >
              {translate({ en: "Close", ru: "Закрыть", uz: "Yopish" })}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationDetails;
