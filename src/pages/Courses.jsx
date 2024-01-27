import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../Axios/fecthData";
import CtMarks from "../components/CtMarks";

const Courses = () => {
  const { semesterId } = useParams();
  const [courses, setCourses] = useState([]);
  const [classTests, setClassTests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const fetchCourse = async () => {
      const result = await fetchData(`/semesters/courses/${semesterId}`);
      if (result.success) {
        setCourses(result.data);
      }
    };
    fetchCourse();
  }, [semesterId]);
  const showResult = async (courseCode) => {
    setClassTests([]);
    setTotal(0);
    setLoading(true);
    const result = await fetchData(`/ct/results/${semesterId}/${courseCode}`);
    if (result.success) {
      const { results, total } = result.data;
      setClassTests(results);
      setTotal(total);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('/public/images/incubater.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="grid grid-cols-3 gap-16 py-[9%] px-[5%]">
          {courses.map(({ course }) => (
            <>
              <div
                data-aos="fade-down"
                className="card w-96 bg-transparent glass shadow-xl image-full"
              >
                <div className="card-body bg-transparent ">
                  <h2 className="text-xl font-bold text-white text-center">
                    {course.courseCode}
                  </h2>
                  <h3 className="text-xl font-bold text-white text-center">
                    {course.courseTitle}
                  </h3>
                  <div className="">
                    <div className="text-left">
                      <ul className="flex flex-row justify-between">
                        <li className="flex gap-2 justify-center">
                          <p className="font-semibold">Credit:</p>
                          <p className="text-right">{course.credit}</p>
                        </li>
                        <li className="flex gap-2">
                          <p className="font-semibold">Total CT:</p>
                          <p className="text-right">{course.credit + 1}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-actions justify-center">
                    <button
                      className="btn glass bg-success text-white"
                      onClick={() => {
                        showResult(course.courseCode);
                        document.getElementById("my_modal_5").showModal();
                      }}
                    >
                      Marks
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
          {courses.length === 0 && (
            <h3 className="text-[white] font-[700] text-center">
              There is no course
            </h3>
          )}
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-transparent glass text-white w-11/12 max-w-9xl">
                    <h3 className="font-bold text-lg text-center">CT and Attendence Marks (CSE-423)</h3>
                    <CtMarks></CtMarks>
                    <div className="modal-action">
                        <form method="dialog">
                            
                            <button className="btn btn-success glass text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog> */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-transparent glass text-white w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg text-center">Class Tests Result</h3>
          <CtMarks
            classTests={classTests}
            total={total}
            isLoading={loading}
          ></CtMarks>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-success glass text-white">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Courses;
