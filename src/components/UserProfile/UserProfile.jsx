import React, { useContext } from "react";
import { MdLocationPin } from "react-icons/md";
import UserContext from "../../Contexts/UserContext";

const PatientProfile = () => {
  const { user } = useContext(UserContext);
  const { profileImage, name, email, department, batch, session, studentId } =
    user;
  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('/public/images/archi.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="card w-2/6 mx-auto mt-[5%] ">
          <div className="card-body glass bg-info bg-transparent border-2 rounded-2xl">
            <div className="text-center mt-[5%] text-black">
              <div className="avatar">
                <div className="w-24 rounded-full ring-4 ring-success ring-offset ring-offset-2">
                  <img src={profileImage || "/public/images/student.jpg"} />
                </div>
              </div>
              <div className="">
                <h2 className="text-xl font-semibold mt-[2%]">{name}</h2>
                <div className="">
                  <div className="flex gap-2 justify-center text-muted ">
                    <small className="font-bold text-muted">Student ID </small>
                    <small className="">{studentId}</small>
                  </div>
                  <div className="flex gap-1 justify-center text-muted">
                    <MdLocationPin></MdLocationPin>
                    <small>Chittagong, Bangladesh</small>
                  </div>
                </div>
              </div>
              <div className="flex mt-[1%] w-full  lg:flex-col">
                <div className="grid card flex-grow items-center justify-center h-auto rounded-box place-items-center">
                  <div className="text-left">
                    <ul>
                      <li className="flex gap-2 justify-center">
                        <p className="font-semibold">Email</p>
                        <p className="text-right">{email}</p>
                      </li>
                      <li className="flex gap-2 justify-center">
                        <p className="font-semibold">Department</p>
                        <p className="text-right">{department}</p>
                      </li>
                      <li className="flex gap-2">
                        <p className="font-semibold">Batch</p>
                        <p className="text-right">{batch}</p>
                      </li>
                      <li className="flex gap-2">
                        <p className="font-semibold">Session</p>
                        <p className="text-right">{session}</p>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="text-left mt-4">
                    <ul>
                      <li className="flex gap-2">
                        <p className="font-semibold">E-mail</p>
                        <p className="text-right">
                          u1804017@student.cuet.ac.bd
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <p className="font-semibold">Supervisor</p>{" "}
                        <p className="text-right">
                          Mohammad Moshiul Houqe, Professor (CSE)
                        </p>
                      </li>
                    </ul>
                  </div> */}
                </div>
                {/* <div className="divider lg:divider-horizontal"></div> */}
                {/* <div className="grid card flex-grow h-auto rounded-box place-items-center">
                                <div className="text-left">
                                    <ul>
                                        <li className='flex gap-2'><p className='font-semibold'>E-mail</p><p className='text-right'>u1804017@student.cuet.ac.bd</p></li>
                                        <li className='flex gap-2'><p className='font-semibold'>Supervisor</p> <p className='text-right'>Mohammad Moshiul Houqe, Professor (CSE)</p></li>
                                    </ul>
                                </div>
                            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
