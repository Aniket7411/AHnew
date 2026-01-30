import React from 'react'

import location from "../../img/location.png";
import clock from "../../img/clock.png";

const AcademicWriterJd = () => {
    return (
        <div className='w-full md:w-[50%] border border-gray-600 rounded-2xl p-4 '>
            <h1 className='text-3xl font-medium mb-2'>
                Job Description
            </h1>

            <p className='mb-4'>

                The job of content writer is to create fresh content for companies and clients with specific requirements. Here the aim is to develop content that accurately reflects requirements, content writers often research the material over internet, they need to write each article in their own language without Plagiarism along with meeting deadlines.

            </p>
            <div className='mb-4'>
                <p className='text-2xl font-medium'>
                    Responsibilities and Duties
                </p>
                <ul className="list-disc list-inside ">

                    <li className=''>
                        Researching on particular topics and create content written in your own language.
                    </li>
                    <li>
                        Write in-depth on diverse topics in specific domain with the perfect blend of creative and writing skills.
                    </li>
                    <li>
                        Effective team cooperation and time management skills with the ability to work under every environment and adhere to project deadlines.
                    </li>
                    <li>
                        Organizes material and completes writing assignment according to set standards regarding order, clarity, conciseness, style, terminology, correct grammar, punctuation, and spelling.
                    </li>
                    <li>
                        Create written material and assists in layout process by suggesting charts, illustrations, photographs, drawings, sketches, and diagrams that best illustrate the material
                    </li>
                    <li>
                        Reviews, edits, or re-writes material prepared by other authors, journals, articles and other similar sources and create a reviewed article as per requirement.
                    </li>
                    <li>
                        Willing to be trained, but can also work under minimal supervision with proficiency.
                    </li>
                    <li>
                        Maintain professionalism within office premises by following company policies and not disturb decorum anyhow.
                    </li>
                </ul>

                <p>
                    Employer Requirements
                </p>
                <ul className='list-disc list-inside '>
                    <li>
                        Graduation degree B.Com, M.Com, BBA, MBA, Any other management degree.
                    </li>
                    <li>
                        Good working knowledge of Microsoft Office (Word, Excel, PowerPoint).
                    </li>
                    <li>
                        Excellent English Communication and Grammar skills required.
                    </li>
                    <li>
                        Specific Subject matter required (Management, Finance, Accounts, Law, Economics)
                    </li>
                    <li>
                        Self-starter, highly motivated, team-player
                    </li>
                </ul>







            </div>
            <div className="flex flex-wrap gap-2">
                <div className="flex p-2 items-center border border-black rounded-3xl gap-2">
                  <img src={location} alt="" className="h-5 w-5" />
                  <span>100% remote</span>
                </div>
                <div className="flex p-2 items-center border border-black rounded-3xl gap-2">
                  <img src={clock} alt="" className="h-5 w-5" />
                  <span>Full-time</span>
                </div>
              </div>
            {/* Job Type
            • Full time, Permanent
            Job Location
            Jaipur, Rajasthan */}
            <span className='font-medium'>
            Experience Required 
            </span>
             : Fresher -1 years’ experience in same domain.
        </div>
    )
}

export default AcademicWriterJd
