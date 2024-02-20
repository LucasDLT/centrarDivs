const {Router} = require("express");
const router = Router();
const controladorRaiz = require("../controllers/controllerRaiz");

router.get("/", controladorRaiz )


module.exports = router;