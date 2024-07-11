import React, { useCallback, useEffect, useState } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";

const TourList = ({ searchTerm }) => {
  const [tours, setTours] = useState(tourData);
  const [sortOrder, setSortOrder] = useState("asc");

  const sortTours = useCallback((order) => {
    const sortedTours = [...tours].sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setTours(sortedTours);
    console.log(sortedTours);
  }, [tours]);

  const filterTours = useCallback((term) => {
    const filteredTours = tourData.filter((tour) =>
      tour.city.toLowerCase().includes(term.toLowerCase())
    );
    setTours(filteredTours);
  }, []);

  useEffect(() => {
    sortTours(sortOrder);
  }, [sortOrder, sortTours]);

  useEffect(() => {
    filterTours(searchTerm);
  }, [searchTerm, filterTours]);

  const handleSortChange = (e) => {
    const newOrder = e.target.value;
    setSortOrder(newOrder);
  };

  useEffect(() => {
    console.log("Tours state updated: ", tours);
  }, [tours]);

  return (
    <section>
      <div className="select">
        <label htmlFor="sortOrder"></label>
        <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
          <option value="asc"> Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div className="tourlist">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} tours={tours} setTours={setTours} />
        ))}
      </div>
    </section>
  );
};

export default TourList;
