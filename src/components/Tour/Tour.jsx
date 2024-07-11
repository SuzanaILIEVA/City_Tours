import { useState } from "react";
import "./Tour.scss";
import { AiFillCloseSquare } from "react-icons/ai";
import { FaCaretSquareDown } from "react-icons/fa";

const Tour = ({ tour, tours, setTours }) => {
  // console.log(tour);
  const [showInfo, setShowInfo] = useState(false);

  const id = tour.id;

  const handleDelete = (id) => {
    const filtered = tours.filter((i) => i.id !== id);
    console.log(filtered);

    setTours(filtered);
  };

  return (
    <article className="tour">
      <div className="img-container">
        <img src={tour.img} alt="" />
        <span className="close-btn" onClick={() => handleDelete(id)}>
          <AiFillCloseSquare />
        </span>
      </div>
      <div className="tour-info">
        <h3>{tour.city} <span>{tour.price}&#8364;</span></h3>
        <h4>{tour.name}</h4>
        <h5>
          info{" "}
          <span onClick={() => setShowInfo(!showInfo)}>
            <FaCaretSquareDown />
          </span>
        </h5>
        <p>{showInfo && <p>{tour.info}</p>}</p>
      </div>
    </article>
  );
};

export default Tour;
