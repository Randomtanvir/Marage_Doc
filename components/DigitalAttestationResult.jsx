import React from "react";
import TableDetails from "./TableDetails";

const DigitalAttestationResult = () => {
  return (
    <div className="bg-white p-8 container mx-auto">
      <div className="border border-gray-300 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          {/* Left Logo */}
          <div className="flex items-center">
            <img src="/oman-post-logo.png" alt="Oman Post" className="h-12" />
          </div>
          {/* Right Logo */}
          <div>
            <img src="/ministry-logo.png" alt="Ministry Logo" className="h-12" />
          </div>
        </div>

        {/* Arabic Title */}
        <div className="text-center mb-2 text-[#3B82F6]">
          بيانات التصديق الرقمي
        </div>

        {/* English Title */}
        <div className="text-center mb-8 text-xl font-semibold">
          Digital Attestation Result
        </div>

        {/* Transaction Details Table */}
       <TableDetails/>

        {/* Candidate Details Table */}
       <TableDetails/>

        {/* Verification Details Table */}
       <TableDetails/>

        {/* Document Details Table */}
       <TableDetails/>

        {/* Footer */}
        <div className="text-center text-gray-400 text-[12px]">
          Copyright 2025, All Right Reserved
        </div>
      </div>
    </div>
  );
};

export default DigitalAttestationResult;



