const SCHEMES = {
	national: {
		NASUIS: {
			name: {
				en: "Stand Up India Scheme",
				hi: "स्टैंड अप इंडिया योजना",
				ta: "இந்திய திட்டத்தை நிற்கவும்",
			},
			benefits: {
				en: [
					"The objective of the stand up india scheme is to facilitate bank loans between Rs. 10 lakh and 1 Crore to at least one scheduled caste (SC) or scheduled tribe (ST) borrower and at least one women borrower per bank branch for setting up a greenfield enterprise.",
					"The rate of interest would be lowest applicable rate of the bank for that category (rating category) not to exceed (base rate(MCLR) + 3% + Tenor premium)",
					"Loan is repayable in 7 years with a maximum moratorium period of 18 months."
				],
				hi: [
					""
				],
				ta: [
					""
				]
			},
			helplines: ["1800 180 1111"],
			website: "https://www.standupmitra.in/Home/SUISchemes",
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
				hi: "प्रधान मांद्री वेय वंदना योजना",
				ta: "பிரதான் மாண்ட்ரி வேயா வாண்டனா யோஜானா",
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
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
				hi: "महिला सम्मान बचत योजना",
				ta: "மஹிலா சாம்மன் சேமிப்பு திட்டம்",
			},
			benefits: {
				en: [
					"Offers a Rs. 7.5% interest rate on deposits as compared to FD’s offered from majority of banks",
					"It is a 2-Year programme (April 2023-March 2025)",
					"The MSSC certificate will allow you to make partial withdrawals",
					"A maximum of Rs. 2 lakh can be deposited"
				],
				hi: [
					"रुपये की पेशकश करता है. अधिकांश बैंकों द्वारा दी जाने वाली एफडी की तुलना में जमा पर 7.5% ब्याज दर",
					"यह 2 साल का कार्यक्रम है (अप्रैल 2023-मार्च 2025)",
					"एमएसएससी प्रमाणपत्र आपको आंशिक निकासी करने की अनुमति देगा",
					"अधिकतम 2 लाख रुपये जमा किये जा सकते हैं"
				],
				ta: [
					"ரூ. பெரும்பான்மையான வங்கிகளிடமிருந்து வழங்கப்படும் எஃப்.டி உடன் ஒப்பிடும்போது வைப்புத்தொகை மீதான 7.5% வட்டி விகிதம்",
					"இது 2 ஆண்டு திட்டம் (ஏப்ரல் 2023-மார்ச் 2025)",
					"எம்.எஸ்.எஸ்.சி சான்றிதழ் ஓரளவு திரும்பப் பெற உங்களை அனுமதிக்கும் ",
					"அதிகபட்சம் ரூ .2 லக்கை டெபாசிட் செய்யலாம்"
				]
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
				hi: "प्रधानमंत्री किसान सम्मान निधि योजना",
				ta: "பிரதான் மாண்ட்ரி கிசான் சாம்மன் நிதி யோஜ்னா",
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
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
				hi: "प्रधानमंत्री किसान ऊर्जा सुरक्षा एवं उड़ान महपियां",
				ta: "பிரதமர் கிசான் உர்ஜன் சுரக்ஷா எவாம் உதான் மகாபியான்",
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
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
				hi: "आयुष्मान भारत योजना स्वास्थ्य योजना",
				ta: "ஆயுஷ்மேன் பாரத் யோஜானா சுகாதார திட்டம்",
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
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
				hi: "पीएम मातृत्व वंदना योजना",
				ta: "மாட்ரிட்வா வாண்டனா யோஜானா",
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
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
				hi: "पीएम फसल बीमा योजना",
				ta: "அடிப்படை பிமா யோஜானா",
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
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
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
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
				hi: "बैंक में सीधे अंतरण",
				ta: "நேரடி வங்கி பரிமாற்றம்",
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
			},
			helplines: ["011 2374 0714"],
			website: "https://dbtbharat.gov.in/static-page-content/spagecont?id=8",
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
				hi: "प्रधानमंत्री सुरक्षा भीम योजना",
				ta: "பிரதான் மாண்ட்ரி சுராக்ஷா பிமா யோஜானா",
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
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
				hi: "अटल पेंशन योजना",
				ta: "அடல் ஓய்வூதியம் யோஜானா",
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
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
				hi: "प्रधान मुद्रा योजना",
				ta: "பிரதான் மந்திரி முத்ரா யோஜனா",
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
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
				hi: "प्रधान मोंद्री जीवन ज्योति बीमा योजना",
				ta: "பிரதான் மாண்ட்ரி ஜீவன் ஜியோட்டி பிமா யோஜானா",	
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
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
				hi: "अम्मा उनावगम",
				ta: "அம்மா உணவகம்"
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
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
				hi: "अम्मा कुदिनेर थित्तम",
				ta: "அம்மா குடிநீர் திட்டம்"
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
			},
			helplines: [],
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
				hi: "कामकाजी महिलाओं के लिए अम्मा दोपहिया वाहन योजना",
				ta: "பணிபுரியும் பெண்களுக்கான அம்மா இருசக்கர வாகனத் திட்டம்"
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
			},
			helplines: ["044 2817 3412"],
			website: "",
			eligibility_func: (gender: string, annual_household_income: number, highest_education: string) => {
				if (gender === "female" && annual_household_income < 250000 && (highest_education === "class_8" || highest_education === "class_10" || highest_education === "class_12" || highest_education === "undergraduate" || highest_education === "postgraduate" || highest_education === "diploma")) {
					return true
				}
			}
		},
		TNMRAHEAS: {
			name: {
				en: "Moovalur Ramamirtham Ammaiyer Higher Education Assurance Scheme",
				hi: "मूवलुर रामामिर्थम अम्मैयार उच्च शिक्षा आश्वासन योजना",
				ta: "மூவலூர் ராமாமிர்தம் அம்மையார் உயர்கல்வி உறுதி திட்டம்"
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
			},
			helplines: ["91500 56805", "91500 56809"],
			website: "https://penkalvi.tn.gov.in/",
			eligibility_func: (gender: string, govt_school_612?: boolean, pursuing_undergrad?: boolean) => {
				if (gender === "female" && govt_school_612 && pursuing_undergrad) {
					return true
				}
				return false
			}
		},
		TNUAS: {
			name: {
				en: "Unemployment Assistance Scheme",
				hi: "तमिलनाडु बेरोजगारी सहायता योजना",
				ta: "தமிழ்நாடு வேலைவாய்ப்பின்மை உதவித் திட்டம்"
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
			},
			helplines: ["044 2250 0900", "044 2250 0911"],
			website: "https://tnvelaivaaippu.gov.in/",
			eligibility_func: (age: number, annual_household_income: number, reservation: string, disabled?: boolean) => {
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
				hi: "विवाह सहायता योजना",
				ta: "தமிழ்நாடு திருமண உதவித் திட்டம்"
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
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
				hi: "मुख्यमंत्री समग्र स्वास्थ्य बीमा योजना",
				ta: "முதலமைச்சரின் விரிவான மருத்துவக் காப்பீட்டுத் திட்டம்"
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
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
				hi: "मगलिर उरीमाई थोगाई योजना",
				ta: "மகளிர் உரிமை தோகை திட்டம்"
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
			},
			helplines: ["94449 95299", "95501 45357"],
			website: "",
			eligibility_func: (age: number, gender: string, annual_income: number, wet_land_area: number, dry_land_area: number, electricity_consumption: number) => {
				if (age > 18 && gender === "female" && annual_income < 250000 && wet_land_area < 5 && dry_land_area < 10 && electricity_consumption < 3600) {
					return true
				}
				return false
			}
		},
		TNZTBTSW: {
			name: {
				en: "Zero Ticket Bus Travel Scheme for Women",
				hi: "महिलाओं के लिए जीरो टिकट बस यात्रा योजना",
				ta: "பெண்களுக்கான தமிழ்நாடு ஜீரோ டிக்கெட் பேருந்து பயணத் திட்டம்"
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
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
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
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
				hi: "नवीन उद्यमी सह उद्यम विकास योजना",
				ta: "புதிய தொழில்முனைவோர் மற்றும் நிறுவன மேம்பாட்டுத் திட்டம்"
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
			},
			helplines: [],
			website: "https://www.msmetamilnadu.tn.gov.in/needs.php",
			eligibility_func: (gender: string, reservation: string, age: number, highest_education: string, ex_serviceman?: boolean, disabled?: boolean, vocational_training?: boolean, iti_graduate?: boolean) => {
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
				hi: "मुख्यमंत्री फ़ेलोशिप कार्यक्रम",
				ta: "முதலமைச்சர் பெல்லோஷிப் திட்டம்"
			},
			benefits: {
				en: [
					""
				],
				hi: [
					""
				],
				ta: [
					""
				]
			},
			helplines: ["044 2567 1024"],
			website: "https://tn.gov.in/tncmfp/",
			eligibility_func: (age: number, highest_education: string, tamil_status?: boolean) => {
				if (age <= 30 && age >= 22 && tamil_status && (highest_education === "undergraduate" || highest_education === "postgraduate")) {
					return true
				}
				return false
			}
		},
	}
}

export default SCHEMES
