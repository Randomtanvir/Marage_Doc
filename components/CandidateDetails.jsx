const CandidateDetails = () => {
  return (
    <div className="inline-block container  mx-auto md:text-[13px] mb-4 font-calibri">
      <table className="w-full border-collapse">
        <tbody>
          <tr>
            <td className="border border-black text-[16px italic text-[#aeaeae] p-[3px]">
              Candidate Details
            </td>
            <td style={{ border: "none" }}></td>
          </tr>

          <tr>
            <td className="border border-black w-[35%] font-sans p-[3px] text-[16px] font-normal text-black ">
              Document Type
            </td>
            <td className="border border-black text-[#1B6394] font-semibold ">
              Marriage certificate
            </td>
          </tr>
          <tr>
            <td className="border border-black w-[35%] font-sans p-[3px] text-[16px] font-normal text-black ">
              Applicant Name
            </td>
            <td className="border border-black text-[#1B6394] font-semibold ">
              Mohammad Karim
            </td>
          </tr>
          <tr>
            <td className="border border-black w-[35%] font-sans p-[3px] text-[16px] font-normal text-black ">
              Email Id
            </td>
            <td className="border border-black text-[#1B6394] font-semibold ">
              MohammadKarim@gmail.com
            </td>
          </tr>
          <tr>
            <td className="border border-black w-[35%] font-sans p-[3px] text-[16px] font-normal text-black ">
              Phone Number
            </td>
            <td className="border border-black text-[#1B6394] font-semibold ">
              78997544
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CandidateDetails;
