// List of locales
// Country codes according to ISO 3166-1
window.locales = {

	/* Please add countries in alphabetical order */

	/****************/
	/*   AUSTRALIA  */
	/****************/

	AU: {
		appName: 'MyMoney',
		label: 'Australia',
		description: 'Australia',
		region: 'APAC',
		language: 'eng',
	/* JSON Seeded information could have different numbers for each country as updates will occur */		
		proposition: 'AO',
		propcase1: '01',
		propcase2: '02',
		propcase3: '03',
		propcase4: '04',
		propcase5: '05',
		code: 'AU',
		ISOCode: 'AU',
	/* ID may or may not have backsides,  this variable allows to add or not add picture of backside of ID */	
		DrvIDBackside: true,
		GovIDBackside: false,
		persons: [
			[],
			['Sarah', 'Jamison', '02-01-1976', '165-239-877', '16521 Morris St, Unit 123', 'South Melbourne', 'VIC', '3205', '+61 4 7536 4100', 'sarahlynnjamison0276@yahoo.com'],
			['Lizzy', 'Grant', '04-09-1973', '512-438-888', '1251 Miller St, Unit 123', 'North Sydney', 'NSW', '2060', '+61 4 2567 8500', 'lizzy_grant@gmail.com'],
			['Elizabeth', 'Grant', '04-09-1973', '512-438-888', '53 Alma Rd, Unit 5a', 'St Kilda', 'VIC', '3182', '+61 4 2567 8500', 'elizabethgrant83@yahoo.com'],
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

	BR: {
		appName: 'MyMoney',
		label: 'Brazil',
		description: 'Brazil',
		region: 'LATAM',
		language: 'por',
	/* JSON Seeded information could have different numbers for each country as updates will occur */		
		proposition: 'AO',
		propcase1: '01',
		propcase2: '02',
		propcase3: '03',
		propcase4: '04',
		propcase5: '05',
		code: 'BR',
		ISOCode: 'BR',
	/* ID may or may not have backsides,  this variable allows to add or not add picture of backside of ID */	
		DrvIDBackside: false,
		GovIDBackside: false,
		persons: [
			[],
			['Mariana', 'Gomes', '02-01-1976', '342.665.382-60', 'Rua Pernambucana 146', 'Osasco', 'São Paulo', '06140-040', '(11) 4223-4095', 'MarianaGomes0276@yahoo.com'],
			['Bea', 'Almeida', '04-09-1973', '489.085.995-09', 'Rua Três 1656', 'Belo Horizonte', 'Minas Gerais', '13082-665', '(19) 7874-3886', 'Bea_Almeida@gmail.com'],
			['Beatriz', 'Almeida', '04-09-1973', '489.085.995-09', 'Travessa Araci 196', 'Duque de Caxias', 'Rio de Janeiro', '125272-440', '(21) 8299-4630', 'BeatrizAlmeida83@yahoo.com'],
			['Vicente', 'Fontes', '18-09-1999', '489.085.995-09', 'Rua Reverendo 617', 'Belford Roxo', 'Rio de Janeiro', '26143-435', '(21) 2275-6677', 'VicenteF_007@gmail.com'],
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

	CO: {
		appName: 'MyMoney',
		label: 'Colombia',
		description: 'Colombia',
		region: 'LATAM',
		language: 'spa',
	/* JSON Seeded information could have different numbers for each country as updates will occur */		
		proposition: 'AO',
		propcase1: '01',
		propcase2: '02',
		propcase3: '03',
		propcase4: '04',
		propcase5: '05',
		code: 'CO',
		ISOCode: 'CO',
	/* ID may or may not have backsides,  this variable allows to add or not add picture of backside of ID */			
		DrvIDBackside: false,
		GovIDBackside: false,
		persons: [
			[],
			/* Before removed postal codes
			['Natalia', 'Ramírez', '02-01-1976', '36 123456', 'Cr 108 No. 23B-50, C.P 11001', 'Bogotá', 'Bogotá', '111911', '+57 15433025', 'NataliaRamirez0276@yahoo.com'],
			['Juanita', 'García', '04-09-1973', '37 654321', 'Cr 72 No. 74B-39, C.P 11001', 'Medellin', 'Antioquia', '050001', '+57 12529697', 'Juanita_García@gmail.com'],
			['Juana', 'García', '04-09-1973', '37 654321', 'Cr 7 No. 23B-31, C.P 12341', 'Santiago de Cali', 'Velle Del Cauca', '760001', '+44 3125 678500', 'JuanaGarcía83@yahoo.com'],
			['Pedro', 'Martínez', '18-09-1999', '62 121212', 'Cr 8 No. 16-68, C.P 66001', 'Patico', 'Bolivar', '132547', '+57 63331353', 'PedroMartínez_007@gmail.com'],
			*/
			['Natalia', 'Ramírez', '02-01-1976', '36 123456', 'Cr 108 No. 23B-50, C.P 11001', 'Bogotá', 'Bogotá', '+57 15433025', 'NataliaRamirez0276@yahoo.com'],
			['Juanita', 'García', '04-09-1973', '37 654321', 'Cr 72 No. 74B-39, C.P 11001', 'Medellin', 'Antioquia', '+57 12529697', 'Juanita_García@gmail.com'],
			['Juana', 'García', '04-09-1973', '37 654321', 'Cr 7 No. 23B-31, C.P 12341', 'Santiago de Cali', 'Velle Del Cauca', '+44 3125 678500', 'JuanaGarcía83@yahoo.com'],
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

	IN: {
		appName: 'MyMoney',
		label: 'India',
		description: 'India',
		region: 'APAC',
		language: 'eng',
	/* JSON Seeded information could have different numbers for each country as updates will occur */		
		proposition: 'AO',
		propcase1: '01',
		propcase2: '02',
		propcase3: '03',
		propcase4: '04',
		propcase5: '05',
		code: 'IN',
		ISOCode: 'IN',
	/* ID may or may not have backsides,  this variable allows to add or not add picture of backside of ID */			
		DrvIDBackside: true,
		GovIDBackside: false,
		persons: [
			[],
			['Nikitha', 'Mody', '02-01-1976', '9423 3484 9843', '65, Shop, Sv Lane, Mamulpet', 'Bangalore', 'Karnataka', '560053', '+91 9008 822814', 'NikithaMody0276@yahoo.com'],
			['Pooh', 'Parikh', '09-04-1973', '9454 2354 9765', 'Raj Chamber Bldg, Manchubhai Road, Malad (east)', 'Mumbai', 'Maharashtra', '400097', '+91 9405 887246', 'Pooh_Parikh@gmail.com'],
			['Pooja', 'Parikh', '09-04-1973', '9454 2354 9765', '83, Qutab View Apartments, Katwaria Sarai', 'New Delhi', 'Delhi', '110016', '+91 9716 436788', 'PoojaParikh83@yahoo.com'],
			['Arun', 'Pillai', '09-18-1999', '9453 3221 9542', '46, Himalaya House, Palton Road', 'Mumbai', 'Maharashtra', '400001', '+91 9421 892639', 'ArunPillai_007@gmail.com'],
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
				name: 'UIDAI',
				placeholder: 'UIDAI'
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

	ID: {
		appName: 'MyMoney',
		label: 'Indonesia',
		description: 'Indonesia',
		region: 'APAC',
		language: 'ind',
	/* JSON Seeded information could have different numbers for each country as updates will occur */		
		proposition: 'AO',
		propcase1: '01',
		propcase2: '02',
		propcase3: '03',
		propcase4: '04',
		propcase5: '05',
		code: 'ID',
		ISOCode: 'ID',
	/* ID may or may not have backsides,  this variable allows to add or not add picture of backside of ID */			
		DrvIDBackside: true,
		GovIDBackside: false,
		persons: [
			[],
			['Ratna Utari', 'Oesman', '02-01-1976', '22 5600 760201 1234', 'Ged Surveyor Indonesia Lt Basement/LB 40', 'Kebayoran Baru', 'Jakarta', '12110', '021 7220074', 'RatanOesman0276@yahoo.com'],
			['Tanu', 'Sasmita', '04-09-1973', '32 2300 790201 1234', 'Kompl Puri Tanjung Sari 2 50', 'Medan', 'Sumatera Utara', '20028', '061 8221782', 'Tanu_Sasmita@gmail.com'],
			['Tanudisastro Bo', 'Sasmita', '04-09-1973', '32 2300 790201 1234', 'Jl Darmo Permai Tmr IV/18', 'Surabaya', 'Jawa Timur', '60111', '031 7340468', 'TanudisastroSasmita83@yahoo.com'],
			['Ary Bambang', 'Hardja', '18-09-1999', '27 3400 990918 1234', 'Jl HR Rasuna Said Kav 2-3 Bl X-5 Menara Kadin Indonesia Bl X-5 Lt', 'Kuningan', 'Jakarta', '400001', '021 5274547', 'AryHardja_007@gmail.com'],
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

	/**********************/
	/*   UNITED KINGDOM   */
	/**********************/

	UK: {
		appName: 'MyMoney',
		label: 'UK',
		description: 'United Kingdom',
		region: 'UK',
		language: 'eng',
	/* JSON Seeded information could have different numbers for each country as updates will occur */		
		proposition: 'AO',
		propcase1: '01',
		propcase2: '02',
		propcase3: '03',
		propcase4: '04',
		propcase5: '05',
		code: 'UK',
		ISOCode: 'GB',
	/* ID may or may not have backsides,  this variable allows to add or not add picture of backside of ID */			
		DrvIDBackside: true,
		GovIDBackside: false,
		persons: [
			[],
			['Sarah', 'Jamison', '02-01-1976', 'AO 12 34 56 A', '23 High Tree Road', 'Nottingham', 'England', 'NG1 3SD', '+44 6175 364100', 'sarahlynnjamison0276@yahoo.com'],
			['Lizzy', 'Grant', '04-09-1973', 'AO 12 34 56 B', '96 Parkfield Road', 'Upper Healy', 'Derby', 'DE23 1GH', '+44 3125 678500', 'lizzy_grant@gmail.com'],
			['Elizabeth', 'Grant', '04-09-1973', 'AO 12 34 56 B', '42 West Wellington Drive', 'Wygston', 'Leicester', 'LE18 6PD', '+44 3125 678500', 'elizabethgrant83@yahoo.com'],
			['Paul', 'Johnson', '18-09-1999', 'OW 07 68 52D', '104 Greyfriars Road', 'Cardiff', 'England', 'CF1 3YQ', '+44 07 0517 11863', 'PaulA_007@gmail.com'],
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

	/*********************/
	/*   UNITED STATES   */
	/*********************/
	US: {
		appName: 'MyMoney',
		label: 'US',
		description: 'United States',
		region: 'NA',
		language: 'eng',
	/* JSON Seeded information could have different numbers for each country as updates will occur */		
		proposition: 'AO',
		propcase1: '01',
		propcase2: '02',
		propcase3: '03',
		propcase4: '04',
		propcase5: '05',
		code: 'US',
		ISOCode: 'US',
	/* ID may or may not have backsides,  this variable allows to add or not add picture of backside of ID */			
		DrvIDBackside: true,
		GovIDBackside: true,
		persons: [
			[],
			['Sarah', 'Jamison', '02/01/1976', '165-23-9877', '17123 Peachtree Court', 'Boston', 'MA', '02196', '617-536-4100', 'sarahlynnjamison0276@yahoo.com'],
			['Lizzy', 'Grant', '04/04/1983', '512-43-8888', '25301 3rd Avenue APT 184', 'San Francisco', 'CA', '94107', '312-567-8500', 'lizzy_grant@gmail.com'],
			['Elizabeth', 'Grant', '07/04/1983', '512-43-8888', '7146 S Apostle Avenue #8160', 'Chicago', 'IL', '60652', '312-567-8500', 'elizabethgrant83@yahoo.com'],
			['Jeremy', 'Vasquez', '09/18/1999', '754-63-2199', '9715 Rock Maple Street', 'Austin', 'TX', '78759', '512-474-5171', 'jeremyv_007@gmail.com'],
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
