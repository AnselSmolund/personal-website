import React, { useEffect, useState } from "react";
import { getActivities, getStravaStats } from "../../api/strava";
import { fakeRides, fakeStats } from "../../api/strava/fakeData";
import RideCard from "./RideCard";

const Cycle = () => {
  const [cycleStats, setCycleStats] = useState();
  const [rides, setRides] = useState();
  const num_rides = 12;

  useEffect(() => {
    async function fetchData() {
      const stats = await getStravaStats();
      const activities = await getActivities(num_rides);

      setCycleStats(stats);
      setRides(activities);
    }
    fetchData();
  }, []);

  if (!cycleStats || !rides) return null;
  return (
    <div className="container px-4">
      <h2 className="text-xl uppercase">
        Total Rides: {cycleStats.all_ride_totals.count}
      </h2>
      <h2 className="text-xl uppercase">
        Total Distance: {Math.floor(cycleStats.all_ride_totals.distance / 1609)}{" "}
        miles
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {rides.map((ride) => {
          return <RideCard rideData={ride} />;
        })}
      </div>
    </div>
  );
};
export default Cycle;
