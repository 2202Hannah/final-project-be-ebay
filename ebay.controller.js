const { fetchItems } = require("../ebayApi/ebay.model");

exports.getEbayItems = (req, res, next) => {
  const { keyword } = req.query;

  fetchItems(keyword)
    .then(items => {
      
      const itemsToReturn = [];
      items.forEach((word, i) => {
        itemsToReturn.push(...items[i]);
      });
      res.status(200).send({ items: itemsToReturn });
    })
    .catch(err => {
      next(err);
    });
};
