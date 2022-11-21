const axios = require("axios");
const tokenGenerator = require("./tokenGenerator.js");

const fetchItems = keyword => {
  if (!keyword) {
    return Promise.reject({
      status: 404,
      msg: "no keyword provided"
    });
  } else {
    const arrOfKeyWords = keyword.split(" ");

    const limit = Math.floor(10 / arrOfKeyWords.length);

    return Promise.all(
      arrOfKeyWords.map(word => {
        return tokenGenerator()
          .then(data => {
            const config = {
              headers: {
                Authorization: `Bearer ${data}`,
                "X-EBAY-C-MARKETPLACE-ID": `EBAY_GB`
              }
            };

            return axios.get(
              `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${word} gift -card -cards&limit=${limit}`,
              config
            );
          })
          .then(({ data }) => {
            if (data.itemSummaries) {
              return data.itemSummaries.map(item => {
                return {
                  itemId: item.itemId,
                  title: item.title,
                  categories: item.categories,
                  image: item.image,
                  price: item.price,
                  thumbnailImage: item.thumbnailImages,
                  shippingOptions: item.shippingOptions,
                  buyingOptions: item.buyingOptions,
                  itemWebUrl: item.itemWebUrl,
                  additionalImages: item.additionalImages,
                  adultOnly: item.adultOnly
                };
              });
            } else {
              return Promise.reject({
                status: 404,
                msg: "keyword not found"
              });
            }
          });
      })
    );
  }
};

module.exports = { fetchItems };
