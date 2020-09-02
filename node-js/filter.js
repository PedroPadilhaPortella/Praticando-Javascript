const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 5
    },
    {
        name: 'lucy',
        type: 'bird',
        age: 2
    },
    {
        name: 'milu',
        type: 'cat',
        age: 6
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    }
]

const idade = pet => pet.age > 4;

const maiores = pets.filter(idade)

console.log(maiores);