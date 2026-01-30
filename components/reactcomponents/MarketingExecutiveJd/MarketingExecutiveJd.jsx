import React from 'react'

import location from "../../img/location.png";
import clock from "../../img/clock.png";

const MarketingExecutiveJd = () => {
    return (
        <>
             <h1 className='text-4xl font-medium mb-5'>
             Marketing Executive
            </h1>
        <div className='w-full md:w-[50%] border border-gray-600 rounded-2xl p-10'>
            <h1 className='text-4xl font-medium mb-5'>
                Job Description
            </h1>

            <p className='mb-4'>

                Marketing executives oversee many aspects of a campaign throughout the entire lifespan of a product, service or idea.  Conceiving and developing efficient and intuitive marketing strategies. Organizing and oversee advertising/communication campaigns (social media, TV etc.), exhibitions and promotional events. Conducting market research and analysis to evaluate trends, brand awareness and competition ventures. As such executives are likely to have a great deal of responsibility early on and will be required to manage their time and duties themselves.

            </p>
            <div className='mb-4'>
            <p className='text-2xl font-medium mb-3'>
                    Responsibilities and Duties
                </p>
                <ul className="list-disc list-inside mb-3">

                    <li className=''>
                        overseeing and developing marketing campaigns
                    </li>
                    <li>
                        conducting research and analysing data to identify and define audiences
                    </li>
                    <li>
                        devising and presenting ideas and strategies
                    </li>
                    <li>
                        promotional activities
                    </li>
                    <li>
                        compiling and distributing financial and statistical information
                    </li>
                    <li>
                        writing and proofreading creative copy
                    </li>
                    <li>
                        maintaining websites and looking at data analytics
                    </li>
                    <li>
                        organising events and product exhibitions
                    </li>
                    <li>
                        managing campaigns on social media.
                    </li>
                    <li>
                        coordinating internal marketing and an organisation’s culture
                    </li>
                    <li>
                        updating databases and using a customer relationship management (CRM) system
                    </li>
                    <li>
                        monitoring performance
                    </li>
                </ul>

                <p className='text-2xl font-medium mb-3'>
                    Key skills
                </p>
                <ul className='list-disc list-inside '>
                    <li>
                        Good teamwork skills
                    </li>
                    <li>
                        Communication skills and networking ability
                    </li>
                    <li>
                        Adaptability
                    </li>
                    <li>
                        IT skills
                    </li>
                    <li>
                        Good organisation and planning skills
                    </li>
                    <li>
                        Creativity and writing skills
                    </li>
                    <li>
                        Commercial awareness
                    </li>
                    <li>
                        Strong attention to detail
                    </li>
                    <li>
                        Numerical skills
                    </li>
                </ul>







            </div>
            <div className="flex gap-4 mb-2">
                <div className="flex p-2 items-center border border-black rounded-3xl gap-3">
                    <img src={location} alt="" style={{
                        height: '20px',
                        width: '20px'
                    }} />
                    Kota , Rajasthan
                </div>
                <div className="flex p-2 items-center border border-black rounded-3xl gap-3">
                    <img src={clock} alt="" style={{
                        height: '20px',
                        width: '20px'
                    }} />
                    Full-time
                </div>
            </div>
            <div>
            <span className='font-medium'>
            Role Category
            </span>
            - Enterprise & B2B Sales
            </div>
            <div>
            <span className='font-medium'>
            Education
            </span>
            - UG : Any Graduate
            </div>
            <span className='font-medium'>
            Role Category 
            </span>
           - PG : Post Graduation Not Required

        </div>
        </>

    )
}

export default MarketingExecutiveJd
