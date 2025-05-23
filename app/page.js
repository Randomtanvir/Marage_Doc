import DigitalAttestationResult from "@/components/DigitalAttestationResult";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <DigitalAttestationResult />
     
    </main>
  );
}

// export function TransactionDetails() {
//   return (
//     <div className="max-w-md mx-auto p-4">
//       <div className="border border-gray-300 rounded">
//         <div className="bg-gray-100 p-2 border-b border-gray-300">
//           <p className="text-gray-600">Transaction Details</p>
//         </div>
//         <div className="p-4">
//           <table className="w-full">
//             <tbody>
//               <tr className="border-b border-gray-200">
//                 <td className="py-2 text-gray-600">Transaction Number</td>
//                 <td className="py-2">VN1674343</td>
//               </tr>
//               <tr className="border-b border-gray-200">
//                 <td className="py-2 text-gray-600">Payment ID</td>
//                 <td className="py-2">202569014675801</td>
//               </tr>
//               <tr className="border-b border-gray-200">
//                 <td className="py-2 text-gray-600">Total Payment</td>
//                 <td className="py-2">OMR 25.75</td>
//               </tr>
//               <tr>
//                 <td className="py-2 text-gray-600">Transaction Date</td>
//                 <td className="py-2">13 APR 2025</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
