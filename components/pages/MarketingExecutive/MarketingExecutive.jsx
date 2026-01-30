"use client";

import React from "react";
import MarketingExecutiveJd from "@/components/reactcomponents/MarketingExecutiveJd/MarketingExecutiveJd";
import ApplicationForm from "@/components/reactcomponents/CvForm/CvForm";

const MarketingExecutive = () => {
  return (
    <div className='flex flex-wrap justify-around items-start gap-5 p-10'>
      <MarketingExecutiveJd />
      <ApplicationForm role="Marketing Executive" />

    </div>
  )
}

export default MarketingExecutive
