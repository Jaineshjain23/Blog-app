const { authJwt } = require("../middlewares");
const controller = require("../controllers/blog.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/blog", [authJwt.verifyToken], controller.findAll);
  app.post("/api/blog", [authJwt.verifyToken], controller.create);
  app.put("/api/blog/:id", [authJwt.verifyToken], controller.update);
  app.get("/api/blog/:id", [authJwt.verifyToken], controller.findOne);
  app.delete("/api/blog/:id", [authJwt.verifyToken], controller.delete);
  
};
