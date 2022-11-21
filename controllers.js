const { fetchItems } = require("./ebayApi/api");

exports.getEbayItems = (req, res, next) => {
  const { keyword } = req.query;
  //console.log(keyword);
  const arrOfKeyWords = keyword.split(" ");

  fetchItems(arrOfKeyWords)
    .then((items) => {
      const itemsToReturn = [];
      arrOfKeyWords.forEach((word, i) => {
        itemsToReturn.push(...items[i]);
      });
      console.log(itemsToReturn.length, "in controller");
      res.status(200).send({ items: itemsToReturn });
    })
    .catch((err) => {
      next(err);
    });
};
