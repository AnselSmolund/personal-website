import React from "react";

const RideCard = (props) => {
  const { name, distance, average_speed } = props.rideData;
  const miles = Math.floor(distance / 1609);
  const avg_speed = Math.floor(average_speed * 2.237);
  return (
    <div
      key={name}
      className="bg-gray-100 hover:bg-red-700 p-10 rounded-lg shadow-md"
    >
      <div>
        <p className="text-sm font-medium text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{miles} miles</p>
        <p className="text-sm text-gray-500">{avg_speed} MPH</p>
      </div>
    </div>
  );
};
export default RideCard;
