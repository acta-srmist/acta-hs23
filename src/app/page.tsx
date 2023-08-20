"use client"
import { Formik, Form, Field, useFormikContext } from "formik"
import matchSchemes from "./matchSchemes"
import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState } from "react"
import { FormValues } from "./types"

const initialValues: FormValues = {
  age: "",
  gender: "",
  reservation: "",
  disabled: "",
  ex_serviceman: "",
  marital_status: "",
  fiance_age: "",
  pregnant: "",
  children: "",
  income_freq: "",
  income_amt: "",
  annual_household_income: "",
  male_members: "",
  earning_members: "",
  able_bodied_members: "",
  electricity_consumption: "",
  
  rural_urban_status: "",
  land_owning: "",
  cultivable_land: "",
  wet_land_area: "",
  dry_land_area: "",
  kuccha_one_room: "",
  
  govt_school_612: "",
  highest_education: "",
  vocational_training: "",
  iti_graduate: "",
  pursuing_undergrad: "",
  tamil_status: "",
  
  default_status: "",
  bank_account: "",
  occupations: [],
  occupation_sector: "",
  unorganised_sector: "",
  swp_status: "",
}


const FianceAgeQuestion = () => {
  const { values: { marital_status } } = useFormikContext<FormValues>()
  if (marital_status === "engaged") {
    return (
      <>
        <label className="formik-label" htmlFor="">What is your fiancé&apos;s age?</label>
        <Field className="formik-input" type="number" min={1} name="fiance_age" />
      </>
    )
  }
}
const ChildrenQuestion = () => {
  const { values: { children } } = useFormikContext<FormValues>()
  if (typeof children === "number" && children > 0) {
    const numberNames = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"]
    return (
      <>
        {[...Array(children)].map((v,i) => (
          <div className="pl-[24px] flex flex-col" key={`child_${i}`}>
            <label className="formik-label">What is your {numberNames[i]} child&apos;s age and gender?</label>
            <Field className="formik-input mb-[4px]" type="number" min={0} max={120} name={`child_age_${i+1}`} />
            <div className="flex flex-row gap-x-[12px]">
              <label className="formik-radio-group">Male
                <Field className="formik-radio" type="radio" name={`child_gender_${i+1}`} value="male" />
                <span className="formik-radio-button"></span>
              </label>
              <label className="formik-radio-group">Female
                <Field className="formik-radio" type="radio" name={`child_gender_${i+1}`} value="female" />
                <span className="formik-radio-button"></span>
              </label>
              <label className="formik-radio-group">Transgender
                <Field className="formik-radio" type="radio" name={`child_gender_${i+1}`} value="transgender" />
                <span className="formik-radio-button"></span>
              </label>
            </div>
          </div>
        ))}
      </>
    )
  }
}
const PregnancyAgeQuestion = () => {
  const { values: { gender } } = useFormikContext<FormValues>()
  if (gender === "female") {
    return (
      <>
        <label className="formik-label" htmlFor="">Are you currently pregnant?</label>
        <div className="flex flex-row gap-x-[12px]">
          <label className="formik-radio-group">Yes
            <Field className="formik-radio" type="radio" name="pregnant" value="yes" />
            <span className="formik-radio-button"></span>
          </label>
          <label className="formik-radio-group">No
            <Field className="formik-radio" type="radio" name="pregnant" value="no" />
            <span className="formik-radio-button"></span>
          </label>
        </div>
      </>
    )
  }
}
const Govt612Question = () => {
  const { values: { gender, highest_education } } = useFormikContext<FormValues>()
  if (gender === "female" && (highest_education === "class_12" || highest_education === "undergraduate" || highest_education === "postgraduate" || highest_education === "diploma")) {
    return (
      <>
        <label className="formik-label" htmlFor="">Did you study in a Tamil Nadu government school from classes 6-12?</label>
        <div className="flex flex-row gap-x-[12px]">
          <label className="formik-radio-group">Yes
            <Field className="formik-radio" type="radio" name="govt_school_612" value="yes" />
            <span className="formik-radio-button"></span>
          </label>
          <label className="formik-radio-group">No
            <Field className="formik-radio" type="radio" name="govt_school_612" value="no" />
            <span className="formik-radio-button"></span>
          </label>
        </div>
      </>
    )
  }
}
const PursuingUndergradQuestion = () => {
  const { values: { gender, govt_school_612 } } = useFormikContext<FormValues>()
  if (gender === "female" && govt_school_612 === "yes") {
    return (
      <>
        <label className="formik-label" htmlFor="">Are you currently pursuing an undergraduate program?</label>
        <div className="flex flex-row gap-x-[12px]">
          <label className="formik-radio-group">Yes
            <Field className="formik-radio" type="radio" name="pursuing_undergrad" value="yes" />
            <span className="formik-radio-button"></span>
          </label>
          <label className="formik-radio-group">No
            <Field className="formik-radio" type="radio" name="pursuing_undergrad" value="no" />
            <span className="formik-radio-button"></span>
          </label>
        </div>
      </>
    )
  }
}
const ITIQuestion = () => {
  const { values: { highest_education } } = useFormikContext<FormValues>()
  if (highest_education === "undergraduate" || highest_education === "postgraduate" || highest_education === "diploma") {
    return (
      <>
        <label className="formik-label" htmlFor="">Are you an ITI (Industrial Training Institutes) graduate?</label>
        <div className="flex flex-row gap-x-[12px]">
          <label className="formik-radio-group">Yes
            <Field className="formik-radio" type="radio" name="iti_graduate" value="yes" />
            <span className="formik-radio-button"></span>
          </label>
          <label className="formik-radio-group">No
            <Field className="formik-radio" type="radio" name="iti_graduate" value="no" />
            <span className="formik-radio-button"></span>
          </label>
        </div>
      </>
    )
  }
}
const TamilStatusQuestion = () => {
  const { values: { highest_education } } = useFormikContext<FormValues>()
  if (highest_education === "undergraduate" || highest_education === "postgraduate") {
    return (
      <>
        <label className="formik-label" htmlFor="">Do you have a professional fluency in Tamil?</label>
        <div className="flex flex-row gap-x-[12px]">
          <label className="formik-radio-group">Yes
            <Field className="formik-radio" type="radio" name="tamil_status" value="yes" />
            <span className="formik-radio-button"></span>
          </label>
          <label className="formik-radio-group">No
            <Field className="formik-radio" type="radio" name="tamil_status" value="no" />
            <span className="formik-radio-button"></span>
          </label>
        </div>
      </>
    )
  }
}
const KucchaHouseQuestion = () => {
  const { values: { rural_urban_status } } = useFormikContext<FormValues>()
  if (rural_urban_status === "rural") {
    return (
      <>
        <label className="formik-label" htmlFor="">Do you live in a kuccha one-room house?</label>
        <div className="flex flex-row gap-x-[12px]">
          <label className="formik-radio-group">Yes
            <Field className="formik-radio" type="radio" name="kuccha_one_room" value="yes" />
            <span className="formik-radio-button"></span>
          </label>
          <label className="formik-radio-group">No
            <Field className="formik-radio" type="radio" name="kuccha_one_room" value="no" />
            <span className="formik-radio-button"></span>
          </label>
        </div>
      </>
    )
  }
}
const LandQuestions = () => {
  const { values: { land_owning } } = useFormikContext<FormValues>()
  if (land_owning === "yes") {
    return (
      <>
        <label className="formik-label" htmlFor="">Do you own any cultivable land?</label>
        <div className="flex flex-row gap-x-[12px]">
          <label className="formik-radio-group">Yes
            <Field className="formik-radio" type="radio" name="cultivate_land" value="yes" />
            <span className="formik-radio-button"></span>
          </label>
          <label className="formik-radio-group">No
            <Field className="formik-radio" type="radio" name="cultivate_land" value="no" />
            <span className="formik-radio-button"></span>
          </label>
        </div>
        
        <label className="formik-label" htmlFor="">How many acres of wet land do you own?</label>
        <Field className="formik-input" type="number" min={0} name="wet_land_area" />
        
        <label className="formik-label" htmlFor="">How many acres of dry land do you own?</label>
        <Field className="formik-input" type="number" min={0} name="dry_land_area" />
      </>
    )
  }
}

const stagesCheckIconClasses = {
  normal: "fa-regular fa-circle-check text-gray-400 text-4xl",
  selected: "fa-regular fa-circle-check text-primary text-4xl",
  completed: "fa-solid fa-circle-check text-green-500 text-4xl",
}

const stagesTextClasses = {
  normal: "text-gray-400 hidden sm:block",
  selected: "text-primary font-semibold hidden sm:block",
  completed: "text-black hidden sm:block",
}

const FormStageBasic = ({visible}: {visible: boolean}) => {
  return (
    <div className={`${!visible ? "hidden" : ""} flex flex-col -mt-[24px]`}>
      <label className="formik-label" htmlFor="age">What is your age?</label>
      <Field className="formik-input" type="number" min={1} max={120} name="age" />

      <label className="formik-label" htmlFor="gender">What is your gender?</label>
      <div className="flex flex-row gap-x-[12px]">
        <label className="formik-radio-group">Male
          <Field className="formik-radio" type="radio" name="gender" value="male" />
          <span className="formik-radio-button"></span>
        </label>
        <label className="formik-radio-group">Female
          <Field className="formik-radio" type="radio" name="gender" value="female" />
          <span className="formik-radio-button"></span>
        </label>
        <label className="formik-radio-group">Transgender
          <Field className="formik-radio" type="radio" name="gender" value="transgender" />
          <span className="formik-radio-button"></span>
        </label>
      </div>
      
      <label className="formik-label" htmlFor="reservation">Do you belong to any reservation?</label>
      <Field className="formik-input" component="select" name="reservation">
        <option value="">None</option>
        <option value="sc">Scheduled Caste</option>
        <option value="st">Scheduled Tribe</option>
        <option value="obc">Other Backward Classes</option>
      </Field>
      
      <label className="formik-label" htmlFor="ex_serviceman">Are you an ex-serviceman?</label>
      <div className="flex flex-row gap-x-[12px]">
        <label className="formik-radio-group">Yes
          <Field className="formik-radio" type="radio" name="ex_serviceman" value="yes" />
          <span className="formik-radio-button"></span>
        </label>
        <label className="formik-radio-group">No
          <Field className="formik-radio" type="radio" name="ex_serviceman" value="no" />
          <span className="formik-radio-button"></span>
        </label>
      </div>

      <label className="formik-label" htmlFor="disabled">Are you differently-abled?</label>
      <div className="flex flex-row gap-x-[12px]">
        <label className="formik-radio-group">Yes
          <Field className="formik-radio" type="radio" name="disabled" value="yes" />
          <span className="formik-radio-button"></span>
        </label>
        <label className="formik-radio-group">No
          <Field className="formik-radio" type="radio" name="disabled" value="no" />
          <span className="formik-radio-button"></span>
        </label>
      </div>
      
      <label className="formik-label" htmlFor="marital_status">What is your marital status?</label>
      <Field className="formik-input" component="select" name="marital_status">
        <option value="single">Single</option>
        <option value="engaged">Engaged</option>
        <option value="married">Married</option>
        <option value="divorced">Divorced</option>
      </Field>
      
      <FianceAgeQuestion />
      
      <label className="formik-label" htmlFor="children">How many children do you have?</label>
      <Field className="formik-input" type="number" min={0} max={9} name="children" />
      
      <ChildrenQuestion />
      
      <PregnancyAgeQuestion />
    </div>
  )
}
const FormStageEducational = ({visible}: {visible: boolean}) => {
  return (
    <div className={`${!visible ? "hidden" : ""} flex flex-col -mt-[24px]`}>
      <label className="formik-label" htmlFor="">What is your highest education level?</label>
      <Field className="formik-input" component="select" name="highest_education">
        <option value="below_class_8">Below Class 8</option>
        <option value="class_8">Class 8th Pass</option>
        <option value="class_10">Class 10th Pass</option>
        <option value="class_12">Class 12th Pass</option>
        <option value="undergraduate">Undergraduate</option>
        <option value="postgraduate">Postgraduate</option>
        <option value="diploma">Diploma</option>
      </Field>

      <Govt612Question />

      <PursuingUndergradQuestion />
      
      <ITIQuestion />
      
      <label className="formik-label" htmlFor="">Do you have vocational training?</label>
      <div className="flex flex-row gap-x-[12px]">
        <label className="formik-radio-group">Yes
          <Field className="formik-radio" type="radio" name="vocational_training" value="yes" />
          <span className="formik-radio-button"></span>
        </label>
        <label className="formik-radio-group">No
          <Field className="formik-radio" type="radio" name="vocational_training" value="no" />
          <span className="formik-radio-button"></span>
        </label>
      </div>
      
      <TamilStatusQuestion />
    </div>
  )
}
const FormStageFinancial = ({visible}: {visible: boolean}) => {
  return (
    <div className={`${!visible ? "hidden" : ""} flex flex-col -mt-[24px]`}>
      <label className="formik-label" htmlFor="income">What is your income?</label>
      <Field className="formik-input" type="number" min={0} name="income_amt" />
      <div className="flex flex-row gap-x-[12px]">
        <label className="formik-radio-group">Daily
          <Field className="formik-radio" type="radio" name="income_freq" value="daily" />
          <span className="formik-radio-button"></span>
        </label>
        <label className="formik-radio-group">Monthly
          <Field className="formik-radio" type="radio" name="income_freq" value="monthly" />
          <span className="formik-radio-button"></span>
        </label>
        <label className="formik-radio-group">Annually
          <Field className="formik-radio" type="radio" name="income_freq" value="annually" />
          <span className="formik-radio-button"></span>
        </label>
      </div>
      <label className="formik-label" htmlFor="">What is your annual household income?</label>
      <Field className="formik-input" type="number" min={0} name="annual_household_income" />
      
      <label className="formik-label" htmlFor="">How many male members are there in you family?</label>
      <Field className="formik-input" type="number" min={0} name="male_members" />
      
      <label className="formik-label" htmlFor="">How many earning members are there in your family?</label>
      <Field className="formik-input" type="number" min={0} name="earning_members" />
      
      <label className="formik-label" htmlFor="">How many able-bodied members are there in your family?</label>
      <Field className="formik-input" type="number" min={0} name="able_bodied_members" />
      
      <label className="formik-label" htmlFor="">How many units of electricity has your household consumed?</label>
      <Field className="formik-input" type="number" min={0} name="electricity_consumption" />
    </div>
  )
}
const FormStageLand = ({visible}: {visible: boolean}) => {
  return (
    <div className={`${!visible ? "hidden" : ""} flex flex-col -mt-[24px]`}>
      <label className="formik-label" htmlFor="">Do you live in a rural or urban area?</label>
      <div className="flex flex-row gap-x-[12px]">
        <label className="formik-radio-group">Rural
          <Field className="formik-radio" type="radio" name="rural_urban_status" value="rural" />
          <span className="formik-radio-button"></span>
        </label>
        <label className="formik-radio-group">Urban
          <Field className="formik-radio" type="radio" name="rural_urban_status" value="urban" />
          <span className="formik-radio-button"></span>
        </label>
      </div>
      
      <KucchaHouseQuestion />
      
      <label className="formik-label" htmlFor="">Do you own any land?</label>
      <div className="flex flex-row gap-x-[12px]">
        <label className="formik-radio-group">Yes
          <Field className="formik-radio" type="radio" name="land_owning" value="yes" />
          <span className="formik-radio-button"></span>
        </label>
        <label className="formik-radio-group">No
          <Field className="formik-radio" type="radio" name="land_owning" value="no" />
          <span className="formik-radio-button"></span>
        </label>
      </div>
      
      <LandQuestions />
    </div>
  )
}
const FormStageProfessional = ({visible}: {visible: boolean}) => {
  return (
    <div className={`${!visible ? "hidden" : ""} flex flex-col -mt-[24px]`}>
      <label className="formik-label" htmlFor="">Are you availing any social welfare program?</label>
      <div className="flex flex-row gap-x-[12px]">
        <label className="formik-radio-group">Yes
          <Field className="formik-radio" type="radio" name="swp_status" value="yes" />
          <span className="formik-radio-button"></span>
        </label>
        <label className="formik-radio-group">No
          <Field className="formik-radio" type="radio" name="swp_status" value="no" />
          <span className="formik-radio-button"></span>
        </label>
      </div>

      <label className="formik-label" htmlFor="bank_account">Do you have a bank account?</label>
      <div className="flex flex-row gap-x-[12px]">
        <label className="formik-radio-group">Yes
          <Field className="formik-radio" type="radio" name="bank_account" value="yes" />
          <span className="formik-radio-button"></span>
        </label>
        <label className="formik-radio-group">No
          <Field className="formik-radio" type="radio" name="bank_account" value="no" />
          <span className="formik-radio-button"></span>
        </label>
      </div>
      
      <label className="formik-label" htmlFor="default_status">Have you defaulted on any bank loan?</label>
      <div className="flex flex-row gap-x-[12px]">
        <label className="formik-radio-group">Yes
          <Field className="formik-radio" type="radio" name="default_status" value="yes" />
          <span className="formik-radio-button"></span>
        </label>
        <label className="formik-radio-group">No
          <Field className="formik-radio" type="radio" name="default_status" value="no" />
          <span className="formik-radio-button"></span>
        </label>
      </div>
      
      <label className="formik-label" htmlFor="">Do you work in the unorganised sector?</label>
      <div className="flex flex-row gap-x-[12px]">
        <label className="formik-radio-group">Yes
          <Field className="formik-radio" type="radio" name="unorganised" value="yes" />
          <span className="formik-radio-button"></span>
        </label>
        <label className="formik-radio-group">No
          <Field className="formik-radio" type="radio" name="unorganised" value="no" />
          <span className="formik-radio-button"></span>
        </label>
      </div>
      
      <label className="formik-label" htmlFor="">Do you work in any of the following occupation sectors?</label>
      <Field className="formik-input" component="select" name="occupation_sector">
        <option value="agriculture">Agriculture</option>
        <option value="food_production_industry">Food-production Industry</option>
        <option value="service_based_companies">Service-based Companies</option>
      </Field>
      
      <label className="formik-label" htmlFor="occupations">Which of the following occupations apply to you?</label>
      <div className="flex flex-row flex-wrap max-w-2xl w-full">
        <div className="flex-1 flex flex-col">
          <label className="formik-checkbox-group">Assembler
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="assembler" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Assistant
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="assistant" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Attendant
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="attendant" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Beggar
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="beggar" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Conductor
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="conductor" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Construction Worker
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="construction_worker" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Coolie
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="coolie" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Delivery Assistant
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="delivery_assistant" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Domestic Worker
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="domestic_worker" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Driver
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="driver" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Electricians
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="electricians" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Gardeners
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="gardeners" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Helper
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="helper" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Labourer
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="labourer" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Mason
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="mason" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Mechanic
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="mechanic" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Painter
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="painter" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Peon
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="peon" />
            <span className="formik-checkbox-button"></span>
          </label>
        </div>
        <div className="flex-1 flex flex-col">
          <label className="formik-checkbox-group">Plumber
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="plumber" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Ragpickers
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="ragpicker" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Repair Worker
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="repair_worker" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Rickshaw Driver
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="rickshaw_driver" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Sanitation Worker
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="sanitation_worker" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Security Guard
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="security_guard" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Shopkeeper
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="shopkeeper" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Sweepers
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="sweepers" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Transport Worker
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="transport_worker" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Waiter
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="waiter" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Washerman
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="washerman" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Welder
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="welder" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Handicraftsman
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="handicraftsman" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Restoration and Repair Shop Owner
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="restoration_and_repair_shop_owner" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Self Employed Entrepreneur
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="self_employed_entrepreneur" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Small Scale Manufacturer
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="small_scale_manufacturer" />
            <span className="formik-checkbox-button"></span>
          </label>
          <label className="formik-checkbox-group">Truck Owners
            <Field className="formik-checkbox" type="checkbox" name="occupations" value="truck_owner" />
            <span className="formik-checkbox-button"></span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const [stage, setStage] = useState(1)

  return (
    <>
      <header className="flex flex-col w-full bg-hero-gradient text-primary -mt-[60px]">
        <div className="px-[18px] lg:px-0 mt-[136px] mb-[24px] max-w-5xl mx-auto w-full">
          <h1 className="font-bold text-4xl">Eligibility Checker</h1>
          <p className="text-md mt-[12px] leading-tight">Check your eligibilty for various national and Tamil Nadu state policies under the Pradhan Mantri Jan Dhan Yojna network</p>
          <p className="text-md mt-[4px] leading-tight"><strong>Important Note:</strong> This form assumes you are a citizen of India and have a domicile certificate for the state of Tamil Nadu.</p>
        </div>
      </header>
      
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
            setStage(6)
          // }, 400)
          setTimeout(() => {
            const result = matchSchemes(values)
            router.push("/results/?" + createQueryString("schemes", JSON.stringify(result)))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <div className="mx-[18px] lg:mx-auto mt-[36px] min-h-[420px] flex flex-col sm:flex-row lg:w-full max-w-5xl shadow-xl rounded-lg overflow-hidden">
            
            
            <div className="flex flex-row sm:flex-col sm:flex-shrink-0 w-full sm:w-[320px] p-[18px] sm:p-[24px] bg-primary/10 sm:min-h-full gap-x-[12px] sm:gap-x-0 sm:gap-y-[24px] text-lg justify-center sm:justify-start">
              <div className={`flex flex-row items-center gap-x-[24px] ${stage >  1 ? "hover:cursor-pointer" : "hover:cursor-default"}`} onClick={() => { if (stage > 1) { setStage(1) } }}>
                <i className={stage === 1 ? stagesCheckIconClasses.selected : stagesCheckIconClasses.completed}></i>
                <span className={stage === 1 ? stagesTextClasses.selected : stagesTextClasses.completed}>Basic Details</span>
              </div>
              <div className={`flex flex-row items-center gap-x-[24px] ${stage >  2 ? "hover:cursor-pointer" : "hover:cursor-default"}`} onClick={() => { if (stage > 2) { setStage(2) } }}>
                <i className={stage === 2 ? stagesCheckIconClasses.selected : stage < 2 ? stagesCheckIconClasses.normal : stagesCheckIconClasses.completed}></i>
                <span className={stage === 2 ? stagesTextClasses.selected : stage < 2 ? stagesTextClasses.normal : stagesTextClasses.completed}>Financial Details</span>
              </div>
              <div className={`flex flex-row items-center gap-x-[24px] ${stage >  3 ? "hover:cursor-pointer" : "hover:cursor-default"}`} onClick={() => { if (stage > 3) { setStage(3) } }}>
                <i className={stage === 3 ? stagesCheckIconClasses.selected : stage < 3 ? stagesCheckIconClasses.normal : stagesCheckIconClasses.completed}></i>
                <span className={stage === 3 ? stagesTextClasses.selected : stage < 3 ? stagesTextClasses.normal : stagesTextClasses.completed}>Land Details</span>
              </div>
              <div className={`flex flex-row items-center gap-x-[24px] ${stage >  4 ? "hover:cursor-pointer" : "hover:cursor-default"}`} onClick={() => { if (stage > 4) { setStage(4) } }}>
                <i className={stage === 4 ? stagesCheckIconClasses.selected : stage < 4 ? stagesCheckIconClasses.normal : stagesCheckIconClasses.completed}></i>
                <span className={stage === 4 ? stagesTextClasses.selected : stage < 4 ? stagesTextClasses.normal : stagesTextClasses.completed}>Education Details</span>
              </div>
              <div className={`flex flex-row items-center gap-x-[24px]`}>
                <i className={stage === 5 ? stagesCheckIconClasses.selected : stage < 5 ? stagesCheckIconClasses.normal : stagesCheckIconClasses.completed}></i>
                <span className={stage === 5 ? stagesTextClasses.selected : stage < 5 ? stagesTextClasses.normal : stagesTextClasses.completed}>Professional Details</span>
              </div>
            </div>




            <Form className="flex flex-col justify-between p-[18px] sm:p-[24px] flex-grow">

              <FormStageBasic visible={stage === 1} />
              <FormStageEducational visible={stage === 2} />
              <FormStageLand visible={stage === 3} />
              <FormStageFinancial visible={stage === 4} />
              <FormStageProfessional visible={stage === 5 || stage === 6} />

              <div className="flex flex-row justify-end mt-[12px]">
                <button type="submit" className="rounded-md bg-primary/90 text-white/95 font-semibold px-[24px] py-[6px] hover:bg-primary transition-colors ease-out shadow"
                  onClick={(e) => {
                    if (stage < 5) { 
                      e.preventDefault()
                      setStage(stage + 1) 
                    }
                  }}
                >
                  {stage < 5 ? (<>
                    Next <i className="ml-[4px] fa-solid fa-arrow-right"></i>
                  </>) : (<>
                    Submit <i className="ml-[4px] fa-solid fa-check"></i>
                  </>)}
                </button>
              </div>

            </Form>
          </div>
        )}
      </Formik>
    </>
  )
}
