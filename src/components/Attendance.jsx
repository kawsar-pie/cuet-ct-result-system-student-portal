/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Attendance = ({
  totalClass,
  totalAttendance,
  attendanceRatio,
  isLoading = false,
}) => {
  return (
    <div className="mt-4">
      <div className="overflow-x-hidden">
        {isLoading ? (
          <h3 className="text-center">Loading...</h3>
        ) : totalClass === 0 ? (
          <h3 className="text-center">There is no record</h3>
        ) : (
          <table className="table">
            <thead className="text-md text-white text-center">
              <tr>
                <th>Total Class</th>
                <th>Attendance</th>
                <th>Attendance Ratio(%)</th>
              </tr>
            </thead>
            <tbody className="text-xl text-white text-center">
              <tr>
                <th>{totalClass}</th>
                <th>{totalAttendance}</th>
                <th>{attendanceRatio} %</th>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Attendance;
