import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const EnrolledSemesters = () => {
    AOS.init({
        duration: 1000,
    });
    const allSemesters = ["11", "12", "21", "22", "31", "32", "41", "42"];
    return (
        <div className=''>
            <div className="hero min-h-screen" style={{ backgroundImage: `url('/public/images/51018903502_4a2d137849_o.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="hero-overlay bg-opacity-70">
                </div>
                <div className='grid grid-cols-3 gap-16 py-[9%] px-[5%]'>
                    {allSemesters.map(semseter => <>
                        <div data-aos="fade-up" className="card w-96 bg-transparent glass shadow-xl image-full">
                            <div className="card-body bg-transparent">
                                <h2 className="text-xl font-bold text-center">Level-{semseter[0]} Term-{semseter[1]}</h2>
                                <p className='text-warning text-center'>All Course Code here</p>
                                <div className="card-actions justify-center">
                                    {/* <button to="/courses" className="btn glass bg-success text-white">See Courses</button> */}
                                    <Link to="/courses" className="btn glass bg-success text-white"  style={{ textDecoration: 'none',color:"white" }}>Courses</Link>
                                </div>
                            </div>
                        </div>
                    </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default EnrolledSemesters;