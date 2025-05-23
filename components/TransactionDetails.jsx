const TransactionDetails = () => {
  return (
    <div className="inline-block container  mx-auto md:text-[13px] mb-4 font-calibri">
      <table className="w-full border-collapse">
        <tbody>
          <tr>
            <td className="border border-black text-[16px italic text-[#aeaeae] p-[3px]">
              Transaction Details
            </td>
            <td style={{ border: "none" }}></td>
          </tr>

          <tr>
            <td className="border border-black w-[35%] font-sans p-[3px] text-[16px] font-normal text-black ">
              Transaction Number
            </td>
            <td className="border border-black text-[#1B6394] font-semibold ">
              VN1674343
            </td>
          </tr>
          <tr>
            <td className="border border-black w-[35%] font-sans p-[3px] text-[16px] font-normal text-black ">
              Payment ID
            </td>
            <td className="border border-black text-[#1B6394] font-semibold ">
              202569014675801
            </td>
          </tr>
          <tr>
            <td className="border border-black w-[35%] font-sans p-[3px] text-[16px] font-normal text-black ">
              Total Payment
            </td>
            <td className="border border-black text-[#1B6394] font-semibold ">
              OMR 25.75
            </td>
          </tr>
          <tr>
            <td className="border border-black w-[35%] font-sans p-[3px] text-[16px] font-normal text-black ">
              Transaction Date
            </td>
            <td className="border border-black text-[#1B6394] font-semibold ">
              13 APR 2025
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionDetails;
