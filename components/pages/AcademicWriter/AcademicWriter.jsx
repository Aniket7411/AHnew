"use client";

import React from "react";
import ApplicationForm from "@/components/reactcomponents/CvForm/CvForm";
import AcademicWriterJd from "@/components/reactcomponents/JobDescriptionAcademicWriter/AcademicWriterJd";

const AcademicWriter = () => {
  return (
    <div className='flex flex-wrap justify-around items-start gap-5 p-4  mt-5 md:mt-3 lg:py-8'>
      <AcademicWriterJd />
      <ApplicationForm role="Academic Content Writer" />

    </div>
  )
}

export default AcademicWriter
