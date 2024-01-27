import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../../Axios/postData";
import UserContext from "../../Contexts/UserContext";
import { loginSchema } from "../../Yup/login.yup";
import CustomField from "../../components/Formik/CustomField";
import CustomForm from "../../components/Formik/CustomForm";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    studentId: "1804017",
    password: "123456",
  };
  const handleSubmit = async (values) => {
    setStatus(null);
    setMessage("");
    setLoading(true);
    const result = await postData(`/auth/student/login`, values);
    if (result.data) {
      setUser(result.data);
      navigate("/user-profile");
      setLoading(false);
    } else {
      const message = result.message;
      setStatus(false);
      setMessage(message);
      setLoading(false);
    }
  };
  return (
    // <Carousel></Carousel>
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('/public/images/cuet_gate.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-slate-100">
            <div className="hero">
              <div className="hero-content flex-col">
                <div className="hero-content text-center text-neutral-content card transform transition-transform group hover:-translate-y-1 hover:scale-105">
                  <div className="max-w-md">
                    <div className="card mt-16 mx-9 flex-shrink-0 w-full max-w-sm shadow-gray-800 shadow-xl bg-tranparent card-body">
                      <div className="text-center mb-4">
                        <div className="flex flex-col items-center">
                          <img
                            src="/public/images/CUET_Vector_ogo.svg.png"
                            alt=""
                            className="w-[110px]"
                          />
                          <h1 className="text-4xl font-bold text-slate-100">
                            Login Now!
                          </h1>
                        </div>
                      </div>

                      <CustomForm
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={loginSchema}
                      >
                        <CustomField
                          type="text"
                          name="studentId"
                          labelText="Student Id"
                          className="text-slate-100 glass w-full input input-bordered"
                          placeholder="Enter Your Student Id"
                        />
                        <CustomField
                          type="password"
                          name="password"
                          labelText="Password"
                          className="text-slate-100 glass w-full input input-bordered"
                          placeholder="Enter Password"
                        />
                        <div className="form-control mt-6">
                          <button
                            className="btn bg-success glass text-white"
                            type="submit"
                          >
                            {loading ? "Loading..." : "Login"}
                          </button>
                        </div>
                      </CustomForm>
                      {status === false && (
                        <p className="text-[red] text-md my-1 text-[600] text-center">
                          *{message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
