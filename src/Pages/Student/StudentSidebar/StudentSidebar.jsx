import React, { useState } from "react";
import { Link } from "react-router-dom";

const StudentSidebar = () => {
  const [issidebaropen, setIssidebaropen] = useState(false);
  const handlesidebar = () => {
    setIssidebaropen(!issidebaropen);
  };
  return (
    <>
      <button
        onClick={handlesidebar}
        type="button"
        className="bg-gray-200 rounded-lg fixed top-0 left-0 inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-700  dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {issidebaropen && (
        <button
          onClick={handlesidebar}
          type="button"
          className="inline-flex bg-gray-200 fixed right-2 top-0 items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-700  dark:focus:ring-gray-600"
        >
          <span className="sr-only">Close Sidebar</span>
          <svg
            className="h-8 w-8 text-neutral-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="18" y1="6" x2="6" y2="18" />{" "}
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 ${
          issidebaropen ? "translate-x-0" : "-translate-x-full"
        } `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 ">
          <div className="flex flex-col h-full justify-between">
            <ul className="space-y-2 font-medium">
              <li>
                <div className="flex items-center p-2 hover:text-white text-gray-900 rounded-lg  hover:bg-gray-700  group">
                  <svg
                    className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400  group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Student</span>
                </div>
              </li>
              <li>
                <Link
                  to="/student"
                  className="flex items-center p-2 hover:text-white text-gray-900 rounded-lg  hover:bg-gray-700  group"
                >
                  <svg
                    className="h-8 w-8 hover:text-gray-200 text-neutral-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />{" "}
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />{" "}
                    <rect x="10" y="12" width="4" height="4" />
                  </svg>
                  <span className="ms-3">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/student/educationdetails"
                  className="flex items-center p-2 hover:text-white text-gray-900 rounded-lg  hover:bg-gray-700  group"
                >
                  <svg
                    className="h-8 w-8 hover:text-gray-200 text-neutral-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />{" "}
                    <line x1="13" y1="8" x2="15" y2="8" />{" "}
                    <line x1="13" y1="12" x2="15" y2="12" />
                  </svg>
                  <span className="ms-3">Education Details</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/student/appliedcompanies"
                  className="flex items-center p-2 hover:text-white text-gray-900 rounded-lg  hover:bg-gray-700  group"
                >
                  <svg
                    className="h-8 w-8 hover:text-gray-200 text-neutral-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <rect x="4" y="4" width="16" height="16" rx="2" />{" "}
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                  <span className="ms-3">Applied</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/student/profile"
                  className="flex items-center p-2 hover:text-white text-gray-900 rounded-lg  hover:bg-gray-700  group"
                >
                  <svg
                    className="h-8 w-8 hover:text-gray-200 text-neutral-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />{" "}
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="ms-3">Your Profile</span>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  to="/changepassword"
                  className="flex items-center p-2 hover:text-white text-gray-900 rounded-lg  hover:bg-gray-700  group"
                >
                  <svg
                    className="h-8 w-8 hover:text-gray-200 text-neutral-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <circle cx="5" cy="18" r="2" />{" "}
                    <circle cx="19" cy="6" r="2" />{" "}
                    <path d="M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3" />{" "}
                    <path d="M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3" />
                  </svg>
                  <span className="ms-3">Change password</span>
                </Link>
              </li>
              <li></li>
              <li>
                <Link
                  to="/"
                  className="flex items-center p-2 hover:text-white text-gray-900 rounded-lg  hover:bg-gray-700  group"
                >
                  <svg
                    className="h-8 w-8 hover:text-gray-200 text-neutral-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                  </svg>
                  <span className="ms-3">Log Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default StudentSidebar;
