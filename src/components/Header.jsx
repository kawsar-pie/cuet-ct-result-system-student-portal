import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';
import './Header.css'

const Header = () => {
    const { user } = useContext(UserContext)
    console.log(user);
    return (
        <div className='mt-0'>
            <div className="navbar shadow-xl flex justify-between fixed top-0 bg-[#f0f8ff] w-full z-10">
                {/* <div className="navbar-start">
                    <NavLink to='/' className="btn btn-ghost normal-case text-xl"> <img src="/public/images/CUET_Vector_ogo.svg.png" alt="" className='w-[35px]' /> StudentPortal</NavLink>
                </div> */}
                <div className='navbar-start font-bold my-2 mx-2 normal-case text-xl'>
                    <NavLink to='/'>
                        <span style={{ color: "#71ef95" }} className='flex align-middle items-center gap-1'>
                            <img src="/public/images/CUET_Vector_ogo.svg.png" alt="" className='w-[40px]' />
                            <span className='hub text-white glass bg-success'>Student</span>
                            <span className='text-success'>Portal</span>
                        </span></NavLink>
                </div>
                <div className="navbar-center">
                    <ul className="menu menu-horizontal flex items-center align-middle" >
                        {/* {user === null && <li className='mx-2'><NavLink to="/login">Login</NavLink></li>}
                        {user !== null && <li className='mx-2'><NavLink to="/logout">Logout</NavLink></li>} */}
                        {<li className="mx-2 dropdown dropdown-end">
                            <label tabIndex={0} className="avatar btn-success rounded-full btn btn-circle">
                                <div className="w-10 rounded-full">
                                    <img src="public\images\Kawsar(1).jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm bg-green dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                                <li>
                                    <Link to='user-profile' className="justify-between text-success">
                                        Profile
                                        <div className="badge badge-success badge-sm"></div>
                                    </Link>
                                </li>
                                <li><Link to='enrolled-semesters' className='text-success'>Semesters</Link></li>
                                {/* <li><Link to='courses' className='text-success'>Courses</Link></li> */}
                                <li><a className='text-success'>Logout</a></li>
                            </ul>
                        </li>}
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Header;