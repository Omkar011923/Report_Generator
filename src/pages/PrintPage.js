import React, { useState } from "react";
import "../style.css";
import { useSelector } from "react-redux";
import TotalScoreDisplay from "../components/TotalScoreDisplay";
import { BarChart } from "@mui/x-charts";

export const PrintPage = React.forwardRef((props , ref) => {
  const [currentBorder , setCurrentBorder] = useState(' '); 
  return (
    <div
      ref={ref}
      className="p-10 bg-white w-[21cm] h-[29.6cm] flex flex-col gap-3 shadow-lg"
    >
      <div className="h-12 flex items-center justify-start mb-5">
        <img src="https://techpaathshala.com/assets/images/general/footer-logo.svg" alt="Logo" className="w-40 "/>
        <h1 className="text-3xl font-semibold ml-24">
          Report Card
        </h1>
      </div>
      <div className="flex gap-5">
        <div className=" p-6 w-[55%] border-2 border-slate-300 border-solid rounded-lg flex flex-col gap-3">
          <div>
            <h1 className="font-medium text-xl text-center tracking-wider mb-1">
              Student Details
            </h1>
            <hr className="bg-black h-[1px]"/>
          </div>
          <div>
            <p className="leading-8 text-lg">
              First Name :{" "}
              <span>{useSelector((state) => state.details.name)}</span>
            </p>
            <p className="leading-8 text-lg">
              Last Name :{" "}
              <span>{useSelector((state) => state.details.lastName)}</span>
            </p>
            <p className="leading-8 text-lg">
              Email : {" "}
              <span>{useSelector((state) => state.details.email)}</span>
            </p>
            <p className="leading-8 text-lg">
              Phone :{" "}
              <span>+91-{useSelector((state) => state.details.phoneNo)}</span>
            </p>
            <p className="leading-8 text-lg">
              Mentor Name :{" "}
              <span>{useSelector((state) => state.details.mentorName)}</span>
            </p>
            <p className="leading-8 text-lg">
              Batch Code :{" "}
              <span>{useSelector((state) => state.details.batchCode)}</span>
            </p>
          </div>
        </div>
        <div className="w-[52%] border-2 border-solid border-slate-300 p-5 rounded-lg" style={{
          border:`3px ${currentBorder} solid`
        }}>
          <div> 
            <h1 className="font-medium text-xl text-center tracking-wider mb-1">
              Overall Result
            </h1>
            <hr className="bg-black h-[1px]"/>
            <div className="mt-2 w-full flex justify-center ">
              <TotalScoreDisplay  setCurrentBorder={setCurrentBorder}/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border-2 border-solid border-slate-300  rounded-lg p-5">
          <div>
            <h1 className="font-medium text-xl text-center tracking-wider mb-1">
              Summary
            </h1>
            <hr className="bg-black h-[0.5px]"/>
          </div>
          <div className="flex h-[280px]">
            <BarChart
              series={[
                {
                  data: [useSelector((state) => state.subjectCounts.htmlCount)],
                  stack: "A",
                  label: "HTML",
                },
                {
                  data: [useSelector((state) => state.subjectCounts.cssCount)],
                  stack: "B",
                  label: "CSS",
                },
                {
                  data: [useSelector((state) => state.subjectCounts.jsCount)],
                  stack: "C",
                  label: "JS",
                },
                {
                  data: [
                    useSelector((state) => state.subjectCounts.reactCount),
                  ],
                  stack: "D",
                  label: "Rect",
                },
                {
                  data: [
                    useSelector((state) => state.subjectCounts.reduxCount),
                  ],
                  stack: "E",
                  label: "Redux",
                },
              ]}
              width={500}
              height={350}
            />
            <BarChart
              series={[
                {
                  data: [
                    useSelector((state) => state.subjectCounts.conceptCount),
                  ],
                  stack: "A",
                  label: "Concept",
                },
                {
                  data: [
                    useSelector((state) => state.subjectCounts.softSkillCount),
                  ],
                  stack: "B",
                  label: "Softskill",
                },
              ]}
              width={500}
              height={350}
            />
          </div>
        </div>
      </div>
      <div className="border-2 border-solid border-slate-300  rounded-lg p-5">
        <div>
          <h1 className="font-medium text-xl text-center tracking-wider mb-1">
            Mentor Feedback
          </h1>
          <hr className="bg-black h-[0.5px]"/>
        </div>
        <div className="w-full break-words whitespace-pre-wrap">
          <p className="px-10">
            {useSelector((state) => state.details.mentorFeedback)}
          </p>
        </div>
      </div>
    </div>
  );
});