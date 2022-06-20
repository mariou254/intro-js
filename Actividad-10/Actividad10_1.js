const Family = [{
        name: 'John',
        age: 13
    },
    {
        name: 'Mark',
        age: 56
    },
    {
        name: 'Rachel',
        age: 45
    },
    {
        name: 'Nate',
        age: 67
    },
    {
        name: 'Jeniffer',
        age: 65
    },
    {
        name: 'Martha',
        age: 25
    }
];
function difAges(family) {
    ages = family.map(function (person) {
        return person.age;
    })

    youngest = ages.sort(function (a, b) {
        return a - b
    })[0]
    oldest = ages.sort(function (a, b) {
        return b - a
    })[0]

    // Regresa como resultado, sus respectivas edades y la diferencia de edad. 
    console.log(`El  mas joven tiene ${youngest} años, y el mas viejo tiene ${oldest} años`);
    console.log(`La diferiencia de edad  es de ${oldest - youngest} años`);
}

difAges(Family);