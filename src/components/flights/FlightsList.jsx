// components/FlightsList.jsx
export const FlightsList = ({ place, translate }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {flightsAndHotels[place]?.flights.map((flight) => (
        <div key={flight.id} className="bg-white rounded-lg p-4">
          <h4 className="font-bold text-lg mb-2">{flight.airline}</h4>
          <p>{`${translate({en: "Price", ru: "Цена", uz: "Narx"})}: $${flight.price}`}</p>
        </div>
      ))}
    </div>
  );
  
