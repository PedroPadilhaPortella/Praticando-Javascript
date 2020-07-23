function temHabilidade(skills) {
    var contain = false;
    skills.forEach(element => {
        if(element === 'Javascript') contain =  true;
    });
    return contain;
    }
var skills = ["Javascript", "ReactJS", "React Native"]
console.log(temHabilidade(skills)); // true ou false