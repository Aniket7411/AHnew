"use client";

import { useRouter } from "next/navigation";
import "./section2.css";

const Section2 = (props) => {
  const { country } = props;
  const router = useRouter();
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/images/Line 1.svg')",
          backgroundSize: "cover", // Makes the background image cover the whole div
          // backgroundPosition: "center", // Center-aligns the background image
          backgroundRepeat: "no-repeat", // Prevents the background from repeating
          // minHeight: "100vh",
          zIndex: "-1",
          // marginTop: "1.25rem",
          // marginBottom: "3rem",
        }}
      >
        <h2
          className="text-center secTwoHeading mb-8 px-16
        "
        // style={{
        //     fontSize:'48px',
        //     fontWeight:600,
        //     lineHeight:'57px',
        //     paddingTop:'4rem'
        // }}
        >
          How We operate: Our Online Assignment Help Service Workflow in {country}
        </h2>
        <div className="flex justify-center gap-2 align-center flex-wrap px-6">
          <div
            className="rounded-xl flex p-4 flex-col items-center largerScreen"
            style={{
              outline: "1px solid #DCDCDC",
              padding: "46px 24px",
              backgroundColor: "#fff",
            }}
          >
            <img
              src="/images/Div1.svg"
              className="w-[120px] h-[120px] rounded-full mb-2"
              alt="process"
            />

            <h2 className="font-bold mb-2">Submit Your Inquiry</h2>
            <p className="text-center">
              Fill in the inquiry form with the required details and our expert
              will connect immediately.
            </p>
          </div>

          <div
            className="rounded-xl flex p-4  flex-col items-center largerScreen"
            style={{
              outline: "1px solid #DCDCDC",
              padding: "46px 24px",
              backgroundColor: "#fff",
            }}
          >
            <img
              src="/images/Div2.svg"
              className="w-[120px] h-[120px] rounded-full mb-2"
              alt="process"
            />

            <h2 className="font-bold mb-2">Connect with Our Experts </h2>
            <p className="text-center">
              Our expert will further discuss and understand requirements,
              assist in the process and clarify all the necessary details.
            </p>
          </div>

          <div
            className="rounded-xl flex p-4  flex-col items-center largerScreen"
            style={{
              outline: "1px solid #DCDCDC",
              padding: "46px 24px",
              backgroundColor: "#fff",
            }}
          >
            <img
              src="/images/Div3.svg"
              className="w-[120px] h-[120px] rounded-full mb-2"
              alt="process"
            />

            <h2 className="font-bold mb-2">Proceed with Payment</h2>
            <p className="text-center">
              Make secured payments through different payment methods at your
              convenience.
            </p>
          </div>

          <div
            className="rounded-xl flex p-4  flex-col items-center largerScreen"
            style={{
              outline: "1px solid #DCDCDC",
              padding: "46px 24px",
              backgroundColor: "#fff",
            }}
          >
            <img
              src="/images/Div4.svg"
              className="w-[120px] h-[120px] rounded-full mb-2"
              alt="process"
            />

            <h2 className="font-bold mb-2">Get Your Solution</h2>
            <p className="text-center">
              Get your perfect solution delivered meeting your needs before the
              deadline.
            </p>
          </div>
        </div>
        <div className="my-16 text-center">
          <button
            // type="submit"
            className="w-auto text-[#fff] px-2 rounded-md bg-[#38419A]"
            style={{
              width: "200px",
              padding: "8px",
            }}
            onClick={() => router.push('/contact-us')}
          >
            Book Our Services
          </button>
        </div>
        {/* <div className="text-center">
            <button className="text-[#fff]">

            Book Our Services
            </button>
        </div> */}
      </div>
    </>
  );
};

export default Section2;
