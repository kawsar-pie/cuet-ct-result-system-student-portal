import React from 'react';
import StudentNav from '../../components/StudentNav/StudentNav'
import { Outlet } from 'react-router';
const Student = () => {
    return (
        <div className='mt-16'>
            <h1 className='text-center pt-9 font-bold'>Student Panel</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-5">
                <div className="col-span-1">
                    <StudentNav></StudentNav>
                </div>
                <div className="p-4 border-2 col-span-2 rounded-2xl">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Student;