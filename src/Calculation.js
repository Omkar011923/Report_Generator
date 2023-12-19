import { techSkillData } from "./data/TachData";
import { Weightage } from "./data/Weightage";
import { ConceptData } from "./data/ConceptData";
import { SoftSkillData } from "./data/SoftSkillData";

export const getWeightages = (a, b) => a / b;

export const eachTechSkills = getWeightages(
  Weightage.techSKill,
  Object.keys(techSkillData).length
).toFixed(2);

export const eachConcept = getWeightages(
  Weightage.concept,
  ConceptData.length
).toFixed(2);

export const eachSoftSkills = getWeightages(
  Weightage.softSkill,
  SoftSkillData.length
).toFixed(2);

export let eachHTMLQuestionWeightage = getWeightages(
  eachTechSkills,
  techSkillData.html.length
).toFixed(2);

export let eachCSSQuestionWeightage = getWeightages(
  eachTechSkills,
  techSkillData.css.length
).toFixed(2);

export let eachJSQuestionWeightage = getWeightages(
  eachTechSkills,
  techSkillData.js.length
).toFixed(2);

export const eachReactQuestionWeightage = getWeightages(
  eachTechSkills,
  techSkillData.react.length
).toFixed(2);

export const eachReduxQuestionWeightage = getWeightages(
  eachTechSkills,
  techSkillData.redux.length
).toFixed(2);


export const totalTechSkill = (...params) => {
  let total = 0;
  for (const param of params) {
    total += param;
  }
  return total;
};