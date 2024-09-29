const dataMapper = require("../database/dataMapper");

const mainController = {
  async renderHomePage(req, res) {
    const products = await dataMapper.getLatestsProducts();
    const randomProducts = await dataMapper.getAllproductsForCarrousel();
    res.render("pages/index", { products, randomProducts });
  },
  

  async renderCatalogPage(req, res) {
    const products = await dataMapper.getAllproducts();

    res.render("pages/catalog", { products });
  },

  async renderCoffeeDetailsPage(req, res) {
    try {
      const productId = parseInt(req.params.id, 10);
      const product = await dataMapper.getOneproduct(productId);
      if (product) {
        res.render("pages/product", { product });
      } else {
        res.status(404).render("pages/notFound");
      }
    } catch (error) {
      console.error("Error frtching product:", error);
    }
  },

  renderBoutiquePage(req, res) {
    res.render("pages/boutique");
  },
};

module.exports = mainController;
