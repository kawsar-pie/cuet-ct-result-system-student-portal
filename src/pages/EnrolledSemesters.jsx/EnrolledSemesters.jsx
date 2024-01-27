import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../Axios/fecthData";

const EnrolledSemesters = () => {
  const [semesters, setSemesters] = useState([]);
  useEffect(() => {
    const fetchSemester = async () => {
      const result = await fetchData("/semesters/student-semesters");
      if (result.success) {
        setSemesters(result.data);
      }
    };
    fetchSemester();
  }, []);
  AOS.init({
    duration: 1000,
  });
  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('/public/images/51018903502_4a2d137849_o.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="grid grid-cols-3 gap-16 py-[9%] px-[5%]">
          {semesters.map((semseter) => (
            <>
              <div
                data-aos="fade-up"
                className="card w-96 bg-transparent glass shadow-xl image-full"
              >
                <div className="card-body bg-transparent">
                  <h2 className="text-xl font-bold text-center text-white">
                    {semseter.semesterTitle}
                  </h2>
                  <p className="text-warning text-center">
                    Session: {semseter.session}
                  </p>
                  <p className="text-warning text-center">
                    Batch: {semseter.batch}
                  </p>
                  <div className="card-actions justify-center">
                    {/* <button to="/courses" className="btn glass bg-success text-white">See Courses</button> */}
                    <Link
                      to={`/courses/${semseter.semesterId}`}
                      className="btn glass bg-success text-white"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Courses
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnrolledSemesters;
