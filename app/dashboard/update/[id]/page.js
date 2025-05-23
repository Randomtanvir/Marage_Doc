import React from "react";
import VerificationForm from "../../page";
import { getSingleVerificationData } from "@/utils/fetcher";

const EditPage = async ({ params }) => {
  const { id } = params;
  const verifactionData = await getSingleVerificationData(id);
  if (!verifactionData) {
    return <div>Loading...</div>;
  }
  return <VerificationForm isEdit={true} verifactionData={verifactionData} />;
};

export default EditPage;
