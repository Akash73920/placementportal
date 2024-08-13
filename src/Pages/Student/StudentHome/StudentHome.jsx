import React from "react";
import companies from "../../../SampleData/CompanyList";
import CompanyCard from "../../../Components/CompanyCard/CompanyCard";

const StudentHome = () => {
  return (
    <div>
      {/* Header */}

      <div className="p-4 sm:ml-64 min-h-screen">
        <h1 className="mb-4 text-4xl font-extrabold leading-none rounded-sm shadow-xl tracking-tight text-gray-50 md:text-5xl lg:text-6xl text-center bg-gray-600 p-5 ">
          Welcome To Placement Portal
        </h1>

        {/* Upcoming Companies */}

        <div className="flex items-center h-10 intro-y">
          <h2 className="mr-5 text-2xl font-bold text-gray-100 truncate">
            Upcoming Companies
          </h2>
        </div>
        <main className="py-6 flex items-center justify-center flex-wrap">
          {companies.map((company) => (
            <CompanyCard
              key={company.id}
              id={company.id}
              name={company.name}
              packageOffer={company.package}
              registrationDate={company.registrationDate}
              imageUrl={company.image}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default StudentHome;
