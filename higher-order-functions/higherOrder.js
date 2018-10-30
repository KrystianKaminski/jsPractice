const companies = [{
        name: "Company One",
        category: "Finance",
        start: 1981,
        end: 2004
    },
    {
        name: "Company Two",
        category: "Retail",
        start: 1992,
        end: 2008
    },
    {
        name: "Company Three",
        category: "Auto",
        start: 1999,
        end: 2007
    },
    {
        name: "Company Four",
        category: "Retail",
        start: 1989,
        end: 2010
    },
    {
        name: "Company Five",
        category: "Technology",
        start: 2009,
        end: 2014
    },
    {
        name: "Company Six",
        category: "Finance",
        start: 1987,
        end: 2010
    },
    {
        name: "Company Seven",
        category: "Auto",
        start: 1986,
        end: 1996
    },
    {
        name: "Company Eight",
        category: "Technology",
        start: 2011,
        end: 2016
    },
    {
        name: "Company Nine",
        category: "Retail",
        start: 1981,
        end: 1989
    }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// forEach

// companies.forEach((company) => {
//     console.log(company.name);
// });

// filter

const canDrink = ages.filter((age) => {
    if (age >= 21) {
        return true;
    }
});

// console.log(canDrink);

const retailCompanies = companies.filter((company) => {
    if (company.category === 'Retail') {
        return true;
    }
});

// console.log(retailCompanies);

// Get 80s companies

const eightiesCompanies = companies.filter(company => {
    if (company.start >= 1980 && company.start <= 1989) {
        return true;
    }
});

// console.log(eightiesCompanies);

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

// console.log(lastedTenYears);


// MAP

// Create array of company names


const companyNames = companies.map((company) => {
    return company.name;
});

// console.log(companyNames);

const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);

// console.log(ageMap);


// SORT

const sortedCompanies = companies.sort((comp1, comp2) => {
    if (comp1.start > comp2.start) {
        return 1;
    } else {
        return -1;
    }
});

const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);



// console.log(sortedCompanies);


// REDUCE


// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }

const ageSum = ages.reduce((total, age) => {
    return total + age;
}, 0);

// Get total years from all companies

const totalYears = companies.reduce((total, company) => {
    return total + (company.end - company.start);
}, 0);

// console.log(ageSum);

// console.log(totalYears);

// COMBINE METHODS

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

console.log(combined);