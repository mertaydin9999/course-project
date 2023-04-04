import Course from "./Course";

function Courses({ courses, removeCourse }) {
  return (
    <div className="course-main-div">
      <div>
        <h2>Kurslarim</h2>
      </div>
      <div className="card-div">
        {courses.map((course) => {
          return (
            <Course
              key={course.id}
              {...course}
              removeOneCourse={removeCourse}
            />
          );
          //course={course}
        })}
      </div>
    </div>
  );
}

export default Courses;
