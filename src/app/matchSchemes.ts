import SCHEMES from "@/constants/SCHEMES"
import { FormValues } from "./types"

const booleanConverter = (s: string) => {
	if (s === "yes") { return true }
	if (s === "no") { return false }
	return undefined
}

const matchSchemes = (values: FormValues) => {
  const NS = SCHEMES.national
  const TS = SCHEMES.tamilnadu
  const result = {
		national: [] as string[],
		tamilnadu: [] as string[]
	}

  const { 
    age: formik_age,
    gender,
    reservation,
    disabled: formik_disabled,
    ex_serviceman: formik_ex_serviceman,
    driving_license: formik_driving_license,
    marital_status,
    fiance_age: formik_fiance_age,
    children: formik_children,
    pregnant: formik_pregnant,
    income_freq,
		income_amt: formik_income_amt,
    annual_household_income: formik_annual_household_income,
    male_members: formik_male_members,
    earning_members: formik_earning_members,
    able_bodied_members: formik_able_bodied_members,
    electricity_consumption: formik_electricity_consumption,
    rural_urban_status,
    land_owning: formik_land_owning,
		cultivable_land: formik_cultivable_land,
		kuccha_one_room: formik_kuccha_one_room,
		wet_land_area: formik_wet_land_area,
		dry_land_area: formik_dry_land_area,
    govt_school_612: formik_govt_school_612,
    highest_education,
    vocational_training: formik_vocational_training,
    iti_graduate: formik_iti_graduate,
    pursuing_undergrad: formik_pursuing_undergrad,
    tamil_status: formik_tamil_status,
    default_status: formik_default_status,
    bank_account: formik_bank_account,
    occupations,
    occupation_sector,
    unorganised_sector: formik_unorganised_sector,
    swp_status: formik_swp_status,
  } = values

  const disabled = booleanConverter(formik_disabled)
  const ex_serviceman = booleanConverter(formik_ex_serviceman)
  const driving_license = booleanConverter(formik_driving_license)
  const pregnant = booleanConverter(formik_pregnant)
  const land_owning = booleanConverter(formik_land_owning)
  const cultivable_land = booleanConverter(formik_cultivable_land)
  const kuccha_one_room = booleanConverter(formik_kuccha_one_room)
  const govt_school_612 = booleanConverter(formik_govt_school_612)
  const vocational_training = booleanConverter(formik_vocational_training)
  const iti_graduate = booleanConverter(formik_iti_graduate)
  const pursuing_undergrad = booleanConverter(formik_pursuing_undergrad)
  const tamil_status = booleanConverter(formik_tamil_status)
  const default_status = booleanConverter(formik_default_status)
  const bank_account = booleanConverter(formik_bank_account)
  const unorganised_sector = booleanConverter(formik_unorganised_sector)
  const swp_status = booleanConverter(formik_swp_status)

	const age = formik_age as number
	const male_members = formik_male_members as number
	const earning_members = formik_earning_members as number
	const able_bodied_members = formik_able_bodied_members as number
	const income_amt = formik_income_amt as number
	const annual_household_income = formik_annual_household_income as number
	const electricity_consumption = formik_electricity_consumption as number
	const wet_land_area = formik_wet_land_area as number
	const dry_land_area = formik_dry_land_area as number
	const fiance_age = formik_fiance_age as number

	const income = {
		freq: income_freq,
		amt: income_amt as number
	}

	const annual_income = income.freq === "annually" ? income.amt : income.freq === "monthly" ? income.amt * 12 : income.amt * 365

	const children: { age: number, gender: string }[] = []
	if (typeof formik_children === "number" && formik_children > 1) {
		for (var i = 1; i <= 9; i++) {
			if (`child_age_${i}` in Object.keys(values)) {
				children[i-1] = {
					age: values[`child_age_${i}`],
					gender: values[`child_gender_${i}`]
				}
			}
		}
	}

	if (NS.NASUIS.eligibility_func(reservation, age, gender, default_status)) { result.national.push("NASUIS") }
	if (NS.NAPMVVY.eligibility_func(age)) { result.national.push("NAPMVVY") }
	if (NS.NAMSSS.eligibility_func(gender, age)) { result.national.push("NAMSSS") }
	if (NS.NAPMKSNY.eligibility_func(cultivable_land)) { result.national.push("NAPMKSNY") }
	if (NS.NAPMKUSEU.eligibility_func(marital_status, children)) { result.national.push("NAPMKUSEU") }
	if (NS.NAABYHS.eligibility_func(rural_urban_status, able_bodied_members, earning_members, male_members, reservation, occupations, land_owning, kuccha_one_room)) { result.national.push("NAABYHS") }
	if (NS.NAPMMVY.eligibility_func(pregnant)) { result.national.push("NAPMMVY") }
	if (NS.NAPMFBY.eligibility_func(cultivable_land, earning_members)) { result.national.push("NAPMFBY") }
	if (NS.NASSKY.eligibility_func(gender, age)) { result.national.push("NASSKY") }
	if (NS.NADBT.eligibility_func(income)) { result.national.push("NADBT") }
	if (NS.NAPMSBY.eligibility_func(age, bank_account)) { result.national.push("NAPMSBY") }
	if (NS.NAAPY.eligibility_func(age, unorganised_sector, swp_status)) { result.national.push("NAAPY") }
	if (NS.NAPMMY.eligibility_func(age, occupations, occupation_sector)) { result.national.push("NAPMMY") }
	if (NS.NAPMJJBY.eligibility_func(age)) { result.national.push("NAPMJJBY") }

	if (TS.TNAU.eligibility_func(annual_household_income)) { result.tamilnadu.push("TNAU") }
	if (TS.TNAKT.eligibility_func(annual_household_income)) { result.tamilnadu.push("TNAKT") }
	if (TS.TNATWSWW.eligibility_func(gender, annual_household_income, highest_education, driving_license)) { result.tamilnadu.push("TNATWSWW") }
	if (TS.TNMRAHEAS.eligibility_func(gender, govt_school_612, pursuing_undergrad)) { result.tamilnadu.push("TNMRAHEAS") }
	if (TS.TNUAS.eligibility_func(age, annual_household_income, reservation, disabled)) { result.tamilnadu.push("TNUAS") }
	if (TS.TNMAS.eligibility_func(age, gender, fiance_age)) { result.tamilnadu.push("TNMAS") }
	if (TS.TNCMCHIS.eligibility_func(annual_income)) { result.tamilnadu.push("TNCMCHIS") }
	if (TS.TNMUTS.eligibility_func(age, gender, annual_income, wet_land_area, dry_land_area, electricity_consumption)) { result.tamilnadu.push("TNMUTS") }
	if (TS.TNZTBTSW.eligibility_func(gender)) { result.tamilnadu.push("TNZTBTSW") }
	if (TS.TNUYEGP.eligibility_func(highest_education, annual_income, age, gender)) { result.tamilnadu.push("TNUYEGP") }
	if (TS.TNNEEDS.eligibility_func(gender, reservation, age, highest_education, ex_serviceman, disabled, vocational_training, iti_graduate)) { result.tamilnadu.push("TNNEEDS") }
	if (TS.TNCMFP.eligibility_func(age, highest_education, tamil_status)) { result.tamilnadu.push("TNCMFP") }

	return result

}

export default matchSchemes
