const { fetchItems } = require("./ebayApi/api");


exports.getEbayItems = (req, res, next) => {
  const { keyword } = req.query;
  console.log(keyword);

 
  const arrOfKeyWords = keyword.split(" ")


 

  fetchItems(arrOfKeyWords)
    .then(items => {
      console.log(items + "in controller")
      
      res.status(200).send({ items });
    })
    .catch(err => {
      next(err);
    });
};
