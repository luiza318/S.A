const repo = require("../repositories/user.repo");

async function me(req, res, next) {
  try {
    const user = await repo.findById(req.user.id);
    res.json(user);
  } catch (e) { next(e); }
}

async function update(req, res, next) {
  try{
    const { name, birth_date } = req.body;
    await repo.updateUser(req.user.id, name, birth_date);
    const user = await repo.findById(req.user.id);
    res.json(user);
  } catch(e){ next(e);}
}

module.exports = { me, update };