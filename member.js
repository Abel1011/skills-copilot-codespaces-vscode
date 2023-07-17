function skillsMember() {
    var skills = ["HTML", "CSS", "JS", "PHP"];
    var member = {
        name: "John",
        age: 25,
        skills: skills,
        addSkill: function (skill) {
            this.skills.push(skill);
        }
    };
    member.addSkill("React");
    console.log(member.skills);
}