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
    },
    {
        name: 'chowpy',
        type: 'pigeon',
        age: 9
    },
    {
        name: 'neno',
        type: 'pig',
        age: 8
    }
]

const names = pets => pets.name;

const petNames = pets.map(names)

console.log(petNames)