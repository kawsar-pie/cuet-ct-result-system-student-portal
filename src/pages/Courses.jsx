import React from 'react';
import CtMarks from '../components/CtMarks';

const Courses = () => {
    const allCourseCodes = ["CSE-421", "CSE-422", "CSE-445", "CSE-402", "CSE-423", "CSE-424", "CSE-427", "CSE-428"];
    return (
        <div className=''>
            <div className="hero min-h-screen" style={{ backgroundImage: `url('/public/images/incubater.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="hero-overlay bg-opacity-70">
                </div>
                <div className='grid grid-cols-3 gap-16 py-[9%] px-[5%]'>
                    {allCourseCodes.map(course => <>
                        <div data-aos="zoom-in" className="card w-96 bg-transparent glass shadow-xl image-full">
                            <div className="card-body bg-transparent">
                                <h2 className="text-xl font-bold text-center">{course}</h2>
                                <h3 className="text-xl font-bold text-center">Software Engineering</h3>
                                <div className="">
                                    <div className="text-left">
                                        <ul className='flex flex-row justify-between'>
                                            <li className='flex gap-2 justify-center'><p className='font-semibold'>Credit:</p><p className='text-right'>3</p></li>
                                            <li className='flex gap-2'><p className='font-semibold'>Total CT:</p><p className='text-right'>4</p></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-actions justify-center">
                                    <button className="btn glass bg-success text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Marks</button>
                                </div>
                            </div>
                        </div>
                    </>)
                    }
                </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_5" className="modal  modal-bottom sm:modal-middle">
                <div className="modal-box bg-transparent glass text-white">
                    <h3 className="font-bold text-lg text-center">CT and Attendence Marks (CSE-423)</h3>
                    <CtMarks></CtMarks>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-success glass text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Courses;