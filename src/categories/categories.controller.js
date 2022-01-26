const categoriesService = require("./categories.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundry");

async function list(req, res, next) {
  try {
    const data = await categoriesService.list();
    res.json({ data });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  list: asyncErrorBoundary(list),
};
