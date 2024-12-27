  // components/HotelsList.jsx
  const HotelsList = ({ place, language, translate }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {flightsAndHotels[place]?.hotels.map((hotel) => (
        <div key={hotel.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={hotel.image} alt={hotel.name[language]} className="w-full h-48 sm:h-64 object-cover" />
          <div className="p-4">
            <h4 className="font-bold text-lg">{hotel.name[language]}</h4>
            <p>{`${translate({en: "Price", ru: "Цена", uz: "Narx"})}: $${hotel.price}`}</p>
          </div>
        </div>
      ))}
    </div>
  );