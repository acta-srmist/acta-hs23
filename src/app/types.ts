export interface FormValues {
  age: string | number
  gender: string
  reservation: string
  disabled: string
  ex_serviceman: string
  marital_status: string
  fiance_age: string | number
  children: string | number,
  child_age_1?: string | number
  child_gender_1?: number
  child_age_2?: string | number
  child_gender_2?: number
  child_age_3?: string | number
  child_gender_3?: number
  child_age_4?: string | number
  child_gender_4?: number
  child_age_5?: string | number
  child_gender_5?: number
  child_age_6?: string | number
  child_gender_6?: number
  child_age_7?: string | number
  child_gender_7?: number
  child_age_8?: string | number
  child_gender_8?: number
  child_age_9?: string | number
  child_gender_9?: number
  pregnant: string
  
  income_freq: "daily" | "monthly" | "annually" | ""
  income_amt: string | number
  annual_household_income: string | number
  male_members: string | number
  earning_members: string | number
  able_bodied_members: string | number
  electricity_consumption: string | number
  
  rural_urban_status: "rural" | "urban" | ""
  land_owning: string
  cultivable_land: string
  wet_land_area: string | number
  dry_land_area: string | number
  kuccha_one_room: string
  
  govt_school_612: string
  highest_education: string
  vocational_training: string
  iti_graduate: string
  pursuing_undergrad: string
  tamil_status: string
  
  default_status: string
  bank_account: string
  occupations: string[]
  occupation_sector: string
  unorganised_sector: string
  swp_status: string
}
