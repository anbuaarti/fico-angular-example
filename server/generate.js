var faker = require('faker');

var database = { customers: []};

for (var i = 1; i<= 1000; i++) {
  database.customers.push({
    customerId: i,
    customerName: faker.name.firstName(),
    age:faker.datatype.number({min: 20, max: 100}),
    qualification: faker.random.arrayElement(['MCA', 'MBA', 'BTech', 'MTech', 'Bsc', 'BA', 'High School']),
    income:faker.datatype.number({min: 20000, max: 10000000}),
    workExperience: faker.datatype.number({min: 1, max: 25}),
    numberOfHouseHolds: faker.datatype.number({min: 1, max: 4}),
    region:faker.random.arrayElement(['North','East', 'South', 'West', 'Central']),
    state:faker.random.arrayElement(['Texas','California','New York','Washington','Louisiana','Illinois','Michigan','Florida','Ohio','Pennsylvania','Georgia','Indiana','New Jersey','South Carolina','North Carolina','Tennessee','Kentucky','Massachusetts','Wisconsin','Minnesota','Arizona','Oregon','Alabama','Virginia','Puerto Rico','Connecticut','Missouri','Utah','Iowa','Maryland','Mississippi','Kansas','Nevada','Colorado','West Virginia','Nebraska','North Dakota','Arkansas','Oklahoma','New Hampshire','Alaska','Delaware','Idaho','New Mexico','Vermont','Maine','District of Columbia','Rhode Island','Montana','South Dakota','Wyoming','Hawaii','U.S. Virgin Islands','American Samoa','Guam','Northern Mariana Islands']),
    address:faker.address.streetAddress(),
    accountBalance: faker.datatype.number(10000000),
    relationShipTenure: faker.datatype.number(25),
    noOfAccounts: faker.datatype.number(5),
    accountType: faker.random.arrayElement(['Savings','Credit Card', 'Loan', 'OverDraft']),
    employmentStatus: faker.random.arrayElement(['Permanent','Part-Time']),
  });
}

console.log(JSON.stringify(database));
