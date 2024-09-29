const db = require("./client");

const dataMapper = {
  async getLatestsProducts() {
    const result = await db.query(`SELECT * FROM coffees ORDER BY RANDOM() LIMIT 3 `);
    const products = result.rows;
    return products;
  },

  async getAllproducts () {
    const result = await db.query(`SELECT * FROM coffees ORDER BY name ASC `);
    const products = result.rows;
    return products;

  },

  async getAllproductsForCarrousel() {
    const result = await db.query(`SELECT * FROM coffees ORDER BY RANDOM()`);
    const randomProducts = result.rows;
    return randomProducts;

  },

  async getOneproduct (id) {
    const query = `SELECT * FROM coffees WHERE id = $1`;
    const result = await db.query(query, [id]);
    return  result.rows[0];
  },



};

module.exports = dataMapper;