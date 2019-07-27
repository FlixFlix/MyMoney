// List of locales
window.locales = {

	/* Sort the countries in Alphabetical order */

	/****************/
	/*   AUSTRALIA  */
	/****************/

	AU: {
		appName: 'MyMoney',
		label: 'Australia',
		description: 'Australia',
		region: 'APAC',
		language: 'Eng',
		proposition: 'AO',
		code: 'AU',
		ISOCode: 'AU',
		DrvIDBackside: true,
		GovIDBackside: false,
		persons: [
			[],
			['Sarah', 'Jamison', '02-01-1976', '165-23-9877', '16521 Morris St, Unit 123', 'Melborn', 'VIC', '3205', '+61 4 7536 4100', 'sarahlynnjamison0276@yahoo.com'],
			['Lizzy', 'Grant', '09-04-1973', '512-43-8888', '1251 Miller St, Unit 123', 'North Sydney', 'NSW', '2058', '+61 4 2567 8500', 'lizzy_grant@gmail.com'],
			['Elizabeth', 'Grant', '09-04-1973', '512-43-8888', '53 Alma Rd, Unit 5a', 'St Kilda', 'VIC', '3182', '+61 4 2567 8500', 'elizabethgrant83@yahoo.com'],
			['Paul', 'Johnson', '09-18-1999', '754-631-2199', '9715 Rock Maple Street', 'Melborn', 'VIC', '3201', '+1 512-474-5171', 'PaulA_007@gmail.com'],
		],
		text: {
			chooseScenario: 'Select Scenario',
			approved: 'Your application was approved!',
			approvedDetails: 'Application details and instructions for accessing your new account will be emailed shortly.',
		},
		scenarios: {
			typical: {
				label: 'Typical Applicant', title: 'Typical applicant: multiple services but no friction',
				description: 'Strategies can be easily configured to conditionally include certain services based on risk while skipping others.',
				person: 1,
			},
			mismatch: {
				label: 'Mismatched Identities', title: 'Step-up for consumer with mismatched identity data',
				description: 'Many applicants have slight identity discrepancies that require costly manual review and application delays.',
				person: 2,
			},
			machine: {
				label: 'Machine Learning', title: 'Avoid unnecessary step-ups using Decision Analytics',
				description: 'Machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.',
				person: 2,
			},
			fraud: {
				label: 'Identity Fraud Attempt', title: 'Step-up for identity fraud attempt',
				description: 'Instantly identify most synthetic and impersonation fraud applications, adding friction to the attacker and referring the case for manual review.',
				person: 3,
			},
			thin: {
				label: 'Thin-file Applicant', title: 'Passive step-up for thin-file applicant',
				description: 'Organizations can quickly and seamlessly incorporate additional phone intelligence or identity verification sources if the applicant was not found in traditional bureau data.',
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
		language: 'POR',
		proposition: 'AO',
		code: 'BR',
		ISOCode: 'BR',
		DrvIDBackside: true,
		GovIDBackside: true,
		persons: [
			[],
			['Sarah', 'Jamison', '02-01-1976', 'AO 12 34 56 A', '23 High Tree Road', 'Nottingham', 'England', 'NG1 3SD', '+44 6175 364100', 'sarahlynnjamison0276@yahoo.com'],
			['Lizzy', 'Grant', '09-04-1973', 'AO 12 34 56 B', '96 Parkfield Road', 'Upper Healy', 'Derby', 'DE23 1GH', '+44 3125 678500', 'lizzy_grant@gmail.com'],
			['Elizabeth', 'Grant', '09-04-1973', 'AO 12 34 56 B', '42 West Wellington Drive', 'Wygston', 'Leicester', 'LE18 6PD', '+44 3125 678500', 'elizabethgrant83@yahoo.com'],
			['Paul', 'Johnson', '09-18-1999', 'OW 07 68 52D', '104 Greyfriars Road', 'Cardiff', 'England', 'CF1 3YQ', '+44 07 0517 11863', 'PaulA_007@gmail.com'],
		],
		text: {
			chooseScenario: 'Elegir Escenario',
			approved: 'Su solicitud fue aprobada!',
			approvedDetails: 'Los detalles de la solicitud y las instrucciones para acceder a su nueva cuenta se enviarán por correo electrónico en breve.',
			'Contact Information': 'Informações de contato',
			'Continue': 'Continuar',
			'Verify Your Identity': 'Verifique sua identidade',
			'We need more information to complete your application.': 'Precisamos de mais informações para concluir sua inscrição.',
			'Take Photo': 'Tirar fotos',
			'Please use the following document verification service to quickly scan the front and back of your government-issued ID and take a selfie to complete the application process.':'Use o seguinte serviço de verificação de documentos para verificar rapidamente a frente e o verso de seu documento de identidade emitido pelo governo e tirar uma selfie para concluir o processo de inscrição.'

		},
		scenarios: {
			typical: {
				label: 'Solicitante típico', title: 'Solicitante típico: múltiples servicios pero sin fricción.',
				description: 'Las estrategias de Se pueden configurar fácilmente para incluir condicionalmente ciertos servicios basados en el riesgo mientras se omiten otros.',
				person: 1,
			},
			mismatch: {
				label: 'Discrepancias de identidad', title: 'Paso a paso para el consumidor con datos de identidad no coincidentes',
				description: 'Muchos solicitantes tienen discrepancias de identidad leves que requieren una revisión manual costosa y demoras en la solicitud.',
				person: 2,
			},
			machine: {
				label: 'Machine Learning', title: 'Avoid unnecessary step-ups using Decision Analytics',
				description: 'Machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.',
				person: 2,
			},
			fraud: {
				label: 'Identity Fraud Attempt', title: 'Step-up for identity fraud attempt',
				description: 'Instantly identify most synthetic and impersonation fraud applications, adding friction to the attacker and referring the case for manual review.',
				person: 3,
			},
			thin: {
				label: 'Thin-file Applicant', title: 'Passive step-up for thin-file applicant',
				description: 'Organizations can quickly and seamlessly incorporate additional phone intelligence or identity verification sources if the applicant was not found in traditional bureau data.',
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
		language: 'SPA',
		proposition: 'AO',
		code: 'CO',
		ISOCode: 'CO',
		DrvIDBackside: true,
		GovIDBackside: false,
		persons: [
			[],
			['Olga', 'Jiménez', '02-01-1976', '36 123456', 'Cr 108 No. 23B-50, C.P 11001', 'Bogotá', 'Bogotá', '111911', '+57 15433025', 'OlgaJiménez0276@yahoo.com'],
			['Orla', 'Muñoz', '09-04-1973', '37 654321', 'Cr 72 No. 74B-39, C.P 11001', 'Medellin', 'Antioquia', '050001', '+57 12529697', 'Orla_Muñoz@gmail.com'],
			['Orlando', 'Muñoz', '09-04-1973', '37 654321', 'Cr 7 No. 23B-31, C.P 12341', 'Santiago de Cali', 'Velle Del Cauca', '760001', '+44 3125 678500', 'OrlandoMuñoz83@yahoo.com'],
			['Jonathan', 'Ramírez', '09-18-1999', '62 121212', 'Cr 8 No. 16-68, C.P 66001', 'Patico', 'Bolivar', '132547', '+57 63331353', 'JonathanRamírez_007@gmail.com'],
		],
		text: {
			chooseScenario: 'Elegir Escenario',
			approved: 'Su solicitud fue aprobada!',
			approvedDetails: 'Los detalles de la solicitud y las instrucciones para acceder a su nueva cuenta se enviarán por correo electrónico en breve.',
		},
		scenarios: {
			typical: {
				label: 'Solicitante típico', title: 'Solicitante típico: múltiples servicios pero sin fricción.',
				description: 'Las estrategias de Se pueden configurar fácilmente para incluir condicionalmente ciertos servicios basados en el riesgo mientras se omiten otros.',
				person: 1,
			},
			mismatch: {
				label: 'Discrepancias de identidad', title: 'Paso a paso para el consumidor con datos de identidad no coincidentes',
				description: 'Muchos solicitantes tienen discrepancias de identidad leves que requieren una revisión manual costosa y demoras en la solicitud.',
				person: 2,
			},
			machine: {
				label: 'Aprendizaje automático', title: 'Evite avances innecesarios utilizando Decision Analytics',
				description: 'Los modelos de aprendizaje automático de Decision Analytics están entrenados en combinaciones de datos históricos para tomar la mejor decisión posible y limitar la necesidad de avances que agreguen fricción.',
				person: 2,
			},
			fraud: {
				label: 'Una grieta en el fraude de identidad', title: 'Intensificación para intento de fraude de identidad',
				description: 'Identifica instantáneamente la mayoría de las aplicaciones de fraude de imitación y sintéticas, lo que agrega fricción al atacante y remite el caso para su revisión manual.',
				person: 3,
			},
			thin: {
				label: 'Solicitante de archivo fino', title: 'Pasivo paso a paso para el solicitante de archivo delgado',
				description: 'Las organizaciones pueden incorporar de manera rápida y sin problemas fuentes adicionales de inteligencia de teléfono o verificación de identidad si el solicitante no se encuentra en los datos de oficina tradicionales.',
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

	/****************/
	/*   INDIA      */
	/****************/

	IN: {
		appName: 'MyMoney',
		label: 'India',
		description: 'India',
		region: 'APAC',
		language: 'Eng',
		proposition: 'AO',
		code: 'IN',
		ISOCode: 'IN',
		DrvIDBackside: true,
		GovIDBackside: false,
		persons: [
			[],
			['Nikitha', 'Mody', '02-01-1976', '9423 3484 9843', '65, Shop, Sv Lane, Mamulpet', 'Bangalore', 'Karnataka', '560053', '+91 9008 822814', 'NikithaMody0276@yahoo.com'],
			['Pooh', 'Parikh', '09-04-1973', '9454 2354 9765', 'Raj Chamber Bldg, Manchubhai Road, Malad (east)', 'Mumbai', 'Maharashtra', '400097', '+91 9405 887246', 'Pooh_Parikh@gmail.com'],
			['Pooja', 'Parikh', '09-04-1973', '9454 2354 9765', '83, Qutab View Apartments, Katwaria Sarai', 'New Delhi', 'Delhi', '110016', '+91 9716 436788', 'PoojaParikh83@yahoo.com'],
			['Arun', 'Pillai', '09-18-1999', '9453 3221 9542', '46, Himalaya House, Palton Road', 'Mumbai', 'Maharashtra', '400001', '+91 9421 892639', 'ArunPillai_007@gmail.com'],
		],
		text: {
			chooseScenario: 'Select Scenario',
			approved: 'Your application was approved!',
			approvedDetails: 'Application details and instructions for accessing your new account will be emailed shortly.',
		},
		scenarios: {
			typical: {
				label: 'Typical Applicant', title: 'Typical applicant: multiple services but no friction',
				description: 'Strategies can be easily configured to conditionally include certain services based on risk while skipping others.',
				person: 1,
			},
			mismatch: {
				label: 'Mismatched Identities', title: 'Step-up for consumer with mismatched identity data',
				description: 'Many applicants have slight identity discrepancies that require costly manual review and application delays.',
				person: 2,
			},
			machine: {
				label: 'Machine Learning', title: 'Avoid unnecessary step-ups using Decision Analytics',
				description: 'Machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.',
				person: 2,
			},
			fraud: {
				label: 'Identity Fraud Attempt', title: 'Step-up for identity fraud attempt',
				description: 'Instantly identify most synthetic and impersonation fraud applications, adding friction to the attacker and referring the case for manual review.',
				person: 3,
			},
			thin: {
				label: 'Thin-file Applicant', title: 'Passive step-up for thin-file applicant',
				description: 'Organizations can quickly and seamlessly incorporate additional phone intelligence or identity verification sources if the applicant was not found in traditional bureau data.',
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
		language: 'Eng',
		proposition: 'AO',
		code: 'ID',
		ISOCode: 'ID',
		DrvIDBackside: true,
		GovIDBackside: false,
		persons: [
			[],
			['Ratna Utari', 'Oesman', '02-01-1976', '22 5600 760201 1234', 'Ged Surveyor Indonesia Lt Basement/LB 40', 'Kebayoran Baru', 'Jakarta', '12110', '021 7220074', 'RatanOesman0276@yahoo.com'],
			['Tanu', 'Sasmita', '09-04-1973', '32 2300 790201 1234', 'Kompl Puri Tanjung Sari 2 50', 'Medan', 'Sumatera Utara', '20028', '061 8221782', 'Tanu_Sasmita@gmail.com'],
			['Tanudisastro Bo', 'Sasmita', '09-04-1973', '32 2300 790201 1234', 'Jl Darmo Permai Tmr IV/18', 'Surabaya', 'Jawa Timur', '60111', '031 7340468', 'TanudisastroSasmita83@yahoo.com'],
			['Ary Bambang', 'Hardja', '09-18-1999', '27 3400 990918 1234', 'Jl HR Rasuna Said Kav 2-3 Bl X-5 Menara Kadin Indonesia Bl X-5 Lt', 'Kuningan', 'Jakarta', '400001', '021 5274547', 'AryHardja_007@gmail.com'],
		],
		text: {
			chooseScenario: 'Select Scenario',
			approved: 'Your application was approved!',
			approvedDetails: 'Application details and instructions for accessing your new account will be emailed shortly.',
		},
		scenarios: {
			typical: {
				label: 'Typical Applicant', title: 'Typical applicant: multiple services but no friction',
				description: 'Strategies can be easily configured to conditionally include certain services based on risk while skipping others.',
				person: 1,
			},
			mismatch: {
				label: 'Mismatched Identities', title: 'Step-up for consumer with mismatched identity data',
				description: 'Many applicants have slight identity discrepancies that require costly manual review and application delays.',
				person: 2,
			},
			machine: {
				label: 'Machine Learning', title: 'Avoid unnecessary step-ups using Decision Analytics',
				description: 'Machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.',
				person: 2,
			},
			fraud: {
				label: 'Identity Fraud Attempt', title: 'Step-up for identity fraud attempt',
				description: 'Instantly identify most synthetic and impersonation fraud applications, adding friction to the attacker and referring the case for manual review.',
				person: 3,
			},
			thin: {
				label: 'Thin-file Applicant', title: 'Passive step-up for thin-file applicant',
				description: 'Organizations can quickly and seamlessly incorporate additional phone intelligence or identity verification sources if the applicant was not found in traditional bureau data.',
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
		language: 'Eng',
		proposition: 'AO',
		code: 'UK',
		ISOCode: 'GB',
		DrvIDBackside: true,
		GovIDBackside: false,
		persons: [
			[],
			['Sarah', 'Jamison', '02-01-1976', 'AO 12 34 56 A', '23 High Tree Road', 'Nottingham', 'England', 'NG1 3SD', '+44 6175 364100', 'sarahlynnjamison0276@yahoo.com'],
			['Lizzy', 'Grant', '09-04-1973', 'AO 12 34 56 B', '96 Parkfield Road', 'Upper Healy', 'Derby', 'DE23 1GH', '+44 3125 678500', 'lizzy_grant@gmail.com'],
			['Elizabeth', 'Grant', '09-04-1973', 'AO 12 34 56 B', '42 West Wellington Drive', 'Wygston', 'Leicester', 'LE18 6PD', '+44 3125 678500', 'elizabethgrant83@yahoo.com'],
			['Paul', 'Johnson', '09-18-1999', 'OW 07 68 52D', '104 Greyfriars Road', 'Cardiff', 'England', 'CF1 3YQ', '+44 07 0517 11863', 'PaulA_007@gmail.com'],
		],
		text: {
			chooseScenario: 'Choose Scenario',
			approved: 'Your application was approved!',
			approvedDetails: 'Application details and instructions for accessing your new account will be emailed shortly.',
			contactInformation: 'Contact Information',
		},
		scenarios: {
			typical: {
				label: 'Typical Applicant', title: 'Typical applicant: multiple services but no friction',
				description: 'Strategies can be easily configured to conditionally include certain services based on risk while skipping others.',
				person: 1,
			},
			mismatch: {
				label: 'Identity Discrepancies', title: 'Step-up for consumer with mismatched identity data',
				description: 'Many applicants have slight identity discrepancies that require costly manual review and application delays.',
				person: 2,
			},
			machine: {
				label: 'Machine Learning', title: 'Avoid unnecessary step-ups using Decision Analytics',
				description: 'Machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.',
				person: 2,
			},
			fraud: {
				label: 'Identity Fraud Attempt', title: 'Step-up for identity fraud attempt',
				description: 'Instantly identify most synthetic and impersonation fraud applications, adding friction to the attacker and referring the case for manual review.',
				person: 3,
			},
			thin: {
				label: 'Thin-file Applicant', title: 'Passive step-up for thin-file applicant',
				description: 'Organizations can quickly and seamlessly incorporate additional phone intelligence or identity verification sources if the applicant was not found in traditional bureau data.',
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
		language: 'Eng',
		proposition: 'AO',
		code: 'US',
		ISOCode: 'US',
		DrvIDBackside: true,
		GovIDBackside: true,
		persons: [
			[],
			['Sarah', 'Jamison', '02/01/1976', '165-23-9877', '17123 Peachtree Court', 'Boston', 'MA', '02196', '617-536-4100', 'sarahlynnjamison0276@yahoo.com'],
			['Lizzy', 'Grant', '04/04/1983', '512-43-8888', '25301 3rd Avenue APT 184', 'San Francisco', 'CA', '94107', '312-567-8500', 'lizzy_grant@gmail.com'],
			['Elizabeth', 'Grant', '07/04/1983', '512-43-8888', '7146 S Apostle Avenue #8160', 'Chicago', 'IL', '60652', '312-567-8500', 'elizabethgrant83@yahoo.com'],
			['Jeremy', 'Vasquez', '09/18/1999', '754-63-2199', '9715 Rock Maple Street', 'Austin', 'TX', '78759', '512-474-5171', 'jeremyv_007@gmail.com'],
		],
		text: {
			chooseScenario: 'Select Scenario',
			approved: 'Your application was approved!',
			approvedDetails: 'Application details and instructions for accessing your new account will be emailed shortly.',
		},
		scenarios: {
			typical: {
				label: 'Typical Applicant', title: 'Typical applicant: multiple services but no friction',
				description: 'Strategies can be easily configured to conditionally include certain services based on risk while skipping others.',
				person: 1,
			},
			mismatch: {
				label: 'Mismatched Identities', title: 'Step-up for consumer with mismatched identity data',
				description: 'Many applicants have slight identity discrepancies that require costly manual review and application delays.',
				person: 2,
			},
			machine: {
				label: 'Machine Learning', title: 'Avoid unnecessary step-ups using Decision Analytics',
				description: 'Machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.',
				person: 2,
			},
			fraud: {
				label: 'Identity Fraud Attempt', title: 'Step-up for identity fraud attempt',
				description: 'Instantly identify most synthetic and impersonation fraud applications, adding friction to the attacker and referring the case for manual review.',
				person: 3,
			},
			thin: {
				label: 'Thin-file Applicant', title: 'Passive step-up for thin-file applicant',
				description: 'Organizations can quickly and seamlessly incorporate additional phone intelligence or identity verification sources if the applicant was not found in traditional bureau data.',
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
