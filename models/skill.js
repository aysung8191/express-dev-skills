const skills = [
    {id: 125223, skill: 'HTML', learn: true},
    {id: 127904, skill: 'CSS', learn: false},
    {id: 139608, skill: 'JavaScript', learn: true},
    {id: 129456, skill: 'Python', learn: false}
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
};