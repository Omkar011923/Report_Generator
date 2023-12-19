import React, { useEffect } from "react";
import {
  eachHTMLQuestionWeightage,
  eachCSSQuestionWeightage,
  eachJSQuestionWeightage,
  eachReactQuestionWeightage,
  eachReduxQuestionWeightage,
  eachConcept,
  eachSoftSkills,
  totalTechSkill,
} from "../Calculation";
import ReactSpeedometer from "react-d3-speedometer";
import { useSelector } from "react-redux";

export default function TotalScoreDisplay(props) {
  let htmlTotal =
    useSelector((state) => state.subjectCounts.htmlCount) *
    eachHTMLQuestionWeightage;
  let cssTotal =
    useSelector((state) => state.subjectCounts.cssCount) *
    eachCSSQuestionWeightage;
  let jsTotal =
    useSelector((state) => state.subjectCounts.jsCount) *
    eachJSQuestionWeightage;
  let reactTotal =
    useSelector((state) => state.subjectCounts.reactCount) *
    eachReactQuestionWeightage;
  let redusTotal =
    useSelector((state) => state.subjectCounts.reduxCount) *
    eachReduxQuestionWeightage;

  let conceptTotal =
    useSelector((state) => state.subjectCounts.conceptCount) * eachConcept;
  let softSkillTotal =
    useSelector((state) => state.subjectCounts.softSkillCount) * eachSoftSkills;

  let totalMarksObtainINTechSkill = totalTechSkill(
    htmlTotal,
    cssTotal,
    jsTotal,
    reactTotal,
    redusTotal
  ).toFixed(2);

  let overAllTotal = () => {
    return Math.round(
      Number(totalMarksObtainINTechSkill) +
        Number(conceptTotal) +
        Number(softSkillTotal)
    );
  };
  const changeBg = () =>{
    if(overAllTotal()>39){
      props.setCurrentBorder('green')
    }else{
      props.setCurrentBorder('red')
    }
  }
  changeBg();
  return (
    <div className="relative">
      <ReactSpeedometer height={175} ringWidth={20} startColor="red" endColor="green" maxValue={100} value={overAllTotal()} />
      {overAllTotal() < 40 ? (
        <p className="absolute text-center w-full bottom-[-28px] text-red-500 font-semibold text-sm tracking-wider">
          You have Failed 👎 and got {overAllTotal()}
        </p>
      ) : (
        <p className="absolute text-center w-full bottom-[-28px] text-green-600 font-semibold text-lg tracking-wider">
          You are Eligible &#128077; and got {overAllTotal()}
        </p>
      )}
    </div>
  );
}
