import React, { useState, useRef } from "react";
import StudentList from "../../../Components/StudentList/StudentList";
import SampleData from "../../../SampleData/StudentList";

const AllStudents = () => {
  const [openBatch, setOpenBatch] = useState(false);
  const [openBranch, setOpenBranch] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);

  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const batchDropdownRef = useRef(null);
  const branchDropdownRef = useRef(null);
  const statusDropdownRef = useRef(null);

  const toggleBatchDropdown = () => {
    setOpenBatch(!openBatch);
  };

  const toggleBranchDropdown = () => {
    setOpenBranch(!openBranch);
  };

  const toggleStatusDropdown = () => {
    setOpenStatus(!openStatus);
  };

  const handleBatchSelection = (batch) => {
    console.log(`Selected Batch: ${batch}`);
    setSelectedBatch(batch);
    setOpenBatch(false);
  };

  const handleBranchSelection = (branch) => {
    console.log(`Selected Branch: ${branch}`);
    setSelectedBranch(branch);
    setOpenBranch(false);
  };

  const handleStatusSelection = (status) => {
    console.log(`Selected Status: ${status}`);
    setSelectedStatus(status);
    setOpenStatus(false);
  };

  const handleClickOutside = (e) => {
    if (
      batchDropdownRef.current &&
      !batchDropdownRef.current.contains(e.target)
    ) {
      setOpenBatch(false);
    }
    if (
      branchDropdownRef.current &&
      !branchDropdownRef.current.contains(e.target)
    ) {
      setOpenBranch(false);
    }
    if (
      statusDropdownRef.current &&
      !statusDropdownRef.current.contains(e.target)
    ) {
      setOpenStatus(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter the students based on the selected filters
  const filteredStudents = SampleData.filter((student) => {
    return (
      (selectedBatch === "" || student.batch === parseInt(selectedBatch)) &&
      (selectedBranch === "" || student.branch === selectedBranch) &&
      (selectedStatus === "" || student.status === selectedStatus)
    );
  });

  console.log("Filtered Students:", filteredStudents);

  // Unique values for branch and status dropdowns
  const branches = [...new Set(SampleData.map((student) => student.branch))];
  const statuses = [...new Set(SampleData.map((student) => student.status))];

  return (
    <div>
      <div className="p-4 sm:ml-64 min-h-screen">
        <div className="mb-4 pb-10 min-h-screen  px-8 mx-4 rounded ">
          <div className="text-gray-100 font-bold text-3xl p-5">Students</div>

          {/* Batch Dropdown */}
          <div ref={batchDropdownRef} className="relative mb-5 w-[30rem]">
            <button
              onClick={toggleBatchDropdown}
              className={`flex max-w-[60vw] min-w-[30vw] items-center justify-between rounded bg-white p-2 ring-1 ring-gray-300 ${
                openBatch ? "ring-blue-600" : ""
              }`}
            >
              <span>
                {selectedBatch === ""
                  ? "Select Batch"
                  : `Batch ${selectedBatch}`}
              </span>
              <i className="fas fa-chevron-down text-xl"></i>
            </button>
            {openBatch && (
              <ul className="z-10 absolute mt-1 max-w-[60vw] min-w-[30vw] rounded bg-gray-50 ring-1 ring-gray-300">
                {["2025", "2024"].map((batch) => (
                  <li
                    key={batch}
                    className="cursor-pointer select-none p-2 hover:bg-gray-200"
                    onClick={() => handleBatchSelection(batch)}
                  >
                    {batch}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Branch Dropdown */}
          <div ref={branchDropdownRef} className="relative mb-5 w-[30rem]">
            <button
              onClick={toggleBranchDropdown}
              className={`flex max-w-[60vw] min-w-[30vw] items-center justify-between rounded bg-white p-2 ring-1 ring-gray-300 ${
                openBranch ? "ring-blue-600" : ""
              }`}
            >
              <span>
                {selectedBranch === "" ? "Select Branch" : selectedBranch}
              </span>
              <i className="fas fa-chevron-down text-xl"></i>
            </button>
            {openBranch && (
              <ul className="z-10 absolute mt-1 max-w-[60vw] min-w-[30vw] rounded bg-gray-50 ring-1 ring-gray-300">
                {branches.map((branch, index) => (
                  <li
                    key={index}
                    className="cursor-pointer select-none p-2 hover:bg-gray-200"
                    onClick={() => handleBranchSelection(branch)}
                  >
                    {branch}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Status Dropdown */}
          <div ref={statusDropdownRef} className="relative mb-5 w-[30rem]">
            <button
              onClick={toggleStatusDropdown}
              className={`flex max-w-[60vw] min-w-[30vw] items-center justify-between rounded bg-white p-2 ring-1 ring-gray-300 ${
                openStatus ? "ring-blue-600" : ""
              }`}
            >
              <span>
                {selectedStatus === "" ? "Select Status" : selectedStatus}
              </span>
              <i className="fas fa-chevron-down text-xl"></i>
            </button>
            {openStatus && (
              <ul className="z-10 absolute mt-1 max-w-[60vw] min-w-[30vw] rounded bg-gray-50 ring-1 ring-gray-300">
                {statuses.map((status, index) => (
                  <li
                    key={index}
                    className="cursor-pointer select-none p-2 hover:bg-gray-200"
                    onClick={() => handleStatusSelection(status)}
                  >
                    {status}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Student List */}
          <StudentList batch={selectedBatch} data={filteredStudents} />
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
