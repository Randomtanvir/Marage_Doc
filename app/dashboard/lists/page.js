import React from "react";
import VerificationCard from "./_components/VerificationCard";
import { getAllVerificationData } from "@/utils/fetcher";

const ListsPage = async () => {
  const verificationData = await getAllVerificationData();
  console.log(verificationData, "verificationData");

  return (
    <div>
      {verificationData?.map((veri) => (
        <VerificationCard key={veri._id} VerificationData={veri} />
      ))}
    </div>
  );
};
export default ListsPage;
