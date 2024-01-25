import { useContext, useState } from 'react';
import loginSchema from '../../formValidator/login.yup';
import CustomForm from '../../components/Formik/CustomForm';
import CustomField from '../../components/Formik/CustomField';
import { rootUrl } from '../../utils/rootUrl';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';
import axios from 'axios';
import { Carousel } from 'bootstrap';

const Login = () => {
    const { user, setUser } = useContext(UserContext)
    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState('')
    const navigate = useNavigate();

    const initialValues = {
        phoneNo: "1804017",
        password: "123456"
    }
    const handleSubmit = async (values) => {

        await axios.post(rootUrl + 'user/login', values, { withCredentials: true })
            .then(({ data }) => {
                if (data.status) {
                    const { token, ...others } = data.data
                    setUser(others)
                    localStorage.setItem('token', token)
                    setStatus(true);

                    navigate('../')
                }
            })
            .catch((err) => {
                const { message } = err.response.data
                setStatus(false);
                setMessage(message)
            })
    }
    console.log("logged in user==", user);
    return (
        // <Carousel></Carousel>
        <div className=''>
            <div className="hero min-h-screen" style={{ backgroundImage: `url('/public/images/cuet_gate.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="hero-overlay bg-opacity-70">
                </div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-slate-100">
                        <div className="hero">
                            <div className="hero-content flex-col">
                                <div className="hero-content text-center text-neutral-content card transform transition-transform group hover:-translate-y-1 hover:scale-105">
                                    <div className="max-w-md">
                                        <div className="card mt-16 mx-9 flex-shrink-0 w-full max-w-sm shadow-gray-800 shadow-xl bg-tranparent card-body">
                                            <div className="text-center mb-4">
                                                <div className='flex flex-col items-center'>
                                                    <img src="/public/images/CUET_Vector_ogo.svg.png" alt="" className='w-[110px]' />
                                                    <h1 className="text-4xl font-bold text-slate-100">Login Now!</h1>
                                                </div>
                                            </div>

                                            <CustomForm initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema}>
                                                <CustomField
                                                    type="tel"
                                                    name='idNo'
                                                    labelText='Student Id'
                                                    className="text-slate-100 glass w-full input input-bordered"
                                                    placeholder="Enter you Id" />
                                                <CustomField
                                                    type="password"
                                                    name='password'
                                                    labelText='Password'
                                                    className="text-slate-100 glass w-full input input-bordered"
                                                    placeholder="Enter Password" />
                                                <div className="form-control mt-6">
                                                    <button className="btn bg-success glass text-white" type='submit'>Login</button>
                                                </div>
                                            </CustomForm>
                                            {
                                                status === false &&
                                                <p className='text-[red] text-md my-1 text-[600] text-center'>*{message}</p>

                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;