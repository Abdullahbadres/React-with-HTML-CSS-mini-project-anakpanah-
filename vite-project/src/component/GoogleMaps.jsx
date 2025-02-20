import React from "react";
import PropTypes from "prop-types";

const GoogleMaps = ({ locationsByCity }) => {
  // Convert cities & locations into a single flat array with city labels
  const allLocations = Object.entries(locationsByCity).flatMap(([city, locations]) =>
    locations.map((location) => ({ city, location }))
  );

  return (
    <div className="container mx-auto px-4 py-12">


      {/* Unified Grid Layout for All Locations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allLocations.map(({ city, location }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            {/* City Label Inside Card */}
            <div className="bg-slate-600 text-white text-center py-2 font-semibold">
              {city}
            </div>
            {/* Google Maps Iframe */}
            <iframe
              src={location}
              className="w-full h-64 rounded-b-lg"
              style={{ border: "0" }}
              allowFullScreen = ""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};


GoogleMaps.propTypes = {
  locationsByCity: PropTypes.objectOf(
    PropTypes.arrayOf(PropTypes.string).isRequired
  ).isRequired,
};

export default GoogleMaps;