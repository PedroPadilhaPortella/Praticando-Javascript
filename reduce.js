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
        type: 'dog',
        age: 9
    },
    {
        name: 'neno',
        type: 'pig',
        age: 8
    }
]


const idades = pets.reduce((total, pet) => {
    if(pet.type !== 'dog') return total

    return total + pet.age
}, 0)

console.log(idades)