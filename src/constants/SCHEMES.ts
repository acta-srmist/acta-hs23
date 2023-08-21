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
					"स्टैंड अप इंडिया योजना का उद्देश्य रुपये के बीच बैंक ऋण की सुविधा प्रदान करना है। ग्रीनफील्ड उद्यम स्थापित करने के लिए प्रति बैंक शाखा में कम से कम एक अनुसूचित जाति (एससी) या अनुसूचित जनजाति (एसटी) उधारकर्ता और कम से कम एक महिला उधारकर्ता को 10 लाख और 1 करोड़ रु।",
					"ब्याज की दर उस श्रेणी (रेटिंग श्रेणी) के लिए बैंक की सबसे कम लागू दर होगी (आधार दर (एमसीएलआर) + 3% + अवधि प्रीमियम) से अधिक नहीं होगी।",
					"ऋण 18 महीने की अधिकतम अधिस्थगन अवधि के साथ 7 वर्षों में चुकाया जा सकता है।",
				],
				ta: [
					"எழுந்து நிற்கும் இந்தியா திட்டத்தின் நோக்கம் ரூ. இடையே வங்கிக் கடன்களை எளிதாக்குவதாகும். 10 லட்சம் மற்றும் 1 குரோர் முதல் குறைந்தது ஒரு திட்டமிடப்பட்ட சாதி ( SC ) அல்லது திட்டமிடப்பட்ட பழங்குடி ( ST ) கடன் வாங்கியவர் மற்றும் ஒரு கிரீன்ஃபீல்ட் நிறுவனத்தை அமைப்பதற்காக வங்கிக் கிளைக்கு குறைந்தபட்சம் ஒரு பெண்கள் கடன் வாங்குபவர்",
					"வட்டி விகிதம் அந்த வகைக்கு வங்கியின் மிகக் குறைந்த பொருந்தக்கூடிய வீதமாக இருக்கும் ( மதிப்பீட்டு வகை ) ( அடிப்படை வீதத்தை தாண்டக்கூடாது ( MCLR ) + 3% + டெனோர் பிரீமியம் )",
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
					"Offers 7.40% per annum for the financial year 2020-21 for policy duration of 10 years.",
					"Mode of pension payment in this scheme is on a monthly, quarterly  half yearly or annual basis depending on the option exercised by the subscriber",
					"Minimum purchase price under the scheme is Rs. 1,62,162 for a minimum pension of Rs. 1000 per month",
					"Maximum purchase price is Rs. 15 lakh per senior citizen for getting a pension amount of Rs. 9250 per month.",
				],
				hi: [
					"वित्तीय वर्ष 2020-21 के लिए 10 वर्षों की पॉलिसी अवधि के लिए 7.40% प्रति वर्ष की पेशकश करता है।",
					"इस योजना में पेंशन भुगतान का तरीका ग्राहक द्वारा चुने गए विकल्प के आधार पर मासिक, त्रैमासिक, अर्धवार्षिक या वार्षिक आधार पर होता है।",
					"योजना के तहत न्यूनतम खरीद मूल्य रु. न्यूनतम पेंशन के लिए 1,62,162 रुपये। 1000 प्रति माह",
					"अधिकतम खरीद मूल्य रु. प्रति वरिष्ठ नागरिक को 15 लाख रुपये की पेंशन राशि प्राप्त करने के लिए। 9250 प्रति माह।",
				],
				ta: [
					"10 வருட கொள்கை காலத்திற்கு 2020-21 நிதியாண்டில் ஆண்டுக்கு 7.40% வழங்குகிறது",
					"இந்த திட்டத்தில் ஓய்வூதிய கட்டணம் செலுத்தும் முறை சந்தாதாரரால் பயன்படுத்தப்படும் விருப்பத்தைப் பொறுத்து மாதாந்திர, காலாண்டு அரை ஆண்டு அல்லது வருடாந்திர அடிப்படையில் உள்ளது",
					"திட்டத்தின் கீழ் குறைந்தபட்ச கொள்முதல் விலை ரூ. குறைந்தபட்ச ஓய்வூதியத்திற்கு 1,62,162 ரூ. மாதத்திற்கு 1000",
					"அதிகபட்ச கொள்முதல் விலை ரூ. ஒரு மூத்த குடிமகனுக்கு ஓய்வூதிய தொகை ரூ. மாதத்திற்கு 9250.",
				]
			},
			helplines: ["022 6781 9281", "1800 227 717"],
			website: "https://licindia.in",
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
					"The landholder, farmer’s family, who own cultivable land,  are eligible for this scheme",
					"The land owned is determined by the state or the UT’s records"
				],
				hi: [
					"भूमिधारक, किसान परिवार, जिनके पास खेती योग्य भूमि है, वे इस योजना के लिए पात्र हैं",
					"स्वामित्व वाली भूमि राज्य या केंद्रशासित प्रदेश के रिकॉर्ड द्वारा निर्धारित की जाती है।",
				],
				ta: [
					"பயிரிடக்கூடிய நிலத்தை வைத்திருக்கும் விவசாயியின் குடும்பமான நில உரிமையாளர் இந்த திட்டத்திற்கு தகுதியுடையவர்",
					"சொந்தமான நிலம் மாநிலத்தால் அல்லது யுடியின் பதிவுகளால் தீர்மானிக்கப்படுகிறது.",
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
					"Installation of solar pumps and renewable power plants at free of cost funded by the world bank"
				],
				hi: [
					"सोलर पंप एवं नवीकरणीय ऊर्जा संयंत्रों की निःशुल्क स्थापनाविश्व बैंक  द्वारा वित्त पोषित लागत"
				],
				ta: [
					"உலக வங்கியால் நிதியளிக்கப்பட்ட செலவில்லாமல் சூரிய விசையியக்கக்  குழாய்கள் மற்றும் புதுப்பிக்கத்தக்க மின் உற்பத்தி நிலையங்களை நிறுவுதல்"
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
					"Ayushman Bharat invariably provides Rs.5 lakh coverage per family every year to more than 10 crore families spread across India.",
					"The scheme's benefits are portable all throughout India and all beneficiaries who have signed up for Ayushman Bharat will be able to avail cashless treatments from any empanelled hospital - be it a private entity or a public hospital."
				],
				hi: [
					"आयुष्मान भारत पूरे भारत में फैले 10 करोड़ से अधिक परिवारों को हर साल प्रति परिवार 5 लाख रुपये का कवरेज प्रदान करता है।",
					"योजना के लाभ पूरे भारत में पोर्टेबल हैं और सभी लाभार्थी जिन्होंने आयुष्मान भारत के लिए साइन अप किया है, वे किसी भी सूचीबद्ध अस्पताल से कैशलेस उपचार का लाभ उठा सकेंगे - चाहे वह निजी संस्था हो या सार्वजनिक अस्पताल।",
				],
				ta: [
					"அயஷ்மான் பாரத் ஒவ்வொரு ஆண்டும் இந்தியா முழுவதும் பரவியுள்ள 10 க்கும் மேற்பட்ட குரோர் குடும்பங்களுக்கு ஒரு குடும்பத்திற்கு ரூ .5 லட்சம் கவரேஜை வழங்குகிறது",
					"இந்த திட்டத்தின் நன்மைகள் இந்தியா முழுவதும் சிறியவை, மேலும் ஆயுஷ்மேன் பாரத்துக்காக கையெழுத்திட்ட அனைத்து பயனாளிகளும் எந்தவொரு பச்சாதாபமான மருத்துவமனையிலிருந்தும் பணமில்லா சிகிச்சைகளைப் பெற முடியும் - இது ஒரு தனியார் நிறுவனமாக இருந்தாலும் அல்லது ஒரு பொது மருத்துவமனை",
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
					"Rs. 5000 is awarded to pregnant women through DBT mode",
				],
				hi: [
					"गर्भवती महिलाओं को डीबीटी मोड के माध्यम से 5000 रुपये दिए जाते हैं",
				],
				ta: [
					"கர்ப்பிணிப் பெண்களுக்கு டிபிடி பயன்முறை மூலம் ரூ .5000 வழங்கப்படுகிறது",
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
					"Funds are given to agricultural projects taken up by hard working farmers of any agro domain",
				],
				hi: [
					"किसी भी कृषि क्षेत्र के मेहनती किसानों द्वारा शुरू की गई कृषि परियोजनाओं के लिए धनराशि दी जाती है",
				],
				ta: [
					"எந்தவொரு வேளாண் களத்தின் கடின உழைப்பாளி விவசாயிகளால் எடுக்கப்பட்ட விவசாய திட்டங்களுக்கு நிதி வழங்கப்படுகிறது",
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
					"A girl child gets created a bank account at free of cost by any desired bank account.",
				],
				hi: [
					"बालिका का बैंक खाता निःशुल्क बनाया जाता है किसी भी वांछित बैंक खाते द्वारा.",
				],
				ta: [
					"ஒரு பெண் குழந்தை செலவில்லாமல் வங்கிக் கணக்கை உருவாக்குகிறது விரும்பிய வங்கிக் கணக்கின் மூலம்.",
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
					"DBT's main advantage is preventing any frauds. Therefore, the beneficiary receives the funds directly from the government. The beneficiary's bank account will directly receive the money",
					"With the help of the Aadhaar number, the identification of the beneficiary can be done better. The government will be able to identify the beneficiary with the help of their Aadhaar details since it is a universal ID",
				],
				hi: [
					"डीबीटी का मुख्य लाभ किसी भी धोखाधड़ी को रोकना है। इसलिए, लाभार्थी को सीधे सरकार से धन प्राप्त होता है। लाभार्थी के बैंक खाते में सीधे पैसा पहुंच जाएगा।",
					"की मदद सेआधार नंबरइससे लाभार्थी की पहचान बेहतर ढंग से हो सकेगी। सरकार आधार विवरण की मदद से लाभार्थी की पहचान करने में सक्षम होगी क्योंकि यह एक सार्वभौमिक आईडी है।",
				],
				ta: [
					"எந்தவொரு மோசடிகளையும் தடுப்பதே டி.பி.டி யின் முக்கிய நன்மை. எனவே, பயனாளி அரசாங்கத்திடமிருந்து நேரடியாக நிதியைப் பெறுகிறார். பயனாளியின் வங்கிக் கணக்கு நேரடியாக பணத்தை பெறும்",
					"ஆதர் எண்ணின் உதவியுடன், பயனாளியின் அடையாளத்தை சிறப்பாக செய்ய முடியும். இது ஒரு உலகளாவிய ஐடி என்பதால் பயனாளியை அவர்களின் ஆதர் விவரங்களின் உதவியுடன் அரசாங்கம் அடையாளம் காண முடியும்",
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
					"Permanent total disability with a coverage of Rs. 2 lakh",
					"Permanent partiality disability with a coverage of Rs. 1 lakh",
					"Accident leading up to policyholder’s death with coverage if Rs. 2 lakhs",
				],
				hi: [
					"1 लाख रुपये के कवरेज के साथ स्थायी आंशिक विकलांगता",
					"दुर्घटना के कारण पॉलिसीधारक की मृत्यु तक कवरेज, यदि 2 लाख रु",
				],
				ta: [
					"ரூ .2 லக்கின் கவரேஜுடன் நிரந்தர மொத்த இயலாமை",
					"ரூ .1 லக்கின் கவரேஜுடன் நிரந்தர பகுதியளவு இயலாமை",
					"ரூ .2 லட்சம் என்றால், கொள்கைதாரரின் மரணத்திற்கு விபத்து வழிவகுக்கிறது",
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
					"A pension of up to Rs. 5,000 is paid per month",
					"Tax benefits are provided",
					"The Indian Government co-contribution towards the scheme",
					"Risk-free scheme",
					"Individuals in the Swavalamban scheme are transferred to the APY scheme.",
				],
				hi: [
					"प्रति माह 5,000 रुपये तक की पेंशन दी जाती है",
					"कर लाभ प्रदान किया जाता है",
					"भारत सरकार इस योजना में सह-योगदान करती है",
					"जोखिम मुक्त योजना",
					" स्वावलंबन योजना में व्यक्तियों को APY योजना में स्थानांतरित किया जाता है।",
				],
				ta: [
					"மாதத்திற்கு ரூ .5,000 வரை ஓய்வூதியம் செலுத்தப்படுகிறது",
					"வரி சலுகைகள் வழங்கப்படுகின்றன",
					"இந்த திட்டத்திற்கு இந்திய அரசு இணை பங்களிப்பு",
					"ஆபத்து இல்லாத திட்டம்",
					" ஸ்வாலம்பன் திட்டத்தில் உள்ள நபர்கள் APY திட்டத்திற்கு மாற்றப்படுகிறார்கள்",
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
					"Sishu: Upto 50k",
					"Kishor: 50k to 5 lakh",
					"Tarun: 5 lakh to 10 lakh",
				],
				hi: [
					"सिशू: नमकीन 50 हजार",
					"किशोर: 50 हजार-5 लाख",
					"तरूण: 5 लाख 10 लाख",
				],
				ta: [
					"சிஷு: அப்டோ 50 கி",
					"கிஷோர்: 50 கே-5 லட்சம்",
					"தருன்: 5 லட்சம்-10 லட்சம்",
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
					"The policy offers coverage for 1 year",
					"Renewability is available",
					"Individuals can exit the scheme at any time and join the scheme in future",
					"Participatory bank will be the master policyholder of the scheme",
					"Offers a simple and subscriber friendly insurance claim settlement process",
					"Death cover offered by the scheme will terminate if the person is above 55 years, the member is covered through more than one bank account, and insufficient balance in savings account to keep the insurance in force",
					"Individuals who fail to join the scheme in the initial year can join the scheme in subsequent years by annual premiums and submitting a self-certificate of good health",
					"The scheme is open for new eligible applicants in the coming years",
				],
				hi: [
					"पॉलिसी 1 वर्ष के लिए कवरेज प्रदान करती है।",
					"नवीकरणीयता उपलब्ध है",
					"व्यक्ति किसी भी समय योजना से बाहर निकल सकते हैं और भविष्य में योजना में शामिल हो सकते हैं",
					"सहभागी बैंक योजना का मास्टर पॉलिसीधारक होगा",
					"एक सरल और ग्राहक अनुकूल बीमा दावा निपटान प्रक्रिया प्रदान करता है",
					"यदि व्यक्ति की आयु 55 वर्ष से अधिक है, सदस्य एक से अधिक बैंक खातों के माध्यम से कवर किया गया है, और बीमा को चालू रखने के लिए बचत खाते में अपर्याप्त शेष है, तो योजना द्वारा दिया जाने वाला मृत्यु कवर समाप्त हो जाएगा",
					"जो व्यक्ति प्रारंभिक वर्ष में योजना में शामिल होने में विफल रहते हैं, वे बाद के वर्षों में वार्षिक प्रीमियम का भुगतान करके और अच्छे स्वास्थ्य का स्व-प्रमाण पत्र जमा करके योजना में शामिल हो सकते हैं",
					"यह योजना आने वाले वर्षों में नए पात्र आवेदकों के लिए खुली है",
				],
				ta: [
					"கொள்கை 1 வருடத்திற்கு பாதுகாப்பு வழங்குகிறது",
					"புதுப்பித்தல் கிடைக்கிறது",
					"தனிநபர்கள் எந்த நேரத்திலும் திட்டத்திலிருந்து வெளியேறி எதிர்காலத்தில் திட்டத்தில் சேரலாம்",
					"பங்கேற்பு வங்கி திட்டத்தின் முதன்மை கொள்கைதாரராக இருக்கும்",
					"எளிய மற்றும் சந்தாதாரர் நட்பு காப்பீட்டு உரிமைகோரல் தீர்வு செயல்முறையை வழங்குகிறது",
					"அந்த நபர் 55 ஆண்டுகளுக்கு மேல் இருந்தால், உறுப்பினர் ஒன்றுக்கு மேற்பட்ட வங்கிக் கணக்கு மூலம் மூடப்பட்டிருந்தால், திட்டத்தால் வழங்கப்படும் மரண அட்டை நிறுத்தப்படும், மற்றும் காப்பீட்டை நடைமுறையில் வைத்திருக்க சேமிப்புக் கணக்கில் போதுமான சமநிலை",
					"ஆரம்ப ஆண்டில் திட்டத்தில் சேரத் தவறும் நபர்கள் அடுத்த ஆண்டுகளில் வருடாந்திர பிரீமியங்களால் திட்டத்தில் சேரலாம் மற்றும் நல்ல ஆரோக்கியத்தின் சுய சான்றிதழை சமர்ப்பிக்கலாம்",
					"வரவிருக்கும் ஆண்டுகளில் புதிய தகுதியான விண்ணப்பதாரர்களுக்கு இந்த திட்டம் திறந்திருக்கும்",
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
					"The scheme offers subsidised food at low prices to the needy, and municipal corporations of the state-run canteens serve the food",
					"The canteens established under this scheme serve people from various economic backgrounds, fostering social integration and inclusiveness. It eliminated the stigma associated with receiving assistance and ensures that all individuals can dine together",
					"During times of economic downturns, natural disasters, or other emergencies, having access to affordable meals can provide essential relief to affected communities",
				],
				hi: [
					"यह योजना जरूरतमंदों को कम कीमत पर सब्सिडी वाला भोजन प्रदान करती है, और राज्य द्वारा संचालित कैंटीन के नगर निगम भोजन परोसते हैं",
					" इस योजना के तहत स्थापित कैंटीन विभिन्न आर्थिक पृष्ठभूमि के लोगों की सेवा करती हैं, सामाजिक एकीकरण और समावेशन को बढ़ावा देती हैं।  इसने सहायता प्राप्त करने से जुड़े कलंक को समाप्त कर दिया और यह सुनिश्चित किया कि सभी व्यक्ति एक साथ भोजन कर सकें",
					"आर्थिक मंदी, प्राकृतिक आपदाओं या अन्य आपात स्थितियों के दौरान, किफायती भोजन तक पहुंच प्रभावित समुदायों को आवश्यक राहत प्रदान कर सकती है",
				],
				ta: [
					"இத்திட்டம் ஏழைகளுக்கு குறைந்த விலையில் மானிய விலையில் உணவை வழங்குகிறது, மேலும் அரசு நடத்தும் கேன்டீன்களின் முனிசிபல் கார்ப்பரேஷன்கள் உணவை வழங்குகின்றன",
					"இத்திட்டத்தின் கீழ் நிறுவப்பட்ட கேன்டீன்கள் பல்வேறு பொருளாதார பின்னணியில் உள்ள மக்களுக்கு சேவை செய்து, சமூக ஒருங்கிணைப்பு மற்றும் உள்ளடக்கிய தன்மையை வளர்க்கிறது.  இது உதவி பெறுவது தொடர்பான களங்கத்தை நீக்கியது மற்றும் அனைத்து நபர்களும் ஒன்றாக உணவருந்துவதை உறுதி செய்கிறது",
					" பொருளாதார வீழ்ச்சிகள், இயற்கை பேரழிவுகள் அல்லது பிற அவசரநிலைகளின் போது, மலிவு விலையில் உணவு கிடைப்பது பாதிக்கப்பட்ட சமூகங்களுக்கு அத்தியாவசிய நிவாரணம் அளிக்கும்",
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
					"A new scheme for supplying drinking water to those who cannot afford to buy purified drinking water from private players",
					"The plant has the capacity to produce 3 lakh litres of purified water per day, which is more than enough to provide for the people in Tamil Nadu",
				],
				hi: [
					"उन लोगों के लिए पेयजल आपूर्ति की एक नई योजना जो निजी कंपनियों से शुद्ध पेयजल खरीदने में सक्षम नहीं ",
					" संयंत्र की क्षमता प्रति दिन 3 लाख लीटर शुद्ध पानी का उत्पादन करने की है, जो तमिलनाडु के लोगों के लिए पर्याप्त है।",
				],
				ta: [
					"தனியார் நிறுவனங்களிடம் இருந்து சுத்திகரிக்கப்பட்ட குடிநீரை விலை கொடுத்து வாங்க முடியாதவர்களுக்கு குடிநீர் வழங்கும் புதிய திட்டம்",
					"இந்த ஆலை ஒரு நாளைக்கு 3 லட்சம் லிட்டர் சுத்திகரிக்கப்பட்ட தண்ணீரை உற்பத்தி செய்யும் திறன் கொண்டது, இது தமிழக மக்களுக்கு வழங்க போதுமானது",
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
					"You will get financial assistance of 50%  up to Rs. 25,000 on buying non-geared or auto-geared vehicle",
				],
				hi: [
					"आपको रुपये तक 50% की वित्तीय सहायता मिलेगी।  बिना गियर वाले या ऑटो गियर वाले वाहन खरीदने पर 25,000 रु",
				],
				ta: [
					"நீங்கள் 50%  வரை நிதி உதவி பெறுவீர்கள்.  கியர் இல்லாத அல்லது ஆட்டோ கியர் வாகனம் வாங்கினால் 25,000",
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
					"You will get financial assistance of Rs. 1,000 every month until the completion of your course",
				],
				hi: [
					"आपको रुपये की वित्तीय सहायता मिलेगी।  आपका कोर्स पूरा होने तक हर महीने 1,000 रु",
				],
				ta: [
					"நீங்கள் ரூ. நிதி உதவி பெறுவீர்கள்.  உங்கள் பாடநெறி முடியும் வரை ஒவ்வொரு மாதமும் 1,000",
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
					"General candidate, below 10th,  gets Rs. 200 per month",
					"General candidate, 10th pass, gets Rs. 300 per month",
					"General candidate, 12th pass, gets Rs. 400 per month",
					"General candidate, graduate, gets Rs. 600 per month",
					"Disabled candidate, 10th pass or below, gets Rs. 600 per month",
					"Disabled candidate, 12th pass, gets Rs. 750 per month",
					"Disabled candidate, graduate, gets Rs. 1,000 per month",
				],
				hi: [
					"10वीं से नीचे के सामान्य उम्मीदवार को रु. 200 प्रति माह",
					"10वीं पास सामान्य उम्मीदवार को रु. 300 प्रति माह",
					"12वीं पास सामान्य उम्मीदवार को रु. 400 प्रति माह",
					"सामान्य उम्मीदवार, स्नातक, को रु।  600 प्रति माह",
					"10वीं पास या उससे नीचे के विकलांग उम्मीदवार को रु. 600 प्रति माह",
					"12वीं पास विकलांग उम्मीदवार को रु. 750 प्रति माह",
					"विकलांग उम्मीदवार, स्नातक, को रु. 1,000 प्रति माह",
				],
				ta: [
					"பொது வேட்பாளர், 10 ஆம் வகுப்புக்குக் கீழ்,  ரூ.  மாதம் 200",
					"பொது விண்ணப்பதாரர், 10 ஆம் வகுப்பு தேர்ச்சி, ரூ.  மாதம் 300",
					"பொது விண்ணப்பதாரர், 12வது தேர்ச்சி, ரூ.  மாதம் 400",
					"பொது வேட்பாளர், பட்டதாரி, ரூ.  மாதம் 600",
					"மாற்றுத்திறனாளி விண்ணப்பதாரர், 10 ஆம் வகுப்பு தேர்ச்சி அல்லது அதற்கும் குறைவானவர்கள், ரூ.  மாதம் 600",
					"மாற்றுத்திறனாளி விண்ணப்பதாரர், 12 ஆம் வகுப்பு தேர்ச்சி பெற்றால், ரூ.  மாதம் 750",
					"மாற்றுத்திறனாளி வேட்பாளர், பட்டதாரி, ரூ.  மாதம் 1,000",
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
					"If you are a non-graduate, you will get financial assistance of Rs. 25,000 and a 22-carat 8 gram gold coin",
					"If you are a graduate, you will get financial assistance of Rs. 50,000 and a 22-carat 8 gram gold coin",
				],
				hi: [
					"यदि आप गैर स्नातक हैं तो आपको रुपये की वित्तीय सहायता मिलेगी।  25000 और एक 22 कैरेट 8 ग्राम सोने का सिक्का",
					"यदि आप ग्रेजुएट हैं तो आपको 50000 रुपये की वित्तीय सहायता और 22 कैरेट सोने का सिक्का मिलेगा",
				],
				ta: [
					"நீங்கள் பட்டதாரி அல்லாதவராக இருந்தால், உங்களுக்கு ரூ. நிதி உதவி கிடைக்கும்.  25000 மற்றும் 22 காரட் 8 கிராம் தங்க நாணயம்",
					"நீங்கள் பட்டதாரியாக இருந்தால் ரூ.50000 நிதியுதவி மற்றும் 22 காரட் தங்க நாணயம் வழங்கப்படும்."
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
					"Rs. 5,00,000 in health insurance for every family member",
				],
				hi: [
					"परिवार के प्रत्येक सदस्य के लिए 5,00,000 रुपये का स्वास्थ्य बीमा",
				],
				ta: [
					"ஒவ்வொரு குடும்ப உறுப்பினருக்கும் 5,00,000 மருத்துவக் காப்பீடு",
				]
			},
			helplines: ["1800 425 3993"],
			website: "https://www.cmchistn.com",
			eligibility_func: (annual_household_income: number) => {
				if (annual_household_income < 120000) {
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
					"Eligible women will get Rs. 1,000 per month",
				],
				hi: [
					"पात्र महिलाओं को मिलेंगे रुपये  1,000 प्रति माह",
				],
				ta: [
					"தகுதியான பெண்களுக்கு ரூ.  மாதம் 1,000",
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
					"Free bus ride up to 30 km in government buses",
				],
				hi: [
					"सरकारी बसों में 30 किमी तक मुफ्त बस यात्रा",
				],
				ta: [
					"அரசுப் பேருந்துகளில் 30 கிமீ வரை இலவசப் பேருந்து பயணம்",
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
					"25% cost of your project upto Rs.250000 will be covered by government and rest of the amount will be given in the form of loan for which no collateral is needed and is to returned in 5 years",
				],
				hi: [
					"आपके प्रोजेक्ट की 250000 रुपये तक की 25% लागत सरकार द्वारा वहन की जाएगी और बाकी राशि ऋण के रूप में दी जाएगी जिसके लिए किसी गारंटी की आवश्यकता नहीं है और इसे 5 वर्षों में वापस करना होगा",
				],
				ta: [
					"உங்கள் திட்டத்தின் 25% செலவு ரூ.250000 வரை அரசாங்கத்தால் ஈடுசெய்யப்படும் மற்றும் மீதித் தொகை கடனாக வழங்கப்படும், இதற்கு எந்த பிணையும் தேவையில்லை மற்றும் 5 ஆண்டுகளில் திருப்பித் தரப்படும்",
				]
			},
			helplines: [],
			website: "https://www.msmetamilnadu.tn.gov.in/uyegp.php",
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
					"25% of financial assistance upto Rs. 75,00,000",
					"Rest of the amount will be provided in the form of loan with 3% of interest",
				],
				hi: [
					"रुपये तक की 25% वित्तीय सहायता। 75,00,000",
					"शेष राशि 3% ब्याज के साथ ऋण के रूप में प्रदान की जाएगी",
				],
				ta: [
					"25% நிதி உதவி ரூ. 75,00,000",
					" மீதித் தொகை 3% வட்டியுடன் கடனாக வழங்கப்படும்",
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
					"You will be employed for more than two years with a salary of Rs. 65,000",
					"Additional allowance of Rs. 10,000 will be given for expenses like transport and data usage",
				],
				hi: [
					"आपको 65,000 रुपये के वेतन के साथ दो साल से अधिक समय तक नियोजित किया जाएगा",
					"रुपये का अतिरिक्त भत्ता.  परिवहन और डेटा उपयोग जैसे खर्चों के लिए 10,000 रुपये दिए जाएंगे",
				],
				ta: [
					"நீங்கள் ரூ.65000 சம்பளத்துடன் இரண்டு வருடங்களுக்கு மேல் வேலையில் இருப்பீர்கள்",
					"கூடுதல் கொடுப்பனவாக ரூ.  போக்குவரத்து மற்றும் தரவு பயன்பாடு போன்ற செலவுகளுக்கு 10000 வழங்கப்படும்",
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
