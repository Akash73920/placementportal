import React from "react";
import HodList from "../../../Components/HodList/HodList";
import hodData from "../../../SampleData/HodList";

const AllHod = () => {
  return (
    <div>
      <div className="p-4 sm:ml-64 min-h-screen">
        <div className="mb-4 pb-10 min-h-screen px-8 mx-4 rounded ">
          <div className="text-gray-100 font-bold text-3xl p-5">Hods</div>
          <HodList data={hodData} />
        </div>
      </div>
    </div>
  );
};

export default AllHod;
