import Course from "./Course";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ courses, removeCourse }) {
  const [index, setIndex] = useState(0);
  const { title, content, price } = courses[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1;
    }
    if (index > courses.length - 1) {
      return 0;
    }
    return index;
  };

  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const getRandomCourse = () => {
    let randomNumber = Math.floor(Math.random() * courses.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(checkIndex(randomNumber));
  };

  return (
    <div className="course-main-div">
      <div className="course-title-button">
        <h2>Kurslarim</h2>
        <button className="card-delete-btn" onClick={getRandomCourse}>
          Rastgele Kurs Ata!
        </button>
      </div>
      <div className="card-div">
        <button className="prev-next-btn" onClick={prevCourse}>
          <FaChevronLeft />
        </button>
        <div className="card">
          <div className="card-title-price">
            <h2 className="card-title">{title}</h2>
            <h4 className="card-price">{price}TL</h4>
          </div>
          <p>{content}</p>
          <button
            className="card-delete-btn"
            onClick={() => removeOneCourse(id)}
          >
            Sil
          </button>
        </div>
        <button className="prev-next-btn" onClick={nextCourse}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Courses;
