 // Convention is to name the model in uppercase and singular
const Skill = require('../models/skill');

// controllers/todos.js
module.exports = {
    index,
    show
};

// controllers/skills.js
function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
}