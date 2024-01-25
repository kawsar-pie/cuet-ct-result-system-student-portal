import React from 'react';

const CtMarks = () => {
    return (
        <div className='mt-4'>
            <div className="overflow-x-hidden">
                <table className="table">
                    <thead className='text-md text-white text-center'>
                        <tr>
                            <th>CT-01</th>
                            <th>CT-02</th>
                            <th>CT-03</th>
                            <th>CT-04</th>
                            <th>Best Three</th>
                            <th>Atten.</th>
                        </tr>
                    </thead>
                    <tbody className='text-xl text-white text-center'>
                        <tr>
                            <th>20</th>
                            <th>10</th>
                            <th>15</th>
                            <th>15</th>
                            <th>50</th>
                            <th><h4 className='flex flex-row items-center gap-1'><span>25</span> <sub className='text-xs'>({Math.ceil(25*100/30)}%)</sub></h4></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CtMarks;