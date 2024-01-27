// eslint-disable-next-line react/prop-types
const CtMarks = ({ classTests = [], total = 0, isLoading = false }) => {
  return (
    <div className="mt-4">
      <div className="overflow-x-hidden">
        {classTests.length > 0 ? (
          <table className="table">
            <thead className="text-md text-white text-center">
              <tr>
                {classTests.map((ct, idx) => (
                  <th key={idx}>{`CT-${idx + 1}`}</th>
                ))}
                {/* <th>CT-02</th>
              <th>CT-03</th>
              <th>CT-04</th> */}
                <th>Total</th>
              </tr>
            </thead>
            <tbody className="text-xl text-white text-center">
              <tr>
                {classTests.map((ct, idx) => (
                  <th key={idx}>{ct.marks}</th>
                ))}
                <th>{total}</th>
                {/* <th>
                <h4 className="flex flex-row items-center gap-1">
                  <span>25</span>{" "}
                  <sub className="text-xs">({Math.ceil((25 * 100) / 30)}%)</sub>
                </h4>
              </th> */}
              </tr>
            </tbody>
          </table>
        ) : isLoading ? (
          <h3 className="text-center">Loading...</h3>
        ) : (
          <h3 className="text-center">There is no Class Test results</h3>
        )}
      </div>
    </div>
  );
};

export default CtMarks;
