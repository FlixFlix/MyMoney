// List of locales
// Country codes according to ISO 3166-1
window.locales = {

	/* Please add countries in alphabetical order */

	/****************/
	/*   AUSTRALIA  */
	/****************/
	
	/* When add a new country, make sure you change here.  if not, will show on selection menu, but will not run use cases */	
	AU: {
		appName: 'MyMoney',
		label: 'Australia',
		description: 'Australia',
		region: 'APAC',
		language: 'eng',
	/* JSON Seeded information could have different numbers for each country as updates will occur */		
		proposition: 'AO',
		propcase1: '31A',
		propcase2: '32',
		propcase3: '33',
		propcase4: '34B',
		propcase5: '35A',
		code: 'AU',
		ISOCode: 'AU',
	/* ID may or may not have backsides,  this variable allows to add or not add picture of backside of ID */	
		DrvIDBackside: true,
		GovIDBackside: false,
		
	/* Allow for default Toggles to be on or off depending on country          - TT 9/10/19 */	
		ShowIdentityVerification: true,
		ShowRiskEngine: true,
		ShowDocumentVerification: true,
		ShowPhoneIntelligence: false,
		ShowEmailRiskScoring: true,
		ShowBehavioralBiometrics: true,
		ShowMachineLearning: false,
				
		persons: [
			[],
			['Sarah', 'Jamison', '02-01-1976', '165-239-877', 'Unit 123/16521 Morris St', 'South Melbourne', 'VIC', '3205', '+61 4 7536 4100', 'sarahlynnjamison0276@yahoo.com'],
			['Lizzy', 'Grant', '04-09-1973', '512-438-888', 'Unit 123/1251 Miller St', 'North Sydney', 'NSW', '2060', '+61 4 2567 8500', 'lizzy_grant@gmail.com'],
			['Elizabeth', 'Grant', '04-09-1973', '512-438-888', 'Unit 5a/53 Alma Rd', 'St Kilda', 'VIC', '3182', '+61 4 2567 8500', 'elizabeth_grant83@yahoo.com'],
			['Paul', 'Johnson', '18-09-1999', '754-631-199', '9715 Rock Maple Street', 'Melbourne', 'VIC', '3000', '+61 3 8765 4321', 'PaulA_007@gmail.com'],
		],
		customTranslations: {
		},
		scenarios: {
			typical: {
				person: 1,
			},
			mismatch: {
				person: 2,
			},
			machine: {
				person: 2,
			},
			fraud: {
				person: 3,
			},
			thin: {
				person: 4,
			}
		},
		fields: [
			{
				name: 'firstName',
				placeholder: 'First Name'
			},
			{
				name: 'lastName',
				placeholder: 'Last Name'
			},
			{
				name: 'dob',
				placeholder: 'DOB - MM/DD/YYYY'
			},
			{
				name: 'TFN',
				placeholder: 'TFN'
			},
			{
				name: 'address',
				placeholder: '123 Streetname Ave'
			},
			{
				name: 'city',
				placeholder: 'City'
			},
			{
				name: 'state',
				placeholder: 'State'
			},
			{
				name: 'postalcode',
				placeholder: 'Postal Code'
			},
			{
				name: 'phone',
				placeholder: 'Phone Number'
			},
			{
				name: 'email',
				placeholder: 'email@domain.com'
			},
		]
	},

	/**********************/
	/*   Brazil           */
	/**********************/
	
	/* When add a new country, make sure you change here.  if not, will show on selection menu, but will not run use cases */	
	BR: {
		appName: 'MyMoney',
		label: 'Brazil',
		description: 'Brazil',
		region: 'LATAM',
		language: 'por',
	/* JSON Seeded information could have different numbers for each country as updates will occur */		
		proposition: 'AO',
		propcase1: '26',
		propcase2: '27',
		propcase3: '28',
		propcase4: '29A',
		propcase5: '30',
		code: 'BR',
		ISOCode: 'BR',
	/* ID may or may not have backsides,  this variable allows to add or not add picture of backside of ID */	
		DrvIDBackside: false,
		GovIDBackside: false,
		
	/* Allow for default Toggles to be on or off depending on country          - TT 9/10/19 */
		ShowIdentityVerification: true,
		ShowRiskEngine: true,
		ShowDocumentVerification: false,
		ShowPhoneIntelligence: false,
		ShowEmailRiskScoring: true,
		ShowBehavioralBiometrics: true,
		ShowMachineLearning: false,
								
		persons: [
			[],
			['Mariana', 'Gomes', '02-01-1976', '342.665.382-60', 'Rua Pernambucana 146', 'Osasco', 'São Paulo', '06140-040', '+55 (11) 4223-4095', 'MarianaGomes0276@yahoo.com'],
			['Bea', 'Almeida', '04-09-1973', '489.085.995-09', 'Rua Três 1656', 'Belo Horizonte', 'Minas Gerais', '13082-665', '+55 (19) 7874-3886', 'Bea_Almeida@gmail.com'],
			['Beatriz', 'Almeida', '04-09-1973', '489.085.995-09', 'Travessa Araci 196', 'Duque de Caxias', 'Rio de Janeiro', '125272-440', '+55 (21) 8299-4630', 'BeatrizAlmeida83@yahoo.com'],
			['Vicente', 'Fontes', '18-09-1999', '489.085.995-09', 'Rua Reverendo 617', 'Belford Roxo', 'Rio de Janeiro', '26143-435', '+55 (21) 2275-6677', 'VicenteF_007@gmail.com'],
		],
		customTranslations: {
		},
		scenarios: {
			typical: {
				person: 1,
			},
			mismatch: {
				person: 2,
			},
			machine: {
				person: 2,
			},
			fraud: {
				person: 3,
			},
			thin: {
				person: 4,
			}
		},
		fields: [
			{
				name: 'firstName',
				placeholder: 'Nombre de pila'
			},
			{
				name: 'lastName',
				placeholder: 'Apellido'
			},
			{
				name: 'dob',
				placeholder: 'DOB - DD-MM-CCYY'
			},
			{
				name: 'CPF',
				placeholder: 'Cadastro de Pessoas Físicas'
			},
			{
				name: 'address',
				placeholder: '123 nombre de la callee'
			},
			{
				name: 'city',
				placeholder: 'ciudad'
			},
			{
				name: 'country',
				placeholder: 'País'
			},
			{
				name: 'postcode',
				placeholder: 'código postal'
			},
			{
				name: 'phone',
				placeholder: 'número de teléfono'
			},
			{
				name: 'email',
				placeholder: 'email@domain.com'
			},
		]
	},

	/**********************/
	/*   Colombia         */
	/**********************/
	
	/* When add a new country, make sure you change here.  if not, will show on selection menu, but will not run use cases */	
	CO: {
		appName: 'MyMoney',
		label: 'Latinoamérica',
		description: 'Latin America',
	/*	label: 'Colombia',
		description: 'Colombia', */		
		region: 'LATAM',
		language: 'spa',
	/* JSON Seeded information could have different numbers for each country as updates will occur */		
		proposition: 'AO',
		propcase1: '36',
		propcase2: '37',
		propcase3: '38',
		propcase4: '39A',
		propcase5: '40',
		code: 'CO',
		ISOCode: 'CO',
	/* ID may or may not have backsides,  this variable allows to add or not add picture of backside of ID */			
		DrvIDBackside: false,
		GovIDBackside: false,
		
	/* Allow for default Toggles to be on or off depending on country         - TT 9/10/19 */
		ShowIdentityVerification: true,
		ShowRiskEngine: true,
		ShowDocumentVerification: true,
		ShowPhoneIntelligence: false,
		ShowEmailRiskScoring: true,
		ShowBehavioralBiometrics: false,
		ShowMachineLearning: false,
				
		persons: [
			[],
			/* Before removed postal codes
			['Natalia', 'Ramírez', '02-01-1976', '36 123456', 'Cr 108 No. 23B-50, C.P 11001', 'Bogotá', 'Bogotá', '111911', '+57 15433025', 'NataliaRamirez0276@yahoo.com'],
			['Juanita', 'García', '04-09-1973', '37 654321', 'Cr 72 No. 74B-39, C.P 11001', 'Medellin', 'Antioquia', '050001', '+57 12529697', 'Juanita_Garcia@gmail.com'],
			['Juana', 'García', '04-09-1973', '37 654321', 'Cr 7 No. 23B-31, C.P 12341', 'Santiago de Cali', 'Valle Del Cauca', '760001', '+44 3125 678500', 'JuanaGarcia83@yahoo.com'],
			['Pedro', 'Martínez', '18-09-1999', '62 121212', 'Cr 8 No. 16-68, C.P 66001', 'Patico', 'Bolivar', '132547', '+57 63331353', 'PedroMartinez_007@gmail.com'],
			*/
			['Natalia', 'Ramírez', '02-01-1976', '36 123456', 'Cr 108 No. 23B-50, C.P 11001', 'Bogotá', 'Bogotá', '+57 15433025', 'NataliaRamirez0276@yahoo.com'],
			['Juanita', 'García', '04-09-1973', '37 654321', 'Cr 72 No. 74B-39, C.P 11001', 'Medellin', 'Antioquia', '+57 12529697', 'Juanita_García@gmail.com'],
			['Juana', 'García', '04-09-1973', '37 654321', 'Cr 7 No. 23B-31, C.P 12341', 'Santiago de Cali', 'Velle Del Cauca', '+57 24353647', 'JuanaGarcía83@yahoo.com'],
			['Pedro', 'Martínez', '18-09-1999', '62 121212', 'Cr 8 No. 16-68, C.P 66001', 'Patico', 'Bolivar', '+57 63331353', 'PedroMartínez_007@gmail.com'],		
		],
		customTranslations: {
		},
		scenarios: {
			typical: {
				person: 1,
			},
			mismatch: {
				person: 2,
			},
			machine: {
				person: 2,
			},
			fraud: {
				person: 3,
			},
			thin: {
				person: 4,
			}
		},
		fields: [
			{
				name: 'firstName',
				placeholder: 'Nombre de pila'
			},
			{
				name: 'lastName',
				placeholder: 'Apellido'
			},
			{
				name: 'dob',
				placeholder: 'DOB - DD-MM-CCYY'
			},
			{
				name: 'NINO',
				placeholder: 'Número de seguro Nacional'
			},
			{
				name: 'Dirección',
				placeholder: '123 nombre de la callee'
			},
			{
				name: 'Ciudad',
				placeholder: 'ciudad'
			},
			{
				name: 'departamento',
				placeholder: 'País'
			},
			/*
			{
				name: 'postcode',
				placeholder: 'código postal'
			},
			*/
			{
				name: 'Teléfono',
				placeholder: 'número de teléfono'
			},
			{
				name: 'email',
				placeholder: 'email@domain.com'
			},
		]
	},

	/****************/
	/*   INDIA      */
	/****************/
	
	/* When add a new country, make sure you change here.  if not, will show on selection menu, but will not run use cases */	
	IN: {
		appName: 'MyMoney',
		label: 'India',
		description: 'India',
		region: 'APAC',
		language: 'eng',
	/* JSON Seeded information could have different numbers for each country as updates will occur */		
		proposition: 'AO',
		propcase1: '46',
		propcase2: '47',
		propcase3: '48A',
		propcase4: '49',
		propcase5: '50A',
		code: 'IN',
		ISOCode: 'IN',
	/* ID may or may not have backsides,  this variable allows to add or not add picture of backside of ID */			
		DrvIDBackside: false,
		GovIDBackside: true,
		
	/* Allow for default Toggles to be on or off depending on country        - TT 9/10/19 */	
		ShowIdentityVerification: true,
		ShowRiskEngine: true,
		ShowDocumentVerification: true,
		ShowPhoneIntelligence: false,
		ShowEmailRiskScoring: true,
		ShowBehavioralBiometrics: false,
		ShowMachineLearning: false,	
		
		persons: [
			[],
			['Barsha', 'Murjani', '02-01-1976', 'MLWPM1634B', '5th Floor Tower 3 Equinox Business Park Kurla West', 'Mumbai', 'MH', '400070', '+91 22 68186900', 'barsh7690@gmail.com'],
			['Barsha', 'Sharma', '09-04-1973', 'MLWPM1634B', '213 Shezedada tower Mulund West', 'Mumbai', 'MH', '400080', '+91 22 68186944', 'barsh7690@gmail.com'],
			['Barsha', 'Murjani', '09-04-1973', 'MLWPM1634B', 'Antariksh Bhavan 5th floor Connaught Place', 'Delhi', 'DL', '100001', '+91 22 68186944', 'asharma_1102@yahoo.co.in'],
			['Chandrasekhar', 'Moorthy', '09-18-1999', 'MH0420100029930', 'Kalina near Geeta Vihar Hotel', 'Mumbai', 'MH', '400063', '+91 980567234', 'cm_007@yahoo.co.in'],
		],
		customTranslations: {
		},
		scenarios: {
			typical: {
				person: 1,
			},
			mismatch: {
				person: 2,
			},
			machine: {
				person: 2,
			},
			fraud: {
				person: 3,
			},
			thin: {
				person: 4,
			}
		},
		fields: [
			{
				name: 'firstName',
				placeholder: 'First Name'
			},
			{
				name: 'lastName',
				placeholder: 'Last Name'
			},
			{
				name: 'dob',
				placeholder: 'DOB - MM/DD/YYYY'
			},
			{
				name: 'PAN Card',
				placeholder: 'PAN Card'
			},
			{
				name: 'address',
				placeholder: '123 Streetname Ave'
			},
			{
				name: 'city',
				placeholder: 'City'
			},
			{
				name: 'state',
				placeholder: 'State'
			},
			{
				name: 'postcode',
				placeholder: 'Post Code'
			},
			{
				name: 'phone',
				placeholder: 'Phone Number'
			},
			{
				name: 'email',
				placeholder: 'email@domain.com'
			},
		]
	},

	/*******************/
	/*   INDONESIA     */
	/*******************/

	/* When add a new country, make sure you change here.  if not, will show on selection menu, but will not run use cases */	
	ID: {
		appName: 'MyMoney',
		label: 'Indonesia',
		description: 'Indonesia',
		region: 'APAC',
		language: 'eng',
	/* JSON Seeded information could have different numbers for each country as updates will occur */		
		proposition: 'AO',
		propcase1: '31',
		propcase2: '32',
		propcase3: '33',
		propcase4: '34',
		propcase5: '35',
		invision: {
			propcase1: 'AFUUELGMXBC#/392863584_Indonesia_-_Typical_Applicant_-_CrossCore_Results',
			propcase2: 'AFUUELGMXBC#/392880593_Indonesia_-_Mismatched_IDs_-_CrossCore_Results',
			propcase3: 'AFUUELGMXBC#/392890191_Indonesia_-_Machine_Learning_-_CrossCore_Results',
			propcase4: 'AFUUELGMXBC#/392896617_Indonesia_-_Identity_Fraud_Attempt_-_CrossCore_Result',
			propcase5: 'AFUUELGMXBC#/392899076_Indonesia_-_Thin_File_Attempt_-_CrossCore_Result',
		},
		code: 'ID',
		ISOCode: 'ID',
	/* ID may or may not have backsides,  this variable allows to add or not add picture of backside of ID */			
		DrvIDBackside: true,
		GovIDBackside: false,
		
	/* Allow for default Toggles to be on or off depending on country        - TT 9/10/19 */	
		ShowIdentityVerification: true,
		ShowRiskEngine: true,
		ShowDocumentVerification: true,
		ShowPhoneIntelligence: false,
		ShowEmailRiskScoring: true,
		ShowBehavioralBiometrics: true,
		ShowMachineLearning: false,
				
		persons: [
			[],
			['Ratna Utari', 'Oesman', '02-01-1976', '22 5600 760201 1234', 'Ged Surveyor Indonesia Lt Basement/LB 40', 'Kebayoran Baru', 'Jakarta', '12110', '+62 021 7220074', 'RatanOesman0276@yahoo.com'],
			['Tanu', 'Sasmita', '04-09-1973', '32 2300 790201 1234', 'Kompl Puri Tanjung Sari 2 50', 'Medan', 'Sumatera Utara', '20028', '+62 061 8221782', 'Tanu_Sasmita@gmail.com'],
			['Tanudisastro Bo', 'Sasmita', '04-09-1973', '32 2300 790201 1234', 'Jl Darmo Permai Tmr IV/18', 'Surabaya', 'Jawa Timur', '60111', '+62 031 7340468', 'TanudisastroSasmita83@yahoo.com'],
			['Dita', 'Oktiawati', '18-09-1999', '32 7314 551088 0009', 'Suci Residence, Block G, No3', 'Kuningan', 'Jakarta', '10120', '+62 811 2237088', 'ditaoktiawati@gmail.com'],
		],
		customTranslations: {
		},
		scenarios: {
			typical: {
				person: 1,
			},
			mismatch: {
				person: 2,
			},
			machine: {
				person: 2,
			},
			fraud: {
				person: 3,
			},
			thin: {
				person: 4,
			}
		},
		fields: [
			{
				name: 'firstName',
				placeholder: 'First Name'
			},
			{
				name: 'lastName',
				placeholder: 'Last Name'
			},
			{
				name: 'dob',
				placeholder: 'DOB - MM/DD/YYYY'
			},
			{
				name: 'NIK',
				placeholder: 'NIK - pp.DDSS.ddmmyy.ssss'
			},
			{
				name: 'address',
				placeholder: '123 Streetname Ave'
			},
			{
				name: 'city',
				placeholder: 'City'
			},
			{
				name: 'state',
				placeholder: 'State'
			},
			{
				name: 'postcode',
				placeholder: 'Post Code'
			},
			{
				name: 'phone',
				placeholder: 'Phone Number'
			},
			{
				name: 'email',
				placeholder: 'email@domain.com'
			},
		]
	},

	/*******************/
	/*   SOUTH AFRICA  */
	/*******************/

	/* When add a new country, make sure you change here.  if not, will show on selection menu, but will not run use cases */	
	ZA: {
		appName: 'MyMoney',
		label: 'South Africa',
		description: 'South Africa',
		region: 'EMEA',
		language: 'eng',
	/* JSON Seeded information could have different numbers for each country as updates will occur */		
		proposition: 'AO',
		propcase1: '31a',
		propcase2: '32',
		propcase3: '33',
		propcase4: '34',
		propcase5: '35',
		code: 'ZA',
		ISOCode: 'ZA',
	/* ID may or may not have backsides,  this variable allows to add or not add picture of backside of ID */			
		DrvIDBackside: false,
		GovIDBackside: false,
		
	/* Allow for default Toggles to be on or off depending on country         - TT 9/10/19 */	
		ShowIdentityVerification: true,
		ShowRiskEngine: true,
		ShowDocumentVerification: true,
		ShowPhoneIntelligence: false,
		ShowEmailRiskScoring: true,
		ShowBehavioralBiometrics: false,
		ShowMachineLearning: false,
				
		persons: [
			[],
			['Pauline J', 'Curtis', '02-01-1976', 'MLWPM1634B', '337  Sandown Rd', 'Cape Town', 'Western Cape', '8003', '+27 82 263 8526', 'paulinejcurtis0276@yahoo.com'],
			['Pattie', 'Jorgensen', '04-09-1983', 'MLWPM1634B', '2241  Rus St', 'Cape Town', 'Western Cape', '7551', '+27 82 415 6745', 'Pattie_Jorgensen@gmail.com '],
			['Patricia', 'Jorgensen', '04-09-1983', 'MLWPM1634B', '428  Wit Rd', 'Johannesburg', 'Gauteng', '2058', '+27 84 401 9880', 'Patricia_J730904@gmail.com'],
			['George', 'Klein', '18-09-1999', 'MH0420100029930', '947  Market St', 'Johannesburg', 'Gauteng', '2154', '+27 84 715 3283', 'GeorgeK_007@gmail.com'],
		],
		customTranslations: {
		},
		scenarios: {
			typical: {
				person: 1,
			},
			mismatch: {
				person: 2,
			},
			machine: {
				person: 2,
			},
			fraud: {
				person: 3,
			},
			thin: {
				person: 4,
			}
		},
		fields: [
			{
				name: 'firstName',
				placeholder: 'First Name'
			},
			{
				name: 'lastName',
				placeholder: 'Last Name'
			},
			{
				name: 'dob',
				placeholder: 'DOB - MM/DD/YYYY'
			},
			{
				name: 'SSSS',
				placeholder: 'SSSS - YYMMDDSSSSCAZ'
			},
			{
				name: 'address',
				placeholder: '123 Streetname Ave'
			},
			{
				name: 'city',
				placeholder: 'City'
			},
			{
				name: 'state',
				placeholder: 'State'
			},
			{
				name: 'postcode',
				placeholder: 'Post Code'
			},
			{
				name: 'phone',
				placeholder: 'Phone Number'
			},
			{
				name: 'email',
				placeholder: 'email@domain.com'
			},
		]
	},


	/**********************/
	/*   UNITED KINGDOM   */
	/**********************/

	/* When add a new country, make sure you change here.  if not, will show on selection menu, but will not run use cases */		
	UK: {
		appName: 'MyMoney',
		label: 'UK',
		description: 'United Kingdom',
		region: 'UK',
		language: 'eng',
	/* JSON Seeded information could have different numbers for each country as updates will occur */		
		proposition: 'AO',
		propcase1: '41',
		propcase2: '42',
		propcase3: '43',
		propcase4: '44a',
		propcase5: '45',
		code: 'UK',
		ISOCode: 'GB',
	/* ID may or may not have backsides,  this variable allows to add or not add picture of backside of ID */			
		DrvIDBackside: true,
		GovIDBackside: false,
		
	/* Allow for default Toggles to be on or off depending on country         - TT 9/10/19 */	
		ShowIdentityVerification: true,
		ShowRiskEngine: true,
		ShowDocumentVerification: true,
		ShowPhoneIntelligence: false,
		ShowEmailRiskScoring: true,
		ShowBehavioralBiometrics: false,
		ShowMachineLearning: false,		
	
		persons: [
			[],
			/* Before removed postal codes
			['Sarah', 'Jamison', '02-01-1976', 'AO 12 34 56 A', '23 High Tree Road', 'Nottingham', 'England', 'NG1 3SD', '+44 6175 364100', 'sarahlynnjamison0276@yahoo.com'],
			['Lizzy', 'Grant', '04-09-1973', 'AO 12 34 56 B', '96 Parkfield Road', 'Upper Healy', 'Derby', 'DE23 1GH', '+44 3125 678500', 'lizzy_grant@gmail.com'],
			['Elizabeth', 'Grant', '04-09-1973', 'AO 12 34 56 B', '42 West Wellington Drive', 'Wygston', 'Leicester', 'LE18 6PD', '+44 3125 678500', 'elizabethgrant83@yahoo.com'],
			['Paul', 'Johnson', '18-09-1999', 'OW 07 68 52D', '104 Greyfriars Road', 'Cardiff', 'England', 'CF1 3YQ', '+44 07 0517 11863', 'PaulA_007@gmail.com'],
			*/
			['Sarah', 'Jamison', '02-01-1976', 'AO 12 34 56 A', '23 High Tree Road', 'Nottingham', 'England', 'NG1 3SD', 'sarahlynnjamison0276@yahoo.com'],
			['Lizzy', 'Grant', '04-09-1973', 'AO 12 34 56 B', '96 Parkfield Road', 'Upper Healy', 'Derby', 'DE23 1GH', 'lizzy_grant@gmail.com'],
			['Elizabeth', 'Grant', '04-09-1973', 'AO 12 34 56 B', '42 West Wellington Drive', 'Wygston', 'Leicester', 'LE18 6PD', 'elizabethgrant83@yahoo.com'],
			['Paul', 'Johnson', '18-09-1999', 'OW 07 68 52D', '104 Greyfriars Road', 'Cardiff', 'England', 'CF1 3YQ', 'PaulA_007@gmail.com'],
		],
		customTranslations: {
		},
		scenarios: {
			typical: {
				person: 1,
			},
			mismatch: {
				person: 2,
			},
			machine: {
				person: 2,
			},
			fraud: {
				person: 3,
			},
			thin: {
				person: 4,
			}
		},
		fields: [
			{
				name: 'firstName',
				placeholder: 'First Name'
			},
			{
				name: 'lastName',
				placeholder: 'Last Name'
			},
			{
				name: 'dob',
				placeholder: 'DOB - DD-MM-CCYY'
			},
			{
				name: 'NINO',
				placeholder: 'National Insurance Number'
			},
			{
				name: 'address',
				placeholder: '123 Streetname Ave'
			},
			{
				name: 'city',
				placeholder: 'City'
			},
			{
				name: 'country',
				placeholder: 'Country'
			},
			{
				name: 'postcode',
				placeholder: 'Postal Code'
			},
			/*
			{
				name: 'phone',
				placeholder: 'Phone Number'
			},
			*/
			{
				name: 'email',
				placeholder: 'email@domain.com'
			},
		]
	},

	/*********************/
	/*   UNITED STATES   */
	/*********************/
	
	/* When add a new country, make sure you change here.  if not, will show on selection menu, but will not run use cases */		
	US: {
		appName: 'MyMoney',
		label: 'US',
		description: 'United States',
		region: 'NA',
		language: 'eng',
	/* JSON Seeded information could have different numbers for each country as updates will occur */		
		proposition: 'AO',
		propcase1: '36',
		propcase2: '37',
		propcase3: '38',
		propcase4: '39a',
		propcase5: '40',
		code: 'US',
		ISOCode: 'US',
	/* ID may or may not have backsides,  this variable allows to add or not add picture of backside of ID */			
		DrvIDBackside: true,
		GovIDBackside: true,
		
	/* Allow for default Toggles to be on or off depending on country      - TT 9/10/19 */	
		ShowIdentityVerification: true,
		ShowRiskEngine: true,
		ShowDocumentVerification: true,
		ShowPhoneIntelligence: true,
		ShowEmailRiskScoring: true,
		ShowBehavioralBiometrics: false,
		ShowMachineLearning: false,
				
		persons: [
			[],
			['Sarah', 'Jamison', '02/01/1976', '165-23-9877', '17123 Peachtree Court', 'Boston', 'MA', '02196', '+1 617-536-4100', 'sarahlynnjamison0276@yahoo.com'],
			['Lizzy', 'Grant', '04/04/1983', '512-43-8888', '25301 3rd Avenue APT 184', 'San Francisco', 'CA', '94107', '+1 312-567-8500', 'lizzy_grant@gmail.com'],
			['Elizabeth', 'Grant', '07/04/1983', '512-43-8888', '7146 S Apostle Avenue #8160', 'Chicago', 'IL', '60652', '+1 312-567-8500', 'elizabethgrant83@yahoo.com'],
			['Jeremy', 'Vasquez', '09/18/1999', '754-63-2199', '9715 Rock Maple Street', 'Austin', 'TX', '78759', '+1 512-474-5171', 'jeremyv_007@gmail.com'],
		],
		customTranslations: {
		},
		scenarios: {
			typical: {
				person: 1,
			},
			mismatch: {
				person: 2,
			},
			machine: {
				person: 2,
			},
			fraud: {
				person: 3,
			},
			thin: {
				person: 4,
			}
		},
		fields: [
			{
				name: 'firstName',
				placeholder: 'First Name'
			},
			{
				name: 'lastName',
				placeholder: 'Last Name'
			},
			{
				name: 'dob',
				placeholder: 'DOB - MM/DD/YYYY'
			},
			{
				name: 'ssn',
				placeholder: 'SSN'
			},
			{
				name: 'address',
				placeholder: '123 Streetname Ave'
			},
			{
				name: 'city',
				placeholder: 'City'
			},
			{
				name: 'state',
				placeholder: 'State'
			},
			{
				name: 'zip',
				placeholder: 'ZIP Code'
			},
			{
				name: 'phone',
				placeholder: 'Phone Number'
			},
			{
				name: 'email',
				placeholder: 'email@domain.com'
			},
		]
	},

};
