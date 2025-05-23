const TableDetails = () => {
    return (
        <div className="inline-block container  mx-auto text-[13px] mt-4 font-sans">
        <table className="w-full border-collapse">
          <tbody>
          <tr>
              <td className="border border-black">Transaction Number</td>
              <td style={{border:"none"}}></td>
            </tr>


            <tr>
              <td className="border border-black w-1/3">Transaction Number</td>
              <td className="border border-black text-[#1D4E8D] w-2/3">VN1674343</td>
            </tr>
            <tr>
              <td className="border border-black w-1/3">Payment ID</td>
              <td className="border border-black text-[#1D4E8D] w-2/3">202569014675801</td>
            </tr>
            <tr>
              <td className="border border-black w-1/3">Total Payment</td>
              <td className="border border-black text-[#1D4E8D] w-2/3">OMR 25.75</td>
            </tr>
            <tr>
              <td className="border border-black w-1/3">Transaction Date</td>
              <td className="border border-black text-[#1D4E8D] w-2/3">13 APR 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default TableDetails