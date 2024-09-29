const { Router } = require("express");
const mainController = require("./controllers/mainController");

const router = Router();

router.get("/", mainController.renderHomePage);

router.get("/catalog", mainController.renderCatalogPage);
router.get("/product/:id", mainController.renderCoffeeDetailsPage);
router.get("/boutique",mainController.renderBoutiquePage);

router.use((req, res) => {
  res.status(404).render("pages/notFound");
});

module.exports = router;