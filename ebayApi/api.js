const axios = require("axios");
const tokenGenerator = require("./tokenGenerator.js");
const fetchItems = keyword => {
  return tokenGenerator()
    .then(data => {
      const config = {
        headers: { Authorization: `Bearer ${data}` }
      };
      return axios.get(
        `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${keyword}&limit=10`,
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
};

module.exports = { fetchItems };
