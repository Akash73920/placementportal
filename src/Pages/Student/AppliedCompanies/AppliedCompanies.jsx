import React from "react";
import companies from "../../../SampleData/CompanyList";
import CompanyCard from "../../../Components/CompanyCard/CompanyCard";

const AppliedCompanies = () => {
  return (
    <div>
      {/* Header */}

      <div className="p-4 sm:ml-64 min-h-screen">
        {/* Applied Companies */}

        <div className="flex items-center h-10 intro-y">
          <h2 className="mr-5 text-2xl font-bold text-gray-100 truncate">
            Applied Companies
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

export default AppliedCompanies;
