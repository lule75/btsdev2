'use strict';
var countrycodes = (function() { // eslint-disable-line no-unused-vars

var IOC_TABLE = {
	//I have removed the other countries and Maintained only Universities
	'MUK': 'Makerere University',
	'MUB': 'Makerere Business School',
	'KIU': 'Kampala International University',
	'IUI': 'Islamic University In Uganda',
	'VIC': 'Victoria University',
	'KYA': 'Kyambogo University',
	'GLU': 'Gulu University',
	'BUS': 'Busitema University',
	'KLU': 'Kampala University',
	'SOR': 'SOROTI UNIVERSITY',
	'KHM': 'Kinawa High School Mugongo',
	'KHK': 'Kinawa High School Kawemmpe',
	'LUB': 'Lubiri Secondary School',
	'RUB': 'Rubaga Girls School',
	'MHS': 'Mariam High School',
	'MNG': 'Mengo Senior School',
	'NBS': 'Nabisunsa Girls School',
	'STM': 'St Micheal International School',
	'BCM': 'Busoga College Mwiri',
	'JIC': 'Jinja College',
	'KSS': 'Kibuli Secondary School',
	'SCH': 'Seroma Christian High School',
	'SMH': 'St Micheal High School',
	'SJS': 'St Joseph Senior School',
	'SAC': 'Seeta A-Level Campus',
	'MSS': 'Masaka Secondary School',
	'SHC': 'St Henrys College Kitovu',
	'NSC': 'Ntare School',
	'MHS': 'Mbarara High School',
	'SJV': 'St Josephs Vocational School Mbarara',
	'SMC': 'St Marys College School Kisubi',
	'SMI': 'St Micheal International School',
    'KCB': 'Kings College School Buddo',
    'CCK': 'Comprehensive College Kitetika',
    'SPN': 'St Peters Secondary School Naalya',
 	'MBG': 'Mbogo High School',
	'KMS': 'Kakungulu Memorial School',
 	'MSM': 'Mt St Marys Namagunga',
 	'SMS': 'St. Micheal High School Sonde',
 	'SHG': 'Seta High School Green Campus',
 	'STJ': 'St. Joseph Senior School',
 	'SML': 'St Marys College Lugazi',
 	'SGS': 'Sheema Girls Sec School',
 	'ISS': 'Isingiro Secondary School',
 	'KGS': 'Kashaka Girls Secondary School',
 	'KAS': 'Kawanda Secondary School',
 	'GHS': 'Gayaza High Schoool',
 	'TCN': 'Trinity College Nabbingo',
	
};

function lookup(code) {
	return IOC_TABLE[code] || code;
}

return {
	lookup: lookup,
	TABLE: IOC_TABLE, // Used by bts
};
})();


