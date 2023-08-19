// age
// gender
// reservation
// disabled
// ex_serviceman
// driving_license
// married
// fiance_age
// children_ages
// pregnant
// 
// income
// - freq
// - amt
// [NF] annual_income
// annual_household_income
// male_members
// earning_members
// able_bodied_members
// electricity_consumption
// 
// rural_urban_status
// land_owning
// cultivable_land
// wet_land_area
// dry_land_area
// kuccha_one_room
// 
// govt_school_612
// highest_education
// vocational_training
// iti_graduate
// pursuing_undergrad
// tamil_status
// 
// default_status
// bank_account
// occupations
// occupation_sector
// unorganised_sector
// swp_status
// 
// 
// Assembler
// Assistant
// Attendant
// Beggar
// Conductor
// Construction Worker
// Coolie
// Delivery Assistant
// Domestic Worker
// Driver
// Electricians
// Gardeners
// Helper
// Labourer
// Mason
// Mechanic
// Painter
// Peon
// Plumber
// Ragpickers
// Repair Worker
// Rickshaw Driver
// Sanitation Worker
// Security Guard
// Shopkeeper
// Sweepers
// Transport Worker
// Waiter
// Washerman
// Welder
// 
// Handicraftsman
// Restoration and Repair Shop Owner
// Self Employed Entrepreneur
// Small Scale Manufacturer
// Truck Owners
// 
// Agriculture Sector
// Food Production Industry
// Service-based Companies



const SCHEMES = {
	national: {
		NASUIS: {
			name: {
				en: "Stand Up India Scheme",
				hi: "",
				ta: "",
			},
			helplines: ["1800 180 1111"],
			website: "",
			eligibility_func: (reservation: string, age: number, gender: string, default_status?: boolean) => {
				if ((reservation === "sc" || reservation === "st" || gender === "female") && age && age >= 18 && !default_status) {
					return true
				}
				return false
			}
		},
		NAPMVVY: {
			name: {
				en: "Pradhan Mantri Vaya Vandana Yojana",
				hi: "",
				ta: "",
			},
			helplines: ["022 6781 9281", "1800 227 717"],
			website: "",
			eligibility_func: (age: number) => {
				if (age > 60) {
					return true
				}
				return false
			}
		},
		NAMSSS: {
			name: {
				en: "Mahila Samman Savings Scheme",
				hi: "",
				ta: "",
			},
			helplines: ["1800 103 1906"],
			website: "",
			eligibility_func: (gender: string, age: number) => {
				if (gender === "female" && age < 18) {
					return true
				}
				return false
			}
		},
		NAPMKSNY: {
			name: {
				en: "Pradhan Mantri Kissan Samman Nidhi Yojana",
				hi: "",
				ta: "",
			},
			helplines: ["011 2430 0606"],
			website: "https://pmkisan.gov.in",
			eligibility_func: (cultivable_land?: boolean) => {
				if (cultivable_land) {
					return true
				}
				return false
			}
		},
		NAPMKUSEU: {
			name: {
				en: "Pradhan Mantri Kissan Urjan Suraksha Eavm Utthan Mahabhiyan",
				hi: "",
				ta: "",
			},
			helplines: ["011 2436 5666"],
			website: "https://pmkusum.mnre.gov.in/landing.html",
			eligibility_func: (marital_status: string, children: { age: number, gender: string }[]) => {
				if (marital_status === "married" && children.every(x => (x.age < 18))) {
					return true
				}
				return false
			}
		},
		NAABYHS: {
			name: {
				en: "Ayushman Bharat Yojana Health Scheme",
				hi: "",
				ta: "",
			},
			helplines: [],
			website: "https://nha.gov.in/PM-JAY",
			eligibility_func: (rural_urban_status: string, able_bodied_members: number, earning_members: number, male_members: number, reservation: string, occupations: string[], land_owning?: boolean, kuccha_one_room?: boolean) => {
				if (rural_urban_status === "rural") {
					if (earning_members === 0 || male_members === 0 || able_bodied_members === 0 || reservation === "sc" || reservation === "st" || !land_owning || kuccha_one_room) {
						return true 
					}
				} else if (rural_urban_status === "urban") {
					const eligible_occupations = [
						"assembler",
						"assistant",
						"attendant",
						"beggar",
						"conductor",
						"construction_worker",
						"coolie",
						"delivery_assistant",
						"domestic_worker",
						"driver",
						"electricians",
						"gardeners",
						"helper",
						"labourer",
						"mason",
						"mechanic",
						"painter",
						"peon",
						"plumber",
						"ragpicker",
						"repair_worker",
						"rickshaw_driver",
						"sanitation_worker",
						"security_guard",
						"shopkeeper",
						"sweepers",
						"transport_worker",
						"waiter",
						"washerman",
						"welder",
					]
					if (eligible_occupations.some(v => occupations.includes(v))) {
						return true
					}
				}	
				return false
			}
		},
		NAPMMVY: {
			name: {
				en: "Pradhan Mantri Matritva Vandana Yojana",
				hi: "",
				ta: "",
			},
			helplines: ["011 2338 2393"],
			website: "https://pmmvy.nic.in",
			eligibility_func: (pregnant?: boolean) => {
				if (pregnant) {
					return true
				}
				return false
			}
		},
		NAPMFBY: {
			name: {
				en: "Pradhan Mantri Fasal Bima Yojana",
				hi: "",
				ta: "",
			},
			helplines: ["1800 200 7710"],
			website: "https://pmfby.gov.in",
			eligibility_func: (cultivable_land?: boolean, earning_members?: number) => {
				if (cultivable_land && earning_members === 1) {
					return true
				}
				return false
			}
		},
		NASSKY: {
			name: {
				en: "Sukanya Samridhi Khata Yojana",
				hi: "सुकन्या समृद्धि खाता योजना",
				ta: "பெண் செழிப்பு திட்டம்"
			},
			helplines: ["1800 266 6868"],
			website: "",
			eligibility_func: (gender: string, age: number) => {
				if (gender === "female" && age < 18) {
					return true
				}
				return false
			}
		},
		NADBT: {
			name: {
				en: "Direct Bank Transfer",
				hi: "",
				ta: "",
			},
			helplines: [""],
			website: "",
			eligibility_func: (income?: { freq: string, amt: number }) => {
				if ((income?.freq === "daily" && income?.amt < 150) || (income?.freq === "monthly" && income?.amt < 1300)) {
					return true
				}
				return false
			}
		},
		NAPMSBY: {
			name: {
				en: "Pradhan Mantri Suraksha Bima Yojana",
				hi: "",
				ta: "",
			},
			helplines: ["011 2336 2129", "011 2336 2782"],
			website: "https://financialservices.gov.in/insurance-divisions/Government-Sponsored-Socially-Oriented-Insurance-Schemes/Pradhan-Mantri-Suraksha-Bima-Yojana(PMSBY)",
			eligibility_func: (age?: number, bank_account?: boolean) => {
				if (age && age >= 18 && age <= 80 && bank_account) {
					return true
				}
				return false
			}
		},
		NAAPY: {
			name: {
				en: "Atal Pension Yojana",
				hi: "",
				ta: "",
			},
			helplines: ["022 2499 3499"],
			website: "https://www.npscra.nsdl.co.in/scheme-details.php",
			eligibility_func: (age: number, unorganised_sector?: boolean, swp_status?: boolean) => {
				if (age <= 40 && age >= 18 && unorganised_sector && swp_status) {
					return true
				}
				return false
			}
		},
		NAPMMY: {
			name: {
				en: "Pradhan Mantri Mudra Yojana",
				hi: "",
				ta: "",
			},
			helplines: ["1800 180 1111"],
			website: "https://www.mudra.org.in",
			eligibility_func: (age: number, occupations: string[], occupation_sector: string) => {
				const eligible_occupations = [
					"handicraftsman",
					"restoration_and_repair_shop_owner",
					"self_employed_entrepreneur",
					"shopkeeper",
					"small_scale_manufacturer",
					"truck_owners"
				]
				const eligible_occupation_sectors = [
					"agriculture_sector",
					"food_production_industry",
					"service_based_companies"
				]
				if (age <= 65 && age >= 18 && (eligible_occupations.some(v => occupations.includes(v)) || eligible_occupation_sectors.includes(occupation_sector))) {
					return true
				}
				return false
			}
		},
		NAPMJJBY: {
			name: {
				en: "Pradhan Mantri Jeevan Jyoti Bima Yojana",
				hi: "",
				ta: "",	
			},
			helplines: ["1800 180 1111"],
			website: "https://financialservices.gov.in/insurance-divisions/Government-Sponsored-Socially-Oriented-Insurance-Schemes/Pradhan-Mantri-Jeevan-Jyoti-Bima-Yojana(PMJJBY)",
			eligibility_func: (age: number) => {
				if (age <= 50 && age >= 18) {
					return true
				}
				return false
			}
		},
	},
	tamilnadu: {
		TNAU: {
			name: {
				en: "Amma Unavagam",
				hi: "",
				ta: ""
			},
			helplines: ["044 2536 9444"],
			website: "",
			eligibility_func: (annual_household_income: number) => {
				if (annual_household_income < 30000) {
					return true
				}
				return false
			}
		},
		TNAKT: {
			name: {
				en: "Amma Kudineer Thittam",
				hi: "",
				ta: ""
			},
			helplines: [""],
			website: "",
			eligibility_func: (annual_household_income: number) => {
				if (annual_household_income < 30000) {
					return true
				}
				return false
			}
		},
		TNATWSWW: {
			name: {
				en: "Amma Two-wheeler Scheme for Working Women",
				hi: "",
				ta: ""
			},
			helplines: ["044 2817 3412"],
			website: "",
			eligibility_func: (gender: string, driving_license: boolean, annual_household_income: number, highest_education: string) => {
				if (gender === "female" && driving_license && annual_household_income < 250000 && highest_education === "class_8") {
					return true
				}
			}
		},
		TNMRAHEAS: {
			name: {
				en: "Moovalur Ramamirtham Ammaiyer Higher Education Assurance Scheme",
				hi: "",
				ta: ""
			},
			helplines: ["91500 56805", "91500 56809"],
			website: "https://penkalvi.tn.gov.in/",
			eligibility_func: (gender: string, govt_school_612: boolean, pursuing_undergrad: boolean) => {
				if (gender === "female" && govt_school_612 && pursuing_undergrad) {
					return true
				}
				return false
			}
		},
		TNUAS: {
			name: {
				en: "Unemployment Assistance Scheme",
				hi: "",
				ta: ""
			},
			helplines: ["044 2250 0900", "044 2250 0911"],
			website: "https://tnvelaivaaippu.gov.in/",
			eligibility_func: (age: number, annual_household_income: number, disabled: boolean, reservation: string) => {
				if ((reservation === "sc" || reservation === "st" || disabled) && age <= 45) {
					return true
				}
				if (annual_household_income <= 72000 && age <= 40) {
					return true
				}
				return false
			}
		},
		TNMAS: {
			name: {
				en: "Marriage Assistance Scheme",
				hi: "",
				ta: ""
			},
			helplines: ["044 2435 1891"],
			website: "https://www.tnsocialwelfare.tn.gov.in/en/specilisationswomen-welfare/marriage-assistance-schemes",
			eligibility_func: (age: number, gender: string, fiance_age: number) => {
				if (gender === "male" && age >= 21 && fiance_age >= 18) {
					return true
				}
				if (gender === "female" && age >= 18 && fiance_age >= 21) {
					return true
				}
				return false
			}
		},
		TNCMCHIS: {
			name: {
				en: "Chief Minister Comprehensive Health Insurance Scheme",
				hi: "",
				ta: ""
			},
			helplines: ["1800 425 3993"],
			website: "https://www.cmchistn.com",
			eligibility_func: (annual_income: number) => {
				if (annual_income < 120000) {
					return true
				}
				return false
			}
		},
		TNMUTS: {
			name: {
				en: "Magalir Urimai Thogai Scheme",
				hi: "",
				ta: ""
			},
			helplines: ["94449 95299", "95501 45357"],
			website: "",
			eligibility_func: (age: number, gender: string, annual_income: number, wet_land_area: number, dry_land_area: number, electricity_consumption: number) => {
				if (age > 18 && gender === "female" && annual_income < 250000 && wet_land_area < 5 && dry_land_area < 10 && electricity_consumption < 3600) {}
			}
		},
		TNZTBTSW: {
			name: {
				en: "Zero Ticket Bus Travel Scheme for Women",
				hi: "महिलाओं के लिए जीरो टिकट बस यात्रा योजना",
				ta: "பெண்களுக்கான தமிழ்நாடு ஜீரோ டிக்கெட் பேருந்து பயணத் திட்டம்"
			},
			helplines: [],
			website: "",
			eligibility_func: (gender: string) => {
				if (gender === "female") {
					return true
				}
				return false
			}
		},
		TNUYEGP: {
			name: {
				en: "Unemployed Youth Employment Generation Programme",
				hi: "बेरोजगार युवा रोजगार सृजन योजना",
				ta: "வேலைவாய்ப்பற்ற இளைஞர் வேலைவாய்ப்பு உருவாக்கத் திட்டம்"
			},
			helplines: [""],
			website: "",
			eligibility_func: (highest_education: string, annual_income: number, age: number, gender: string) => {
				if ((highest_education === "class_8" || highest_education === "class_10" || highest_education === "class_12" || highest_education === "undergraduate" || highest_education === "postgraduate" || highest_education === "diploma") && annual_income < 500000 && age >= 18) {
					if (gender === "male" && age <= 35) {
						return true
					}
					if (gender === "female" && age <= 45) {
						return true
					}
					return false
				}
				return false
			}
		},
		TNNEEDS: {
			name: {
				en: "New Entrepreneur cum Enterprise Development Scheme",
				hi: "",
				ta: ""
			},
			helplines: [],
			website: "https://www.msmetamilnadu.tn.gov.in/needs.php",
			eligibility_func: (gender: string, reservation: string, ex_serviceman: boolean, disabled: boolean, age: number, highest_education: string, vocational_training: boolean, iti_graduate: boolean) => {
				if (age >= 21 && (highest_education === "undergraduate" || highest_education === "postgraduate" || highest_education === "diploma" || iti_graduate || vocational_training)) {
					if ((gender === "female" || gender === "transgender" || reservation === "sc" || reservation === "st" || reservation === "obc" || disabled || ex_serviceman) && age <= 45) {
						return true
					}
					if (age <= 35) {
						return true
					}
					return false
				}
				return false
			}
		},
		TNCMFP: {
			name: {
				en: "Chief Minister Fellowship Programme",
				hi: "",
				ta: ""
			},
			helplines: ["044 2567 1024"],
			website: "https://tn.gov.in/tncmfp/",
			eligibility_func: (age: number, tamil_status: boolean, highest_education: string) => {
				if (age <= 30 && age >= 22 && tamil_status && (highest_education === "undergraduate" || highest_education === "postgraduate")) {
					return true
				}
				return false
			}
		},
	}
}

export default SCHEMES
